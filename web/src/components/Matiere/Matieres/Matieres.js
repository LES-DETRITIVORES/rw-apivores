import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Matiere/MatieresCell'
import { PencilAltIcon, PencilIcon, XIcon } from '@heroicons/react/outline'

const DELETE_MATIERE_MUTATION = gql`
  mutation DeleteMatiereMutation($id: Int!) {
    deleteMatiere(id: $id) {
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

const MatieresList = ({ matieres }) => {
  const [deleteMatiere] = useMutation(DELETE_MATIERE_MUTATION, {
    onCompleted: () => {
      toast.success('Matiere deleted')
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
    if (confirm('Are you sure you want to delete matiere ' + id + '?')) {
      deleteMatiere({ variables: { id } })
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
          {matieres.map((matiere) => (
            <tr key={matiere.id}>
              <td>{truncate(matiere.id)}</td>
              <td>{truncate(matiere.nom)}</td>
              <td>{checkboxInputTag(matiere.actif)}</td>
              <td>
                <nav className="rw-table-actions space-x-2">
                  <Link
                    to={routes.matiere({ id: matiere.id })}
                    title={'Show matiere ' + matiere.id + ' detail'}
                  >
                    <PencilIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <Link
                    to={routes.editMatiere({ id: matiere.id })}
                    title={'Edit matiere ' + matiere.id}
                  >
                    <PencilAltIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <button
                    type="button"
                    title={'Delete matiere ' + matiere.id}
                    onClick={() => onDeleteClick(matiere.id)}
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

export default MatieresList
