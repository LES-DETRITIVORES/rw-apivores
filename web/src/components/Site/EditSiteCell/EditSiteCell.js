import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SiteForm from 'src/components/Site/SiteForm'

export const QUERY = gql`
  query EditSiteById($id: Int!) {
    site: site(id: $id) {
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
const UPDATE_SITE_MUTATION = gql`
  mutation UpdateSiteMutation($id: Int!, $input: UpdateSiteInput!) {
    updateSite(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ site }) => {
  const [updateSite, { loading, error }] = useMutation(UPDATE_SITE_MUTATION, {
    onCompleted: () => {
      toast.success('Site updated')
      navigate(routes.sites())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateSite({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Site {site?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SiteForm site={site} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
