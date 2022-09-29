import { Link, routes } from '@redwoodjs/router'

import Prestations from 'src/components/Prestation/Prestations'

export const QUERY = gql`
  query FindPrestations {
    prestations {
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
      {'No prestations yet. '}
      <Link to={routes.newPrestation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ prestations }) => {
  return <Prestations prestations={prestations} />
}
