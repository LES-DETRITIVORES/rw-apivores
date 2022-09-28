import { formattedDate } from 'src/utils/formattedDate'
const Tarif = ({ tarif }) => {
  return (
    <>
      <tr
        key={tarif.id}
        className={tarif.id % 1 === 0 ? 'bg-white' : 'bg-gray-50'}
      >
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          {tarif.prestation}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {tarif.prix}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <input type="checkbox" checked={tarif.passage} />
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <input type="checkbox" checked={tarif.bac} disabled />
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <input type="checkbox" checked={tarif.actif} />
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {formattedDate(tarif.date)}
        </td>
      </tr>
    </>
  )
}

export default Tarif
