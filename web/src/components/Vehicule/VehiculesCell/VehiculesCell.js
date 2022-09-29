import { Link, routes } from '@redwoodjs/router'

import Vehicules from 'src/components/Vehicule/Vehicules'

export const QUERY = gql`
  query FindVehicules {
    vehicules {
      id
      ordre
      nom
      immatriculation
      identifiant
      couleur
      icone
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No vehicules yet. '}
      <Link to={routes.newVehicule()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ vehicules }) => {
  return <Vehicules vehicules={vehicules} />
}
