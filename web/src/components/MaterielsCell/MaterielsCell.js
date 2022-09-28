import Materiel from 'src/components/Materiel' 

export const QUERY = gql`
  query MaterielsQuery {
    materiels {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ materiels }) => {
  return (
    <>
      {materiels.map((item) => (
        <Materiel key={item.id} materiel={item} />
      ))}
    </>
  )
}
