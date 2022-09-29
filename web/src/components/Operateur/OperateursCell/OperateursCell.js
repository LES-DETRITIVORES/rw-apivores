import { Link, routes } from '@redwoodjs/router'

import Operateurs from 'src/components/Operateur/Operateurs'

export const QUERY = gql`
  query FindOperateurs {
    operateurs {
      id
      prenom
      nom
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No operateurs yet. '}
      <Link to={routes.newOperateur()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ operateurs }) => {
  return <Operateurs operateurs={operateurs} />
}
