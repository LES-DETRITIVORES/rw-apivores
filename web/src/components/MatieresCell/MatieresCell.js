import Matiere from 'src/components/Matiere'

export const QUERY = gql`
  query MatieresQuery {
    matieres {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ matieres }) => {
  return (
    <>
      {matieres.map((item) => (
        <Matiere key={item.id} matiere={item} />
      ))}
    </>
  )
}
