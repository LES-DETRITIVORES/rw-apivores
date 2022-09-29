import Usager from 'src/components/Usager/Usager'

export const QUERY = gql`
  query FindUsagerById($id: Int!) {
    usager: usager(id: $id) {
      id
      nom
      tiers
      contact
      adresse
      adresse2
      codePostal
      ville
      email
      telephone1
      telephone2
      note
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Usager not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ usager }) => {
  return <Usager usager={usager} />
}
