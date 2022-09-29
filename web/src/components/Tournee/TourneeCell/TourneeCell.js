import Tournee from 'src/components/Tournee/Tournee'

export const QUERY = gql`
  query FindTourneeById($id: Int!) {
    tournee: tournee(id: $id) {
      id
      date
      note
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tournee not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tournee }) => {
  return <Tournee tournee={tournee} />
}
