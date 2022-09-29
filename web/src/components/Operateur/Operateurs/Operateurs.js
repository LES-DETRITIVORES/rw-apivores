import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Operateur/OperateursCell'

const DELETE_OPERATEUR_MUTATION = gql`
  mutation DeleteOperateurMutation($id: Int!) {
    deleteOperateur(id: $id) {
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
  return <input type="checkbox" checked={checked} disabled />
}

const OperateursList = ({ operateurs }) => {
  const [deleteOperateur] = useMutation(DELETE_OPERATEUR_MUTATION, {
    onCompleted: () => {
      toast.success('Operateur deleted')
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
    if (confirm('Are you sure you want to delete operateur ' + id + '?')) {
      deleteOperateur({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Prenom</th>
            <th>Nom</th>
            <th>Actif</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {operateurs.map((operateur) => (
            <tr key={operateur.id}>
              <td>{truncate(operateur.id)}</td>
              <td>{truncate(operateur.prenom)}</td>
              <td>{truncate(operateur.nom)}</td>
              <td>{checkboxInputTag(operateur.actif)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.operateur({ id: operateur.id })}
                    title={'Show operateur ' + operateur.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editOperateur({ id: operateur.id })}
                    title={'Edit operateur ' + operateur.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete operateur ' + operateur.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(operateur.id)}
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

export default OperateursList
