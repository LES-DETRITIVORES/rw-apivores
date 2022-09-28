import {
  PencilAltIcon,
  EyeIcon,
  MinusCircleIcon,
} from '@heroicons/react/outline'
import { Link } from '@redwoodjs/router'

const Site = ({ site, show, deleted, edit }) => {
  return (
    <>
      <tr
        key={site.id}
        className={site.id % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
      >
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          {site.ordre}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.usager}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.nom}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.adresse}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.adresse2}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.codePostal}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.ville}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.note}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.latitude}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.longitude}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.etage}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {site.ascenseur}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <input type="checkbox" checked={site.actif} />
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

export default Site
