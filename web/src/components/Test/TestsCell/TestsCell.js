import { Link, routes } from '@redwoodjs/router'

import Tests from 'src/components/Test/Tests'

export const QUERY = gql`
  query FindTests {
    tests {
      id
      nom
      date
      actif
      prix
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tests yet. '}
      <Link to={routes.newTest()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tests }) => {
  return <Tests tests={tests} />
}
