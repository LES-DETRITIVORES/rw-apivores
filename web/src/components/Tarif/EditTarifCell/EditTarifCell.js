import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TarifForm from 'src/components/Tarif/TarifForm'

export const QUERY = gql`
  query EditTarifById($id: Int!) {
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
const UPDATE_TARIF_MUTATION = gql`
  mutation UpdateTarifMutation($id: Int!, $input: UpdateTarifInput!) {
    updateTarif(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tarif }) => {
  const [updateTarif, { loading, error }] = useMutation(UPDATE_TARIF_MUTATION, {
    onCompleted: () => {
      toast.success('Tarif updated')
      navigate(routes.tarifs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTarif({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Tarif {tarif?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TarifForm
          tarif={tarif}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
