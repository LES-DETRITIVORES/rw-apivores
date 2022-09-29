import Contact from 'src/components/Contact/Contact'

export const QUERY = gql`
  query FindContactById($id: Int!) {
    contact: contact(id: $id) {
      id
      usagerId
      ordre
      prenom
      nom
      email
      motdepasse
      telephone1
      telephone2
      remarque
      fonction
      extranet
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Contact not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ contact }) => {
  return <Contact contact={contact} />
}
