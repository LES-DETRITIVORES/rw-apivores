import { formattedDate } from 'src/utils/formattedDate'
import {
  PencilAltIcon,
  EyeIcon,
  MinusCircleIcon,
} from '@heroicons/react/outline'
import { Link } from '@redwoodjs/router'

const Inventaire = ({ inventaire, edit, show, deleted }) => {
  return (
    <>
      <tr
        key={inventaire.id}
        className={inventaire.id % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
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
        <div className="inline-flex space-x-0">
          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            <Link to={edit} className="text-indigo-600 hover:text-indigo-900">
              <PencilAltIcon className="w-5 h-5" />
            </Link>
          </td>
          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            <Link to={show} className="text-indigo-600 hover:text-indigo-900">
              <EyeIcon className="w-5 h-5" />
            </Link>
          </td>
          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
            <Link
              to={deleted}
              className="text-indigo-600 hover:text-indigo-900"
            >
              <MinusCircleIcon className="w-5 h-5" />
            </Link>
          </td>
        </div>
      </tr>
    </>
  )
}

export default Inventaire
