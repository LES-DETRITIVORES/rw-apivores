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
      className='className="h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-700'
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
              <th>Site</th>
              <td>{prestation.site}</td>
            </tr>
            <tr>
              <th>Matiere</th>
              <td>{prestation.matiere}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(prestation.date)}</td>
            </tr>
            <tr>
              <th>Service</th>
              <td>{prestation.service}</td>
            </tr>
            <tr>
              <th>Prix</th>
              <td>{prestation.prix}</td>
            </tr>
            <tr>
              <th>Forfait</th>
              <td>{checkboxInputTag(prestation.forfait)}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(prestation.actif)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group space-x-2">
        <Link
          to={routes.editPrestation({ id: prestation.id })}
          className="inline-flex items-center rounded border border-transparent !bg-green-800 px-3 py-2 text-xs font-medium text-white shadow-sm hover:!bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        >
          Edit
        </Link>
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-red-500 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          onClick={() => onDeleteClick(prestation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Prestation
