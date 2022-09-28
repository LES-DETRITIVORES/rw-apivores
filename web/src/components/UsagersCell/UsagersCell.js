import Table from '../Table'
import Usager from '../Usager/Usager'
export const QUERY = gql`
  query UsagersQuery {
    usagers {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ usagers }) => {
  return (
    <>
      <Table
        parent={
          <tr>
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
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Tiers
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Adresse
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Adresse 2
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Code postal
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Ville
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Contact
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Téléphone 1
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Téléphone 2
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Note
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
          </tr>
        }
        data={usagers.map((item) => (
          <Usager key={item.id} usager={item} />
        ))}
      />
    </>
  )
}
