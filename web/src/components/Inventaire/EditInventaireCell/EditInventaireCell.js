import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InventaireForm from 'src/components/Inventaire/InventaireForm'

export const QUERY = gql`
  query EditInventaireById($id: Int!) {
    inventaire: inventaire(id: $id) {
      id
      site
      materiel
      quantite
    }
  }
`
const UPDATE_INVENTAIRE_MUTATION = gql`
  mutation UpdateInventaireMutation($id: Int!, $input: UpdateInventaireInput!) {
    updateInventaire(id: $id, input: $input) {
      id
      site
      materiel
      quantite
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ inventaire }) => {
  const [updateInventaire, { loading, error }] = useMutation(
    UPDATE_INVENTAIRE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Inventaire updated')
        navigate(routes.inventaires())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateInventaire({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Inventaire {inventaire?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InventaireForm
          inventaire={inventaire}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
