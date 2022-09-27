import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Client/ClientsCell'
import { Utils } from 'src/utils'

const DELETE_CLIENT_MUTATION = gql`
  mutation DeleteClientMutation($id: Int!) {
    deleteClient(id: $id) {
      id
    }
  }
`

const ClientsList = ({ clients }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION, {
    onCompleted: () => {
      toast.success('Client deleted')
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

  const utils = new Utils()
  const onDeleteClick = (id: number) => {
    if (utils.isConfirm('client', 'delete', id)) {
      deleteClient({ variables: { id } }).then((r) => console.log(r))
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mission id</th>
            <th>Customer id</th>
            <th>Checked</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{utils.truncateString(client.id)}</td>
              <td>{utils.truncateString(client.name)}</td>
              <td>{utils.truncateString(client.missionId)}</td>
              <td>{utils.truncateString(client.customerId)}</td>
              <td>{utils.checkboxInput(client.checked)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.client({ id: client.id })}
                    title={'Show client ' + client.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editClient({ id: client.id })}
                    title={'Edit client ' + client.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete client ' + client.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(client.id)}
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

export default ClientsList
