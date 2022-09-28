import Usager from 'src/components/Usager'

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
      {usagers.map((item) => (
          <Usager key={item.id} usager={item} />
      ))}
    </>
  )
}
