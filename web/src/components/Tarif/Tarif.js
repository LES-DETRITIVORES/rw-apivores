import Table from '../Table'

const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Tarif = ({ tarif }) => {
  return (
    <>
      <Table
        parent={
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Prestation
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Prix
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Passage
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Bac
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Actif
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Date
            </th>
          </tr>
        }
        children={
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
        }
      />
    </>
  )
}

export default Tarif
