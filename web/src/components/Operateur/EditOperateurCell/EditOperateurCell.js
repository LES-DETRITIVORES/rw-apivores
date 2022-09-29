import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import OperateurForm from 'src/components/Operateur/OperateurForm'

export const QUERY = gql`
  query EditOperateurById($id: Int!) {
    operateur: operateur(id: $id) {
      id
      prenom
      nom
      actif
    }
  }
`
const UPDATE_OPERATEUR_MUTATION = gql`
  mutation UpdateOperateurMutation($id: Int!, $input: UpdateOperateurInput!) {
    updateOperateur(id: $id, input: $input) {
      id
      prenom
      nom
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ operateur }) => {
  const [updateOperateur, { loading, error }] = useMutation(
    UPDATE_OPERATEUR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Operateur updated')
        navigate(routes.operateurs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateOperateur({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Operateur {operateur?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <OperateurForm
          operateur={operateur}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
