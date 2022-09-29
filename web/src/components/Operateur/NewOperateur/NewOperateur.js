import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import OperateurForm from 'src/components/Operateur/OperateurForm'

const CREATE_OPERATEUR_MUTATION = gql`
  mutation CreateOperateurMutation($input: CreateOperateurInput!) {
    createOperateur(input: $input) {
      id
    }
  }
`

const NewOperateur = () => {
  const [createOperateur, { loading, error }] = useMutation(
    CREATE_OPERATEUR_MUTATION,
    {
      onCompleted: () => {
        toast.success('Operateur created')
        navigate(routes.operateurs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createOperateur({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Operateur</h2>
      </header>
      <div className="rw-segment-main">
        <OperateurForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewOperateur
