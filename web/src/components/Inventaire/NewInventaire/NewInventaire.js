import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InventaireForm from 'src/components/Inventaire/InventaireForm'

const CREATE_INVENTAIRE_MUTATION = gql`
  mutation CreateInventaireMutation($input: CreateInventaireInput!) {
    createInventaire(input: $input) {
      id
    }
  }
`

const NewInventaire = () => {
  const [createInventaire, { loading, error }] = useMutation(
    CREATE_INVENTAIRE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Inventaire created')
        navigate(routes.inventaires())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createInventaire({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Inventaire</h2>
      </header>
      <div className="rw-segment-main">
        <InventaireForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInventaire
