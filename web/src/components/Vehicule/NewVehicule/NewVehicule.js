import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import VehiculeForm from 'src/components/Vehicule/VehiculeForm'

const CREATE_VEHICULE_MUTATION = gql`
  mutation CreateVehiculeMutation($input: CreateVehiculeInput!) {
    createVehicule(input: $input) {
      id
    }
  }
`

const NewVehicule = () => {
  const [createVehicule, { loading, error }] = useMutation(
    CREATE_VEHICULE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Vehicule created')
        navigate(routes.vehicules())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createVehicule({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Vehicule</h2>
      </header>
      <div className="rw-segment-main">
        <VehiculeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewVehicule
