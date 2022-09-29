import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MaterielForm from 'src/components/Materiel/MaterielForm'

export const QUERY = gql`
  query EditMaterielById($id: Int!) {
    materiel: materiel(id: $id) {
      id
      nom
      poids
      actif
    }
  }
`
const UPDATE_MATERIEL_MUTATION = gql`
  mutation UpdateMaterielMutation($id: Int!, $input: UpdateMaterielInput!) {
    updateMateriel(id: $id, input: $input) {
      id
      nom
      poids
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ materiel }) => {
  const [updateMateriel, { loading, error }] = useMutation(
    UPDATE_MATERIEL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Materiel updated')
        navigate(routes.materiels())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateMateriel({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Materiel {materiel?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MaterielForm
          materiel={materiel}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
