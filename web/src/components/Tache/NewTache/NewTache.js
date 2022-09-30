import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TacheForm from 'src/components/Tache/TacheForm'

const CREATE_TACHE_MUTATION = gql`
  mutation CreateTacheMutation($input: CreateTacheInput!) {
    createTache(input: $input) {
      id
    }
  }
`

const NewTache = () => {
  const [createTache, { loading, error }] = useMutation(CREATE_TACHE_MUTATION, {
    onCompleted: () => {
      toast.success('Tache created')
      navigate(routes.taches())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTache({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Tache</h2>
      </header>
      <div className="rw-segment-main">
        <TacheForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTache
