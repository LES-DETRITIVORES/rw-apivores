import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TourneeForm from 'src/components/Tournee/TourneeForm'

const CREATE_TOURNEE_MUTATION = gql`
  mutation CreateTourneeMutation($input: CreateTourneeInput!) {
    createTournee(input: $input) {
      id
    }
  }
`

const NewTournee = () => {
  const [createTournee, { loading, error }] = useMutation(
    CREATE_TOURNEE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Tournee created')
        navigate(routes.tournees())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createTournee({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Tournee</h2>
      </header>
      <div className="rw-segment-main">
        <TourneeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTournee
