import Operateur from 'src/components/Operateur/Operateur'

export const QUERY = gql`
  query FindOperateurById($id: Int!) {
    operateur: operateur(id: $id) {
      id
      prenom
      nom
      actif
      tourneeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Operateur not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ operateur }) => {
  return <Operateur operateur={operateur} />
}
