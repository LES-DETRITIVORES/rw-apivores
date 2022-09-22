import type { EditUploaderById, UpdateUploaderInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UploaderForm from 'src/components/Uploader/UploaderForm'

export const QUERY = gql`
  query EditUploaderById($id: Int!) {
    uploader: uploader(id: $id) {
      id
      fileName
      fileUrl
      fileType
      createdAt
    }
  }
`
const UPDATE_UPLOADER_MUTATION = gql`
  mutation UpdateUploaderMutation($id: Int!, $input: UpdateUploaderInput!) {
    updateUploader(id: $id, input: $input) {
      id
      fileName
      fileUrl
      fileType
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ uploader }: CellSuccessProps<EditUploaderById>) => {
  const [updateUploader, { loading, error }] = useMutation(
    UPDATE_UPLOADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Uploader updated')
        navigate(routes.uploaders())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateUploaderInput,
    id: EditUploaderById['uploader']['id']
  ) => {
    updateUploader({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Uploader {uploader?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UploaderForm uploader={uploader} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
