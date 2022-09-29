import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TarifForm from 'src/components/Tarif/TarifForm'

const CREATE_TARIF_MUTATION = gql`
  mutation CreateTarifMutation($input: CreateTarifInput!) {
    createTarif(input: $input) {
      id
    }
  }
`

const NewTarif = () => {
  const [createTarif, { loading, error }] = useMutation(CREATE_TARIF_MUTATION, {
    onCompleted: () => {
      toast.success('Tarif created')
      navigate(routes.tarifs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTarif({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Tarif</h2>
      </header>
      <div className="rw-segment-main">
        <TarifForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTarif
