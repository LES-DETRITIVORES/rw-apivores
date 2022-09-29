import { formattedDate } from 'src/utils/formattedDate'
import { Link } from '@redwoodjs/router'
import VehiculeCell from 'src/components/VehiculeCell'
import { getHours } from 'src/utils/getHours'

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
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
          {formattedDate(tournee.date)}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
          {getHours(tournee.date)}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
          <VehiculeCell vehicule={tournee.vehicule} />
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
          {tournee.agents}
        </td>
        <div className="inline-flex space-x-0">
          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
            <Link to={edit} className="text-indigo-600 hover:text-indigo-900">
              <PencilAltIcon className="h-5 w-5" />
            </Link>
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
            <Link to={show} className="text-indigo-600 hover:text-indigo-900">
              <EyeIcon className="h-5 w-5" />
            </Link>
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
            <Link
              to={deleted}
              className="text-indigo-600 hover:text-indigo-900"
            >
              <MinusCircleIcon className="h-5 w-5" />
            </Link>
          </td>
        </div>
      </tr>
    </>
  )
}

export default Tournee
