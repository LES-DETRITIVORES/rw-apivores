import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Utils } from 'src/utils'

const DELETE_CUSTOMER_MUTATION = gql`
  mutation DeleteCustomerMutation($id: Int!) {
    deleteCustomer(id: $id) {
      id
    }
  }
`

const Customer = ({ customer }) => {
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER_MUTATION, {
    onCompleted: () => {
      toast.success('Customer deleted')
      navigate(routes.customers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const utils = new Utils()
  const onDeleteClick = (id: number) => {
    if (utils.isConfirm('customer', 'delete', id)) {
      deleteCustomer({ variables: { id } }).then((r) => console.log(r))
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Customer {customer.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{customer.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{customer.name}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{customer.role}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCustomer({ id: customer.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(customer.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Customer
