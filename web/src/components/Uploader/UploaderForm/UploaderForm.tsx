import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  DateField,
} from '@redwoodjs/forms'

import type { EditUploaderById, UpdateUploaderInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'
import { useEffect, useState } from 'react'
import ImageUploader from 'react-images-upload'
import styled from 'styled-components'
type FormUploader = NonNullable<EditUploaderById['uploader']>

interface UploaderFormProps {
  uploader?: EditUploaderById['uploader']
  onSave?: (data: UpdateUploaderInput, id?: FormUploader['id']) => void
  error?: RWGqlError
  loading?: boolean
}

const UploaderForm = (props: UploaderFormProps) => {
  const [uploadedPictures, setUploadedPictures] = useState([] as any)
    const {
      createFormData,
    } = useFileUpload()

  const onSubmit = (data: FormUploader) => {

    const formData = createFormData(uploadedPictures, data)

    props.onSave?.({
      ...data,
      picture: formData,
    }, props.uploader?.id)

  }

  const onDrop = (picture) => {
    setUploadedPictures([...uploadedPictures, picture])
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUploader> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="fileName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          File name
        </Label>

        <TextField
          name="fileName"
          defaultValue={props.uploader?.fileName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fileName" className="rw-field-error" />
12
        <Label
          name="fileUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          File url
        </Label>

        <TextField
          name="fileUrl"
          defaultValue={props.uploader?.fileUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fileUrl" className="rw-field-error" />

        <Label
          name="fileType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          File type
        </Label>

        <TextField
          name="fileType"
          defaultValue={props.uploader?.fileType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fileType" className="rw-field-error" />

        <Label
          name="createdAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created at
        </Label>

        <DateField
          name="createdAt"
          defaultValue={props.uploader?.createdAt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="createdAt" className="rw-field-error" />

        <ImageUploader
          withIcon={true}
          withPreview={false}
          buttonText="Choose images"
          onChange={(image) => onDrop(image)}
          imgExtension={['.csv']}
          maxFileSize={99999999999}
        />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UploaderForm
function useFileUpload(): { files: any; fileNames: any; fileTypes: any; totalSize: any; totalSizeInBytes: any; handleDragDropEvent: any; clearAllFiles: any; createFormData: any; setFiles: any; removeFile: any } {
  throw new Error('Function not implemented.')
}

