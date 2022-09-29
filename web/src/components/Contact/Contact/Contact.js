import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_CONTACT_MUTATION = gql`
  mutation DeleteContactMutation($id: Int!) {
    deleteContact(id: $id) {
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

const Contact = ({ contact }) => {
  const [deleteContact] = useMutation(DELETE_CONTACT_MUTATION, {
    onCompleted: () => {
      toast.success('Contact deleted')
      navigate(routes.contacts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete contact ' + id + '?')) {
      deleteContact({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Contact {contact.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{contact.id}</td>
            </tr>
            <tr>
              <th>Usager</th>
              <td>{contact.usager}</td>
            </tr>
            <tr>
              <th>Ordre</th>
              <td>{contact.ordre}</td>
            </tr>
            <tr>
              <th>Prenom</th>
              <td>{contact.prenom}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{contact.nom}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{contact.email}</td>
            </tr>
            <tr>
              <th>Motdepasse</th>
              <td>{contact.motdepasse}</td>
            </tr>
            <tr>
              <th>Telephone1</th>
              <td>{contact.telephone1}</td>
            </tr>
            <tr>
              <th>Telephone2</th>
              <td>{contact.telephone2}</td>
            </tr>
            <tr>
              <th>Remarque</th>
              <td>{contact.remarque}</td>
            </tr>
            <tr>
              <th>Fonction</th>
              <td>{contact.fonction}</td>
            </tr>
            <tr>
              <th>Extranet</th>
              <td>{checkboxInputTag(contact.extranet)}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(contact.actif)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editContact({ id: contact.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(contact.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Contact
