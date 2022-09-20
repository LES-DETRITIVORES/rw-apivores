import { useState } from 'react'

import { CreateUploaderInput } from 'api/types/graphql'
import { PickerInline } from 'filestack-react'
import * as filestack from 'filestack-js'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import { RWGqlError } from '../../../../interfaces'
interface UploaderFormProps {
  onSave?: (input: CreateUploaderInput, id: number) => void
  error?: RWGqlError
  loading?: boolean
  mimetype?: string
  filename?: string
  size?: number
  originalFile?: {
    type?: string
  }
  handle?: string
  url?: string
  uploader?: {
    id?: number
    name?: string
    type?: string
    size?: number
    extension?: string
    path?: string
    url?: string
  }
}
interface Propsed {
  mimetype?: string
  filename?: string
  size?: number
  originalFile?: {
    name?: string
    size: number
    type?: string
  }
  handle?: string
  url?: string
  uploadId?: string
}
const UploaderForm = (props: UploaderFormProps) => {
  const [file, setFile] = useState<Propsed>(null)
  const [readFile, setReadFile] = useState(null)
  const onSubmit = (data) => {
    props.onSave(data, props?.uploader?.id)
  }

  const onFileUpload = (response) => {
    setFile(response.filesUploaded[0])
  }

  const onFileRead = () => {
      const filestackClient = filestack.init('AGBXGuQXkT9WeHJDIdfEzz')
      filestackClient.metadata(file.uploadId).then((result) => {
        setReadFile(result)
        console.log(result)
      })
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          //defaultValue={props.uploader?.name}
          value={file?.filename}
          defaultValue={file?.filename || props.uploader?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <TextField
          name="type"
          value={file?.mimetype}
          defaultValue={file?.mimetype || props.uploader?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Size
        </Label>

        <TextField
          name="size"
          value={file?.size}
          defaultValue={file?.size || props.uploader?.size}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="size" className="rw-field-error" />

        <Label
          name="extension"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Extension
        </Label>

        <TextField
          name="extension"
          value={file?.originalFile?.type}
          defaultValue={file?.originalFile?.type || props.uploader?.extension}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="extension" className="rw-field-error" />

        <Label
          name="path"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Path
        </Label>

        <TextField
          name="path"
          value={file?.handle}
          defaultValue={file?.handle || props.uploader?.path}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="path" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          value={file?.url}
          defaultValue={file?.url || props.uploader?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />
        <PickerInline
          apikey={'AGBXGuQXkT9WeHJDIdfEzz'}
          onSuccess={onFileUpload}
        />

        <div className="rw-button-group">
          <button
            type="button"
            onClick={onFileRead}
            className="rw-button rw-button-red"
          >
            Read File
          </button>
        </div>

        {readFile && (
          <div>
            <h2>File Content</h2>
            <pre>{readFile}</pre>
          </div>
        )}
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
