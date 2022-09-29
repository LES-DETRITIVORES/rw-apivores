import Inventaire from 'src/components/Inventaire/Inventaire'

export const QUERY = gql`
  query FindInventaireById($id: Int!) {
    inventaire: inventaire(id: $id) {
      id
      site
      materiel
      quantite
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Inventaire not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ inventaire }) => {
  return <Inventaire inventaire={inventaire} />
}
