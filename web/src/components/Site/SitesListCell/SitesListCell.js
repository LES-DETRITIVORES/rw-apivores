import Comboboxes from 'src/components/Comboboxes'

export const QUERY = gql`
  query FindSites {
    sites {
      id
      nom
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ sites, value, onChange, name, label }) => {
  console.log(sites)
  return <Comboboxes
      data={sites}
      value={value}
      onChange={onChange}
      name={name}
      label={label}
    />
}
