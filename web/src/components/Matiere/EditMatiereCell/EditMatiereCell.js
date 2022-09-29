import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MatiereForm from 'src/components/Matiere/MatiereForm'

export const QUERY = gql`
  query EditMatiereById($id: Int!) {
    matiere: matiere(id: $id) {
      id
      nom
      actif
    }
  }
`
const UPDATE_MATIERE_MUTATION = gql`
  mutation UpdateMatiereMutation($id: Int!, $input: UpdateMatiereInput!) {
    updateMatiere(id: $id, input: $input) {
      id
      nom
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ matiere }) => {
  const [updateMatiere, { loading, error }] = useMutation(
    UPDATE_MATIERE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Matiere updated')
        navigate(routes.matieres())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateMatiere({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Matiere {matiere?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MatiereForm
          matiere={matiere}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
