import Vehicule from "src/components/Vehicule"

export const QUERY = gql`
  query FindVehiculeQuery($id: Int!) {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ vehicule }) => {
  return (vehicule.nom + " (" + vehicule.immatriculation + ")")
}