import { formattedDate } from 'src/utils/formattedDate'

const Inventaire = ({ inventaire }) => {
  return (
    <>
      <tr
        key={inventaire.id}
        className={inventaire.id % 1 === 0 ? 'bg-white' : 'bg-gray-50'}
      >
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          {formattedDate(inventaire.date)}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {inventaire.materiel}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {inventaire.site}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {inventaire.quantite}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {inventaire.note}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <input type="checkbox" checked={inventaire.actif} disabled />
        </td>
      </tr>
    </>
  )
}

export default Inventaire
