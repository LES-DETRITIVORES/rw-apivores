import Agent from 'src/components/Agent'

export const QUERY = gql`
  query AgentsQuery {
    agents {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ agents }) => {
  return (
    <>
      {agents.map((item) => (
        <Agent key={item.id} agent={item} />
      ))}
    </>
  )
}
