import Tournee from 'src/components/Tournee'

export const QUERY = gql`
  query TourneesQuery {
    tournees {
      id
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
      {tournees.map((item) => (
          <Tournee key={item.id} tournee={item} />
      ))}
    </>
  )
}
