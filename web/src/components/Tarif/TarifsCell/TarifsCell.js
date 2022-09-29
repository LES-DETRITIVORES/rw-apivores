import { Link, routes } from '@redwoodjs/router'

import Tarifs from 'src/components/Tarif/Tarifs'

export const QUERY = gql`
  query FindTarifs {
    tarifs {
      id
      date
      siteId
      prestation
      prix
      passage
      bac
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tarifs yet. '}
      <Link to={routes.newTarif()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tarifs }) => {
  return <Tarifs tarifs={tarifs} />
}
