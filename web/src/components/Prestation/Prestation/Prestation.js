import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_PRESTATION_MUTATION = gql`
  mutation DeletePrestationMutation($id: Int!) {
    deletePrestation(id: $id) {
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
  return (
    <input
      className='className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700'
      type="checkbox"
      checked={checked}
      disabled
    />
  )
}

const Prestation = ({ prestation }) => {
  const [deletePrestation] = useMutation(DELETE_PRESTATION_MUTATION, {
    onCompleted: () => {
      toast.success('Prestation deleted')
      navigate(routes.prestations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete prestation ' + id + '?')) {
      deletePrestation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Prestation {prestation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{prestation.id}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{prestation.nom}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(prestation.actif)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPrestation({ id: prestation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(prestation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Prestation
