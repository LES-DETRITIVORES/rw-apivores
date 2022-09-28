import { formattedDate } from 'src/utils/formattedDate'
import { Link } from '@redwoodjs/router'
import VehiculeCell from 'src/components/VehiculeCell'

import {
  EyeIcon,
  PencilAltIcon,
  MinusCircleIcon,
} from '@heroicons/react/outline'

const Tournee = ({ tournee, edit, show, deleted }) => {
  return (
    <>
      <tr
        key={tournee.id}
        className={tournee.id % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
      >
        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
          {formattedDate(tournee.date)}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {tournee.heure}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          <VehiculeCell vehicule={tournee.vehicule}/>
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
          {tournee.agents}
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

export default Tournee
