import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MaterielForm from 'src/components/Materiel/MaterielForm'

const CREATE_MATERIEL_MUTATION = gql`
  mutation CreateMaterielMutation($input: CreateMaterielInput!) {
    createMateriel(input: $input) {
      id
    }
  }
`

const NewMateriel = () => {
  const [createMateriel, { loading, error }] = useMutation(
    CREATE_MATERIEL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Materiel created')
        navigate(routes.materiels())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createMateriel({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Materiel</h2>
      </header>
      <div className="rw-segment-main">
        <MaterielForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMateriel
