import { Link, routes } from '@redwoodjs/router'

import Matieres from 'src/components/Matiere/Matieres'

export const QUERY = gql`
  query FindMatieres {
    matieres {
      id
      nom
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No matieres yet. '}
      <Link to={routes.newMatiere()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ matieres }) => {
  return <Matieres matieres={matieres} />
}
