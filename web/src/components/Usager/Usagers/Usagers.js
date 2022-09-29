import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Usager/UsagersCell'

const DELETE_USAGER_MUTATION = gql`
  mutation DeleteUsagerMutation($id: Int!) {
    deleteUsager(id: $id) {
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

const UsagersList = ({ usagers }) => {
  const [deleteUsager] = useMutation(DELETE_USAGER_MUTATION, {
    onCompleted: () => {
      toast.success('Usager deleted')
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
    if (confirm('Are you sure you want to delete usager ' + id + '?')) {
      deleteUsager({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Tiers</th>
            <th>Contact</th>
            <th>Adresse</th>
            <th>Adresse2</th>
            <th>Code postal</th>
            <th>Ville</th>
            <th>Email</th>
            <th>Telephone1</th>
            <th>Telephone2</th>
            <th>Note</th>
            <th>Actif</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {usagers.map((usager) => (
            <tr key={usager.id}>
              <td>{truncate(usager.id)}</td>
              <td>{truncate(usager.nom)}</td>
              <td>{truncate(usager.tiers)}</td>
              <td>{truncate(usager.contact)}</td>
              <td>{truncate(usager.adresse)}</td>
              <td>{truncate(usager.adresse2)}</td>
              <td>{truncate(usager.codePostal)}</td>
              <td>{truncate(usager.ville)}</td>
              <td>{truncate(usager.email)}</td>
              <td>{truncate(usager.telephone1)}</td>
              <td>{truncate(usager.telephone2)}</td>
              <td>{truncate(usager.note)}</td>
              <td>{checkboxInputTag(usager.actif)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.usager({ id: usager.id })}
                    title={'Show usager ' + usager.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUsager({ id: usager.id })}
                    title={'Edit usager ' + usager.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete usager ' + usager.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(usager.id)}
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

export default UsagersList
