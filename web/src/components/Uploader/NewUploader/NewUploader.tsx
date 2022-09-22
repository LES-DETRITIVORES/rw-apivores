import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UploaderForm from 'src/components/Uploader/UploaderForm'

import type { CreateUploaderInput } from 'types/graphql'

const CREATE_UPLOADER_MUTATION = gql`
  mutation CreateUploaderMutation($input: CreateUploaderInput!) {
    createUploader(input: $input) {
      id
    }
  }
`

const NewUploader = () => {
  const [createUploader, { loading, error }] = useMutation(
    CREATE_UPLOADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Uploader created')
        navigate(routes.uploaders())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateUploaderInput) => {
    createUploader({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Uploader</h2>
      </header>
      <div className="rw-segment-main">
        <UploaderForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUploader
