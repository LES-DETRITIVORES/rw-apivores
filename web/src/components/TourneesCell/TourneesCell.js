import Tournee from 'src/components/Tournee'
import Table from '../Table'

export const QUERY = gql`
  query TourneesQuery {
    tournees {
      id
      date
      heure
      vehicule
      agents
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ tournees }) => {
  return (
    <>
      <Table
        parent={
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Heure
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Véhicule
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Agents
            </th>
            <th>
              Actions
            </th>
          </tr>
        }
        data={tournees.map((item) => (
          <Tournee key={item.id} tournee={item} />
        ))}
      />
    </>
  )
}
