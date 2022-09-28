import Table from '../Table'
const Materiel = ({ materiel }) => {
  return (
    <>
      <Table
        parent={
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Id
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Nom
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Poids
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Actif
            </th>
          </tr>
        }
        children={
          <tr
            key={materiel.id}
            className={materiel.id % 1 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
              {materiel.id}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {materiel.nom}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {materiel.poids}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              <input type="checkbox" checked={materiel.actif} disabled />
            </td>
          </tr>
        }
      />
    </>
  )
}

export default Materiel
