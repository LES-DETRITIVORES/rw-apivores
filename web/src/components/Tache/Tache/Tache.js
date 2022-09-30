import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_TACHE_MUTATION = gql`
  mutation DeleteTacheMutation($id: Int!) {
    deleteTache(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Tache = ({ tache }) => {
  const [deleteTache] = useMutation(DELETE_TACHE_MUTATION, {
    onCompleted: () => {
      toast.success('Tache deleted')
      navigate(routes.taches())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tache ' + id + '?')) {
      deleteTache({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tache {tache.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tache.id}</td>
            </tr>
            <tr>
              <th>Debut</th>
              <td>{timeTag(tache.debut)}</td>
            </tr>
            <tr>
              <th>Fin</th>
              <td>{timeTag(tache.fin)}</td>
            </tr>
            <tr>
              <th>Prestation</th>
              <td>{tache.prestation}</td>
            </tr>
            <tr>
              <th>Vehicule</th>
              <td>{tache.vehicule}</td>
            </tr>
            <tr>
              <th>Operateur1</th>
              <td>{tache.operateur1}</td>
            </tr>
            <tr>
              <th>Operateur2</th>
              <td>{tache.operateur2}</td>
            </tr>
            <tr>
              <th>Operateur3</th>
              <td>{tache.operateur3}</td>
            </tr>
            <tr>
              <th>Collecte</th>
              <td>{timeTag(tache.collecte)}</td>
            </tr>
            <tr>
              <th>Quantite</th>
              <td>{tache.quantite}</td>
            </tr>
            <tr>
              <th>Note collecte</th>
              <td>{tache.noteCollecte}</td>
            </tr>
            <tr>
              <th>Pesee</th>
              <td>{timeTag(tache.pesee)}</td>
            </tr>
            <tr>
              <th>Poids</th>
              <td>{tache.poids}</td>
            </tr>
            <tr>
              <th>Qualite</th>
              <td>{tache.qualite}</td>
            </tr>
            <tr>
              <th>Note pesee</th>
              <td>{tache.notePesee}</td>
            </tr>
            <tr>
              <th>Photos</th>
              <td>{tache.photos}</td>
            </tr>
            <tr>
              <th>Terminee</th>
              <td>{checkboxInputTag(tache.terminee)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTache({ id: tache.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tache.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Tache
