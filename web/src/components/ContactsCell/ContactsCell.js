import Contact from 'src/components/Contact'

export const QUERY = gql`
  query ContactsQuery {
    contacts {
      id
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ contacts }) => {
  return (
    <>
      {contacts.map((item) => (
        <Contact key={item.id} contact={item} />
      ))}
    </>
  )
}
