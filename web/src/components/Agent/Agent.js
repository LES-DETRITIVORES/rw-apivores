const Agent = ({ agent }) => {
  return (
    <>
      <tr
        key={agent.id}
        className={agent.id % 1 === 0 ? 'bg-white' : 'bg-gray-50'}
      >
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          {agent.id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {agent.prenom}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {agent.nom}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <input className="rounded" type="checkbox" checked={agent.actif} />
        </td>
      </tr>
    </>
  )
}

export default Agent
