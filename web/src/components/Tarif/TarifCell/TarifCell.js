import Tarif from 'src/components/Tarif/Tarif'

export const QUERY = gql`
  query FindTarifById($id: Int!) {
    tarif: tarif(id: $id) {
      id
      site
      matiere
      date
      prestation
      prix
      forfait
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tarif not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tarif }) => {
  return <Tarif tarif={tarif} />
}
