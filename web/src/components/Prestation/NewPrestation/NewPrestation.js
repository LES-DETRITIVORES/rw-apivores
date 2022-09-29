import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PrestationForm from 'src/components/Prestation/PrestationForm'

const CREATE_PRESTATION_MUTATION = gql`
  mutation CreatePrestationMutation($input: CreatePrestationInput!) {
    createPrestation(input: $input) {
      id
    }
  }
`

const NewPrestation = () => {
  const [createPrestation, { loading, error }] = useMutation(
    CREATE_PRESTATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Prestation created')
        navigate(routes.prestations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createPrestation({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Prestation</h2>
      </header>
      <div className="rw-segment-main">
        <PrestationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPrestation
