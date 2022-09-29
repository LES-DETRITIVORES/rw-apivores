import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UsagerForm from 'src/components/Usager/UsagerForm'

export const QUERY = gql`
  query EditUsagerById($id: Int!) {
    usager: usager(id: $id) {
      id
      nom
      tiers
      contact
      adresse
      adresse2
      codePostal
      ville
      email
      telephone1
      telephone2
      note
      actif
    }
  }
`
const UPDATE_USAGER_MUTATION = gql`
  mutation UpdateUsagerMutation($id: Int!, $input: UpdateUsagerInput!) {
    updateUsager(id: $id, input: $input) {
      id
      nom
      tiers
      contact
      adresse
      adresse2
      codePostal
      ville
      email
      telephone1
      telephone2
      note
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ usager }) => {
  const [updateUsager, { loading, error }] = useMutation(
    UPDATE_USAGER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Usager updated')
        navigate(routes.usagers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateUsager({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Usager {usager?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UsagerForm
          usager={usager}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
