import Tache from 'src/components/Tache/Tache'

export const QUERY = gql`
  query FindTacheById($id: Int!) {
    tache: tache(id: $id) {
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

export const Empty = () => <div>Tache not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tache }) => {
  return <Tache tache={tache} />
}
