import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Vehicule/VehiculesCell'
import { PencilAltIcon, PencilIcon, XIcon } from '@heroicons/react/outline'

const DELETE_VEHICULE_MUTATION = gql`
  mutation DeleteVehiculeMutation($id: Int!) {
    deleteVehicule(id: $id) {
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

const VehiculesList = ({ vehicules }) => {
  const [deleteVehicule] = useMutation(DELETE_VEHICULE_MUTATION, {
    onCompleted: () => {
      toast.success('Vehicule deleted')
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
    if (confirm('Are you sure you want to delete vehicule ' + id + '?')) {
      deleteVehicule({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Ordre</th>
            <th>Nom</th>
            <th>Immatriculation</th>
            <th>Identifiant</th>
            <th>Couleur</th>
            <th>Icone</th>
            <th>Actif</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {vehicules.map((vehicule) => (
            <tr key={vehicule.id}>
              <td>{truncate(vehicule.id)}</td>
              <td>{truncate(vehicule.ordre)}</td>
              <td>{truncate(vehicule.nom)}</td>
              <td>{truncate(vehicule.immatriculation)}</td>
              <td>{truncate(vehicule.identifiant)}</td>
              <td className="inline-flex items-center space-x-4">
                <div
                  className={`mr-3 h-3 w-3 rounded-full bg-[${truncate(
                    vehicule.couleur
                  )}]`}
                />
                {truncate(vehicule.couleur)}
              </td>
              <td>{truncate(vehicule.icone)}</td>
              <td>{checkboxInputTag(vehicule.actif)}</td>
              <td>
                <nav className="rw-table-actions space-x-2">
                  <Link
                    to={routes.vehicule({ id: vehicule.id })}
                    title={'Show vehicule ' + vehicule.id + ' detail'}
                  >
                    <PencilIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <Link
                    to={routes.editVehicule({ id: vehicule.id })}
                    title={'Edit vehicule ' + vehicule.id}
                  >
                    <PencilAltIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <button
                    type="button"
                    title={'Delete vehicule ' + vehicule.id}
                    onClick={() => onDeleteClick(vehicule.id)}
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

export default VehiculesList
