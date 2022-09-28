import Vehicule from 'src/components/Vehicule'
import Table from '../Table'
import { routes } from '@redwoodjs/router'
export const QUERY = gql`
  query VehiculesQuery {
    vehicules {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ vehicules }) => {
  return (
    <>
      <Table
        parent={
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Ordre
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
              Immatriculation
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Identifiant
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Couleur
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Icône
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
              Actions
            </th>
            <th scope="col" className="relative py-3 px-9">
              <button
                type="button"
                onClick={() => {
                  navigate(routes.newVehicule())
                }}
                className="rounded-lg bg-indigo-800 px-2.5 py-2.5 text-sm font-normal text-white hover:bg-indigo-900"
              >
                Nouveau véhicule
              </button>
            </th>
          </tr>
        }
        data={vehicules.map((item) => (
          <Vehicule key={item.id} vehicule={item} />
        ))}
      />
    </>
  )
}
