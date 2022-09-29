import { Link, routes } from '@redwoodjs/router'

import Sites from 'src/components/Site/Sites'

export const QUERY = gql`
  query FindSites {
    sites {
      id
      usagerId
      ordre
      nom
      adresse
      adresse2
      codePostal
      ville
      latitude
      longitude
      etage
      ascenseur
      note
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No sites yet. '}
      <Link to={routes.newSite()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ sites }) => {
  return <Sites sites={sites} />
}
