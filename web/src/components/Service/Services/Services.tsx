import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Service/ServicesCell'
import { Utils } from 'src/utils'

import { RWGqlError } from '../../../../interfaces'

const DELETE_SERVICE_MUTATION = gql`
  mutation DeleteServiceMutation($id: Int!) {
    deleteService(id: $id) {
      id
    }
  }
`
interface Props {
  error: RWGqlError | null
  onSave: (data: any, id: string) => void
  id: number
  name: string

  loading: boolean
}

const ServicesList = ({ services }) => {
  const [deleteService] = useMutation(DELETE_SERVICE_MUTATION, {
    onCompleted: () => {
      toast.success('Service deleted')
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
    if (utils.isConfirm('service', 'delete', id)) {
      deleteService({ variables: { id } }).then((r) => console.log(r))
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service: Props) => (
            <tr key={service.id}>
              <td>{utils.truncateString(service.id)}</td>
              <td>{utils.truncateString(service.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.service({ id: service.id })}
                    title={'Show service ' + service.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editService({ id: service.id })}
                    title={'Edit service ' + service.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete service ' + service.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(service.id)}
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

export default ServicesList
