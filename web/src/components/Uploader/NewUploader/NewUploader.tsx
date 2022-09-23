import { navigate, routes } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useState } from 'react'

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
  const [preview, setPreview] = useState({
    preview: '',
    data: '',
  })
  const [status, setStatus] = useState('')
  const onSave = async (input: CreateUploaderInput) => {
    const formData = new FormData()
    formData.append('file', preview.data)
    const response = await fetch(
      `http://localhost:5000/uploads?id=${input.id}`,
      {
        method: 'POST',
        body: formData,
      }
    )
    const responsedData = response.json()
    console.log(responsedData)
    if (response) setStatus(response.statusText)
    createUploader({ variables: { input } })
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
        <h2 className="rw-heading rw-heading-secondary">New Uploader</h2>
      </header>
      <div className="rw-segment-main">
        <UploaderForm
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

export default NewUploader
