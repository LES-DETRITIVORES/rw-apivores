import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MatiereForm from 'src/components/Matiere/MatiereForm'

const CREATE_MATIERE_MUTATION = gql`
  mutation CreateMatiereMutation($input: CreateMatiereInput!) {
    createMatiere(input: $input) {
      id
    }
  }
`

const NewMatiere = () => {
  const [createMatiere, { loading, error }] = useMutation(
    CREATE_MATIERE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Matiere created')
        navigate(routes.matieres())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createMatiere({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Matiere</h2>
      </header>
      <div className="rw-segment-main">
        <MatiereForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMatiere
