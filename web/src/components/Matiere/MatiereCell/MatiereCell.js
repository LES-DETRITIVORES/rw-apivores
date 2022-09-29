import Matiere from 'src/components/Matiere/Matiere'

export const QUERY = gql`
  query FindMatiereById($id: Int!) {
    matiere: matiere(id: $id) {
      id
      nom
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Matiere not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ matiere }) => {
  return <Matiere matiere={matiere} />
}
