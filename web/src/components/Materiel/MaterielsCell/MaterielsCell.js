import { Link, routes } from '@redwoodjs/router'

import Materiels from 'src/components/Materiel/Materiels'

export const QUERY = gql`
  query FindMateriels {
    materiels {
      id
      nom
      poids
      actif
    }
  }
`
export const QUERYTWO = gql`
  query FindMateriels {
    materiels {
      id
      nom
      poids
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No materiels yet. '}
      <Link to={routes.newMateriel()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ materiels }) => {
  return <Materiels materiels={materiels} />
}
