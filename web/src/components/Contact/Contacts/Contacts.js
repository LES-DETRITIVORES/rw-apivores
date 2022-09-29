import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Contact/ContactsCell'
import { PencilAltIcon, PencilIcon, XIcon } from '@heroicons/react/outline'

const DELETE_CONTACT_MUTATION = gql`
  mutation DeleteContactMutation($id: Int!) {
    deleteContact(id: $id) {
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
  return (
    <input
      className='className="h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-700'
      type="checkbox"
      checked={checked}
      disabled
    />
  )
}

const ContactsList = ({ contacts }) => {
  const [deleteContact] = useMutation(DELETE_CONTACT_MUTATION, {
    onCompleted: () => {
      toast.success('Contact deleted')
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
    if (confirm('Are you sure you want to delete contact ' + id + '?')) {
      deleteContact({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Usager</th>
            <th>Ordre</th>
            <th>Prenom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Motdepasse</th>
            <th>Telephone1</th>
            <th>Telephone2</th>
            <th>Remarque</th>
            <th>Fonction</th>
            <th>Extranet</th>
            <th>Actif</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{truncate(contact.id)}</td>
              <td>{truncate(contact.usager)}</td>
              <td>{truncate(contact.ordre)}</td>
              <td>{truncate(contact.prenom)}</td>
              <td>{truncate(contact.nom)}</td>
              <td>{truncate(contact.email)}</td>
              <td>{truncate(contact.motdepasse)}</td>
              <td>{truncate(contact.telephone1)}</td>
              <td>{truncate(contact.telephone2)}</td>
              <td>{truncate(contact.remarque)}</td>
              <td>{truncate(contact.fonction)}</td>
              <td>{checkboxInputTag(contact.extranet)}</td>
              <td>{checkboxInputTag(contact.actif)}</td>
              <td>
                <nav className="rw-table-actions space-x-2">
                  <Link
                    to={routes.contact({ id: contact.id })}
                    title={'Show contact ' + contact.id + ' detail'}
                  >
                    <PencilIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <Link
                    to={routes.editContact({ id: contact.id })}
                    title={'Edit contact ' + contact.id}
                  >
                    <PencilAltIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <button
                    type="button"
                    title={'Delete contact ' + contact.id}
                    onClick={() => onDeleteClick(contact.id)}
                  >
                    <XIcon className="h-5 w-5 text-green-900" />
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

export default ContactsList
