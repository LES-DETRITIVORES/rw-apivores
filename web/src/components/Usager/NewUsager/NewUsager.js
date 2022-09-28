import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UsagerForm from 'src/components/Usager/UsagerForm'

const CREATE_USAGER_MUTATION = gql`
  mutation CreateUsagerMutation($input: CreateUsagerInput!) {
    createUsager(input: $input) {
      id
    }
  }
`

const NewUsager = () => {
  const [createUsager, { loading, error }] = useMutation(
    CREATE_USAGER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Usager created')
        navigate(routes.usagers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createUsager({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Usager</h2>
      </header>
      <div className="rw-segment-main">
        <UsagerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUsager
