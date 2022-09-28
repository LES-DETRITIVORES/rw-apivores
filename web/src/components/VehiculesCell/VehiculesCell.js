import Vehicule from 'src/components/Vehicule'

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
      {vehicules.map((item) => (
        <Vehicule key={item.id} vehicule={item} />
      ))}
    </>
  )
}
