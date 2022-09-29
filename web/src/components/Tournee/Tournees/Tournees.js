import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Tournee/TourneesCell'

const DELETE_TOURNEE_MUTATION = gql`
  mutation DeleteTourneeMutation($id: Int!) {
    deleteTournee(id: $id) {
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

const TourneesList = ({ tournees }) => {
  const [deleteTournee] = useMutation(DELETE_TOURNEE_MUTATION, {
    onCompleted: () => {
      toast.success('Tournee deleted')
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
    if (confirm('Are you sure you want to delete tournee ' + id + '?')) {
      deleteTournee({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Note</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tournees.map((tournee) => (
            <tr key={tournee.id}>
              <td>{truncate(tournee.id)}</td>
              <td>{timeTag(tournee.date)}</td>
              <td>{truncate(tournee.note)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tournee({ id: tournee.id })}
                    title={'Show tournee ' + tournee.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTournee({ id: tournee.id })}
                    title={'Edit tournee ' + tournee.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tournee ' + tournee.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tournee.id)}
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

export default TourneesList
