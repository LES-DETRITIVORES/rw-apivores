import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_INVENTAIRE_MUTATION = gql`
  mutation DeleteInventaireMutation($id: Int!) {
    deleteInventaire(id: $id) {
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

const Inventaire = ({ inventaire }) => {
  const [deleteInventaire] = useMutation(DELETE_INVENTAIRE_MUTATION, {
    onCompleted: () => {
      toast.success('Inventaire deleted')
      navigate(routes.inventaires())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete inventaire ' + id + '?')) {
      deleteInventaire({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Inventaire {inventaire.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{inventaire.id}</td>
            </tr>
            <tr>
              <th>Site</th>
              <td>{inventaire.site}</td>
            </tr>
            <tr>
              <th>Materiel</th>
              <td>{inventaire.materiel}</td>
            </tr>
            <tr>
              <th>Quantite</th>
              <td>{inventaire.quantite}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInventaire({ id: inventaire.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(inventaire.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Inventaire
