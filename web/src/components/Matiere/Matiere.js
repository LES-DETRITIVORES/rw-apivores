import Table from '../Table'
const Matiere = ({ matiere }) => {
  return (
    <>
      <tr
        key={matiere.id}
        className={matiere.id % 1 === 0 ? 'bg-white' : 'bg-gray-50'}
      >
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          {matiere.id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {matiere.nom}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <input type="checkbox" checked={matiere.actif} disabled />
        </td>
      </tr>
    </>
  )
}

export default Matiere
