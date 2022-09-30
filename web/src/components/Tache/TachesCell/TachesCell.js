import { Link, routes } from '@redwoodjs/router'

import Taches from 'src/components/Tache/Taches'

export const QUERY = gql`
  query FindTaches {
    taches {
      id
      debut
      fin
      prestation
      vehicule
      operateur1
      operateur2
      operateur3
      collecte
      quantite
      noteCollecte
      pesee
      poids
      qualite
      notePesee
      photos
      terminee
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No taches yet. '}
      <Link to={routes.newTache()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ taches }) => {
  return <Taches taches={taches} />
}
