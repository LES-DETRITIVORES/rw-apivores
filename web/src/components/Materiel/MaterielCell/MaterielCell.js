import Materiel from 'src/components/Materiel/Materiel'

export const QUERY = gql`
  query FindMaterielById($id: Int!) {
    materiel: materiel(id: $id) {
      id
      nom
      poids
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Materiel not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ materiel }) => {
  return <Materiel materiel={materiel} />
}
