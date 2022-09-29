import Vehicule from 'src/components/Vehicule'
import Table from '../Table'
import { routes } from '@redwoodjs/router'

export const QUERY = gql`
  query VehiculesQuery {
    vehicules {
      id
      ordre
      nom
      immatriculation
      identifiant
      couleur
      icone
      actif
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
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Ordre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Nom
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Immatriculation
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Identifiant
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Couleur
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Icône
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Actif
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
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
