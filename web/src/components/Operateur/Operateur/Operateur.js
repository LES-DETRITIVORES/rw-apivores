import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_OPERATEUR_MUTATION = gql`
  mutation DeleteOperateurMutation($id: Int!) {
    deleteOperateur(id: $id) {
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

const Operateur = ({ operateur }) => {
  const [deleteOperateur] = useMutation(DELETE_OPERATEUR_MUTATION, {
    onCompleted: () => {
      toast.success('Operateur deleted')
      navigate(routes.operateurs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete operateur ' + id + '?')) {
      deleteOperateur({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Operateur {operateur.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{operateur.id}</td>
            </tr>
            <tr>
              <th>Prenom</th>
              <td>{operateur.prenom}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{operateur.nom}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(operateur.actif)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOperateur({ id: operateur.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(operateur.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Operateur
