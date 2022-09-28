import Site from 'src/components/Site'

export const QUERY = gql`
  query SitesQuery {
    sites {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ sites }) => {
  return (
    <>
      {sites.map((item) => (
          <Site key={item.id} site={item} />
      ))}
    </>
  )
}
