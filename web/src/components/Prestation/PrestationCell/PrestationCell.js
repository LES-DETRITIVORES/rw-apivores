import Prestation from 'src/components/Prestation/Prestation'

export const QUERY = gql`
  query FindPrestationById($id: Int!) {
    prestation: prestation(id: $id) {
      id
      nom
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Prestation not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ prestation }) => {
  return <Prestation prestation={prestation} />
}
