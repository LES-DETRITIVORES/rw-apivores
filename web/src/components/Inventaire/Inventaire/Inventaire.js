import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Site/SitesCell'
import { QUERYTWO } from 'src/components/Materiel/MaterielsCell'
const DELETE_INVENTAIRE_MUTATION = gql`
  mutation DeleteInventaireMutation($id: Int!) {
    deleteInventaire(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Inventaire = ({ inventaire }) => {
  const [deleteInventaire] = useMutation(DELETE_INVENTAIRE_MUTATION, {
    onCompleted: () => {
      toast.success('Inventaire deleted')
      navigate(routes.inventaires())
    },
    onError: (error) => {
      toast.error(error.message)
    },
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

  const sites = data.sites.reduce((acc, site) => {
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Inventaire {inventaire.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{inventaire.id}</td>
            </tr>
            <tr>
              <th>Site</th>
              <td>{inventaire.site}</td>
            </tr>
            <tr>
              <th>Materiel</th>
              <td>{inventaire.materiel}</td>
            </tr>
            <tr>
              <th>Quantite</th>
              <td>{inventaire.quantite}</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>{inventaire.note}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(inventaire.actif)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group space-x-2">
        <Link
          to={routes.editInventaire({ id: inventaire.id })}
          className="inline-flex items-center rounded border border-transparent !bg-green-800 px-3 py-2 text-xs font-medium text-white shadow-sm hover:!bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        >
          Edit
        </Link>
        <button
          type="button"
          onClick={() => onDeleteClick(inventaire.id)}
          className="inline-flex items-center rounded border border-transparent bg-red-500 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Inventaire
