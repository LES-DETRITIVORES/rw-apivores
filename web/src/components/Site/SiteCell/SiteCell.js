import Site from 'src/components/Site/Site'

export const QUERY = gql`
  query FindSiteById($id: Int!) {
    site: site(id: $id) {
      id
      usager
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

export const Empty = () => <div>Site not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ site }) => {
  return <Site site={site} />
}
