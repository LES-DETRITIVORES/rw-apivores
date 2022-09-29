import { Link, routes } from '@redwoodjs/router'

import Inventaires from 'src/components/Inventaire/Inventaires'

export const QUERY = gql`
  query FindInventaires {
    inventaires {
      id
      site
      materiel
      quantite
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No inventaires yet. '}
      <Link to={routes.newInventaire()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ inventaires }) => {
  return <Inventaires inventaires={inventaires} />
}
