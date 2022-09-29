import { Link, routes } from '@redwoodjs/router'

import Usagers from 'src/components/Usager/Usagers'

export const QUERY = gql`
  query FindUsagers {
    usagers {
      id
      nom
      tiers
      contact
      adresse
      adresse2
      codePostal
      ville
      email
      telephone1
      telephone2
      note
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No usagers yet. '}
      <Link to={routes.newUsager()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ usagers }) => {
  return <Usagers usagers={usagers} />
}
