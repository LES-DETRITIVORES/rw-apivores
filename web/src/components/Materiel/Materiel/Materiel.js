import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_MATERIEL_MUTATION = gql`
  mutation DeleteMaterielMutation($id: Int!) {
    deleteMateriel(id: $id) {
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

const Materiel = ({ materiel }) => {
  const [deleteMateriel] = useMutation(DELETE_MATERIEL_MUTATION, {
    onCompleted: () => {
      toast.success('Materiel deleted')
      navigate(routes.materiels())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete materiel ' + id + '?')) {
      deleteMateriel({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Materiel {materiel.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{materiel.id}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{materiel.nom}</td>
            </tr>
            <tr>
              <th>Poids</th>
              <td>{materiel.poids}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(materiel.actif)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMateriel({ id: materiel.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(materiel.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Materiel
