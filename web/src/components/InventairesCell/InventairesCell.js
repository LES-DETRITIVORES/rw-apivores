import Inventaire from 'src/components/Inventaire'

export const QUERY = gql`
  query InventairesQuery {
    inventaires {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ inventaires }) => {
  return (
    <>
      {inventaires.map((item) => (
        <Inventaire key={item.id} inventaire={item} />
      ))}
    </>
  )
}
