import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TourneeForm from 'src/components/Tournee/TourneeForm'

export const QUERY = gql`
  query EditTourneeById($id: Int!) {
    tournee: tournee(id: $id) {
      id
      date
      note
    }
  }
`
const UPDATE_TOURNEE_MUTATION = gql`
  mutation UpdateTourneeMutation($id: Int!, $input: UpdateTourneeInput!) {
    updateTournee(id: $id, input: $input) {
      id
      date
      note
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tournee }) => {
  const [updateTournee, { loading, error }] = useMutation(
    UPDATE_TOURNEE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Tournee updated')
        navigate(routes.tournees())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateTournee({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Tournee {tournee?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TourneeForm
          tournee={tournee}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
