import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TacheForm from 'src/components/Tache/TacheForm'

export const QUERY = gql`
  query EditTacheById($id: Int!) {
    tache: tache(id: $id) {
      id
      debut
      fin
      prestation
      vehicule
      operateur1
      operateur2
      operateur3
      collecte
      quantite
      noteCollecte
      pesee
      poids
      qualite
      notePesee
      photos
      terminee
    }
  }
`
const UPDATE_TACHE_MUTATION = gql`
  mutation UpdateTacheMutation($id: Int!, $input: UpdateTacheInput!) {
    updateTache(id: $id, input: $input) {
      id
      debut
      fin
      prestation
      vehicule
      operateur1
      operateur2
      operateur3
      collecte
      quantite
      noteCollecte
      pesee
      poids
      qualite
      notePesee
      photos
      terminee
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ tache }) => {
  const [updateTache, { loading, error }] = useMutation(UPDATE_TACHE_MUTATION, {
    onCompleted: () => {
      toast.success('Tache updated')
      navigate(routes.taches())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTache({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Tache {tache?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TacheForm
          tache={tache}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
