import { Link } from '@redwoodjs/router'
import {
  MinusCircleIcon,
  PencilAltIcon,
  EyeIcon,
} from '@heroicons/react/outline'
const Matiere = ({ matiere, show, edit, deleted }) => {
  return (
    <>
      <tr
        key={matiere.id}
        className={matiere.id % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
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

export default Matiere
