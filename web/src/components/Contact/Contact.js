const Contact = ({ contact }) => {
  return (
    <>
      <tr
        key={contact.id}
        className={contact.id % 1 === 0 ? 'bg-white' : 'bg-gray-50'}
      >
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          {contact.ordre}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {contact.prenom}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {contact.nom}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {contact.email}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {contact.motdepasse}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {contact.telephone1}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {contact.telephone2}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {contact.remarque}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {contact.fonction}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <input
            className="rounded"
            type="checkbox"
            checked={contact.extranet}
          />
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <input className="rounded" type="checkbox" checked={contact.actif} />
        </td>
      </tr>
    </>
  )
}

export default Contact
