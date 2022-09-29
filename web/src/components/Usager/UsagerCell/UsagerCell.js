import Usager from 'src/components/Usager/Usager'

export const QUERY = gql`
  query FindUsagerById($id: Int!) {
    usager: usager(id: $id) {
      id
      nom
      type
      tiers
      contact
      adresse
      email
      telephone
      reference
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
