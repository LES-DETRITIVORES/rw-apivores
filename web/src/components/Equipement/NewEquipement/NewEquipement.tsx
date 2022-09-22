import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EquipementForm from 'src/components/Equipement/EquipementForm'

import type { CreateEquipementInput } from 'types/graphql'

const CREATE_EQUIPEMENT_MUTATION = gql`
  mutation CreateEquipementMutation($input: CreateEquipementInput!) {
    createEquipement(input: $input) {
      id
    }
  }
`

const NewEquipement = () => {
  const [createEquipement, { loading, error }] = useMutation(
    CREATE_EQUIPEMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Equipement created')
        navigate(routes.equipements())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateEquipementInput) => {
    createEquipement({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Equipement</h2>
      </header>
      <div className="rw-segment-main">
        <EquipementForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEquipement
