import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import VehiculeForm from 'src/components/Vehicule/VehiculeForm'

export const QUERY = gql`
  query EditVehiculeById($id: Int!) {
    vehicule: vehicule(id: $id) {
      id
      nom
      immatriculation
      identifiant
      couleur
      icone
      ordre
      actif
    }
  }
`
const UPDATE_VEHICULE_MUTATION = gql`
  mutation UpdateVehiculeMutation($id: Int!, $input: UpdateVehiculeInput!) {
    updateVehicule(id: $id, input: $input) {
      id
      nom
      immatriculation
      identifiant
      couleur
      icone
      ordre
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ vehicule }) => {
  const [updateVehicule, { loading, error }] = useMutation(
    UPDATE_VEHICULE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Vehicule updated')
        navigate(routes.vehicules())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateVehicule({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Vehicule {vehicule?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VehiculeForm
          vehicule={vehicule}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
