import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Service/ServicesCell'
import { PencilAltIcon, PencilIcon, XIcon } from '@heroicons/react/outline'

const DELETE_SERVICE_MUTATION = gql`
  mutation DeleteServiceMutation($id: Int!) {
    deleteService(id: $id) {
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

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete service ' + id + '?')) {
      deleteService({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Actif</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{truncate(service.id)}</td>
              <td>{truncate(service.nom)}</td>
              <td>{checkboxInputTag(service.actif)}</td>
              <td>
                <nav className="rw-table-actions space-x-2">
                  <Link
                    to={routes.service({ id: service.id })}
                    title={'Show service ' + service.id + ' detail'}
                  >
                    <PencilIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <Link
                    to={routes.editService({ id: service.id })}
                    title={'Edit service ' + service.id}
                  >
                    <PencilAltIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <button
                    type="button"
                    title={'Delete service ' + service.id}
                    onClick={() => onDeleteClick(service.id)}
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

export default ServicesList
