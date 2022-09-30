import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Tache/TachesCell'

const DELETE_TACHE_MUTATION = gql`
  mutation DeleteTacheMutation($id: Int!) {
    deleteTache(id: $id) {
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

const TachesList = ({ taches }) => {
  const [deleteTache] = useMutation(DELETE_TACHE_MUTATION, {
    onCompleted: () => {
      toast.success('Tache deleted')
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
    if (confirm('Are you sure you want to delete tache ' + id + '?')) {
      deleteTache({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Debut</th>
            <th>Fin</th>
            <th>Prestation</th>
            <th>Vehicule</th>
            <th>Operateur1</th>
            <th>Operateur2</th>
            <th>Operateur3</th>
            <th>Collecte</th>
            <th>Quantite</th>
            <th>Note collecte</th>
            <th>Pesee</th>
            <th>Poids</th>
            <th>Qualite</th>
            <th>Note pesee</th>
            <th>Photos</th>
            <th>Terminee</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {taches.map((tache) => (
            <tr key={tache.id}>
              <td>{truncate(tache.id)}</td>
              <td>{timeTag(tache.debut)}</td>
              <td>{timeTag(tache.fin)}</td>
              <td>{truncate(tache.prestation)}</td>
              <td>{truncate(tache.vehicule)}</td>
              <td>{truncate(tache.operateur1)}</td>
              <td>{truncate(tache.operateur2)}</td>
              <td>{truncate(tache.operateur3)}</td>
              <td>{timeTag(tache.collecte)}</td>
              <td>{truncate(tache.quantite)}</td>
              <td>{truncate(tache.noteCollecte)}</td>
              <td>{timeTag(tache.pesee)}</td>
              <td>{truncate(tache.poids)}</td>
              <td>{truncate(tache.qualite)}</td>
              <td>{truncate(tache.notePesee)}</td>
              <td>{truncate(tache.photos)}</td>
              <td>{checkboxInputTag(tache.terminee)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tache({ id: tache.id })}
                    title={'Show tache ' + tache.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTache({ id: tache.id })}
                    title={'Edit tache ' + tache.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tache ' + tache.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tache.id)}
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

export default TachesList