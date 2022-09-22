import type { EditEquipementById, UpdateEquipementInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EquipementForm from 'src/components/Equipement/EquipementForm'

export const QUERY = gql`
  query EditEquipementById($id: Int!) {
    equipement: equipement(id: $id) {
      id
      name
      status
    }
  }
`
const UPDATE_EQUIPEMENT_MUTATION = gql`
  mutation UpdateEquipementMutation($id: Int!, $input: UpdateEquipementInput!) {
    updateEquipement(id: $id, input: $input) {
      id
      name
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ equipement }: CellSuccessProps<EditEquipementById>) => {
  const [updateEquipement, { loading, error }] = useMutation(
    UPDATE_EQUIPEMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Equipement updated')
        navigate(routes.equipements())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEquipementInput,
    id: EditEquipementById['equipement']['id']
  ) => {
    updateEquipement({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Equipement {equipement?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <EquipementForm equipement={equipement} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
