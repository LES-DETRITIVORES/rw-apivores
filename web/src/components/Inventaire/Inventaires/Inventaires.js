import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Inventaire/InventairesCell'

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
      className='className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700'
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
              <td>{truncate(inventaire.site)}</td>
              <td>{truncate(inventaire.materiel)}</td>
              <td>{truncate(inventaire.quantite)}</td>
              <td>{truncate(inventaire.note)}</td>
              <td>{checkboxInputTag(inventaire.actif)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.inventaire({ id: inventaire.id })}
                    title={'Show inventaire ' + inventaire.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInventaire({ id: inventaire.id })}
                    title={'Edit inventaire ' + inventaire.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete inventaire ' + inventaire.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(inventaire.id)}
                  >
                    Delete
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
