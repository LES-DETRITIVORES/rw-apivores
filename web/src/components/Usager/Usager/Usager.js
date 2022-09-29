import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_USAGER_MUTATION = gql`
  mutation DeleteUsagerMutation($id: Int!) {
    deleteUsager(id: $id) {
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

const Usager = ({ usager }) => {
  const [deleteUsager] = useMutation(DELETE_USAGER_MUTATION, {
    onCompleted: () => {
      toast.success('Usager deleted')
      navigate(routes.usagers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete usager ' + id + '?')) {
      deleteUsager({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Usager {usager.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{usager.id}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{usager.nom}</td>
            </tr>
            <tr>
              <th>Tiers</th>
              <td>{usager.tiers}</td>
            </tr>
            <tr>
              <th>Contact</th>
              <td>{usager.contact}</td>
            </tr>
            <tr>
              <th>Adresse</th>
              <td>{usager.adresse}</td>
            </tr>
            <tr>
              <th>Adresse2</th>
              <td>{usager.adresse2}</td>
            </tr>
            <tr>
              <th>Code postal</th>
              <td>{usager.codePostal}</td>
            </tr>
            <tr>
              <th>Ville</th>
              <td>{usager.ville}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{usager.email}</td>
            </tr>
            <tr>
              <th>Telephone1</th>
              <td>{usager.telephone1}</td>
            </tr>
            <tr>
              <th>Telephone2</th>
              <td>{usager.telephone2}</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>{usager.note}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(usager.actif)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group space-x-2">
        <Link
          to={routes.editUsager({ id: usager.id })}
          className="inline-flex items-center rounded border border-transparent !bg-green-800 px-3 py-2 text-xs font-medium text-white shadow-sm hover:!bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        >
          Edit
        </Link>
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-red-500 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          onClick={() => onDeleteClick(usager.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Usager
