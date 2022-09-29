import Test from 'src/components/Test/Test'

export const QUERY = gql`
  query FindTestById($id: Int!) {
    test: test(id: $id) {
      id
      nom
      date
      actif
      prix
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Test not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ test }) => {
  return <Test test={test} />
}
