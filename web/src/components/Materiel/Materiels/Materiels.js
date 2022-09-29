import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Materiel/MaterielsCell'

const DELETE_MATERIEL_MUTATION = gql`
  mutation DeleteMaterielMutation($id: Int!) {
    deleteMateriel(id: $id) {
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

const MaterielsList = ({ materiels }) => {
  const [deleteMateriel] = useMutation(DELETE_MATERIEL_MUTATION, {
    onCompleted: () => {
      toast.success('Materiel deleted')
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
    if (confirm('Are you sure you want to delete materiel ' + id + '?')) {
      deleteMateriel({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Poids</th>
            <th>Actif</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {materiels.map((materiel) => (
            <tr key={materiel.id}>
              <td>{truncate(materiel.id)}</td>
              <td>{truncate(materiel.nom)}</td>
              <td>{truncate(materiel.poids)}</td>
              <td>{checkboxInputTag(materiel.actif)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.materiel({ id: materiel.id })}
                    title={'Show materiel ' + materiel.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMateriel({ id: materiel.id })}
                    title={'Edit materiel ' + materiel.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete materiel ' + materiel.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(materiel.id)}
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

export default MaterielsList
