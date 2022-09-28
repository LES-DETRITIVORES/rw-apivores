import { formattedDate } from 'src/utils/formattedDate'
import { Link } from '@redwoodjs/router'
import {
  EyeIcon,
  PencilAltIcon,
  MinusCircleIcon,
} from '@heroicons/react/outline'
const Usager = ({ usager, edit, show, deleted }) => {
  return (
    <>
      <tr
        key={usager.id}
        className={usager.id % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
      >
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          {usager.nom}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.type}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.tiers}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.adresse}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.adresse2}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.codePostal}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.ville}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.contact}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.email}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.telephone1}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.telephone2}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {usager.note}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <input type="checkbox" checked={usager.actif} />
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

export default Usager
