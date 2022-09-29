import Vehicule from 'src/components/Vehicule/Vehicule'

export const QUERY = gql`
  query FindVehiculeById($id: Int!) {
    vehicule: vehicule(id: $id) {
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

export const Empty = () => <div>Vehicule not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ vehicule }) => {
  return <Vehicule vehicule={vehicule} />
}
