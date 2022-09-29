import { Link, routes } from '@redwoodjs/router'

import Tournees from 'src/components/Tournee/Tournees'

export const QUERY = gql`
  query FindTournees {
    tournees {
      id
      date
      note
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tournees yet. '}
      <Link to={routes.newTournee()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tournees }) => {
  return <Tournees tournees={tournees} />
}
