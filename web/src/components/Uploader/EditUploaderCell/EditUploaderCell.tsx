// @ts-ignore
import type { EditUploaderById, UpdateUploaderInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UploaderForm from 'src/components/Uploader/UploaderForm'
import { useState } from 'react'

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
  const [preview, setPreview] = useState({
    preview: '',
    data: '',
  })
  const [status, setStatus] = useState('')

  const onSave = async (
    input: UpdateUploaderInput,
    id: EditUploaderById['uploader']['id']
  ) => {
    const formData = new FormData()
    formData.append('file', preview.data)
    const response = await fetch(`http://localhost:5000/uploads?id=${id}`, {
      method: 'POST',
      body: formData,
    })
    const responsedData = response.json()
    console.log(responsedData)
    if (response) setStatus(response.statusText)
    updateUploader({ variables: { id, input } })
  }
  const handleFileChange = (e: any) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setPreview(img)
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Uploader {uploader?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UploaderForm
          uploader={uploader}
          onSave={onSave}
          error={error}
          loading={loading}
          status={status}
          handleFileChange={handleFileChange}
          preview={preview.preview}
          data={preview.data}
        />
      </div>
    </div>
  )
}
