import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Site/SitesCell'
import { QUERYTWO } from 'src/components/Materiel/MaterielsCell'
import { PencilAltIcon, PencilIcon, XIcon } from '@heroicons/react/outline'
const DELETE_INVENTAIRE_MUTATION = gql`
  mutation DeleteInventaireMutation($id: Int!) {
    deleteInventaire(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (value) => {
  const output = value?.toString()
  if (output?.length > MAX_STRING_LENGTH) {
    return output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output ?? ''
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return (
    <input
      className='className="h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-700'
      type="checkbox"
      checked={checked}
      disabled
    />
  )
}

const InventairesList = ({ inventaires }) => {
  const [deleteInventaire] = useMutation(DELETE_INVENTAIRE_MUTATION, {
    onCompleted: () => {
      toast.success('Inventaire deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete inventaire ' + id + '?')) {
      deleteInventaire({ variables: { id } })
    }
  }

  const { loading, error, data } = useQuery(QUERY)
  const { data: datas } = useQuery(QUERYTWO)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const sites = data?.sites?.reduce((acc, site) => {
    acc[site.id] = site.nom
    return acc
  }, {})

  const materiel = datas?.materiels?.reduce((acc, materiel) => {
    acc[materiel.id] = materiel.nom
    return acc
  }, {})

  if (materiel === undefined) return null

  if (sites === undefined) return null

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Site</th>
            <th>Materiel</th>
            <th>Quantite</th>
            <th>Note</th>
            <th>Actif</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {inventaires.map((inventaire) => (
            <tr key={inventaire.id}>
              <td>{truncate(inventaire.id)}</td>
              <td>{truncate(sites[inventaire.id])}</td>
              <td>{truncate(materiel[inventaire.id])}</td>
              <td>{truncate(inventaire.quantite)}</td>
              <td>{truncate(inventaire.note)}</td>
              <td>{checkboxInputTag(inventaire.actif)}</td>
              <td>
                <nav className="rw-table-actions space-x-2">
                  <Link
                    to={routes.inventaire({ id: inventaire.id })}
                    title={'Show inventaire ' + inventaire.id + ' detail'}
                  >
                    <PencilIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <Link
                    to={routes.editInventaire({ id: inventaire.id })}
                    title={'Edit inventaire ' + inventaire.id}
                  >
                    <PencilAltIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <button
                    type="button"
                    title={'Delete inventaire ' + inventaire.id}
                    onClick={() => onDeleteClick(inventaire.id)}
                  >
                    <XIcon className="h-5 w-5 text-green-900" />
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InventairesList
