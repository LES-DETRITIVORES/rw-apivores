import { useEffect, useState } from 'react'

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
import { useMutation } from '@redwoodjs/web'
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
  file?: {
    mimetype?: string
    filename?: string
    size?: number
    originalFile?: {
      name?: string
      size: number
      type?: string

      handle?: string
      url?: string
    }
  }
}

const UploaderForm = (props: UploaderFormProps) => {
  const [file, setFile] = useState<Propsed>(null)
  const onSubmit = (data) => {
    props.onSave(data, props?.uploader?.id)
  }
  const UPLOAD_FILE = gql`
    mutation singleUpload($file: Upload!) {
      singleUpload(file: $file) {
        mimetype
        filename
        size
        originalFile {
          name
          size
          type
        }
        handle
        url
      }
    }
  `

  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: ({ singleUpload }) => {
      setFile(singleUpload)
    },
  })
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
        <input type="file" onChange={(e) => uploadFile({ variables: { file: e.target.files[0] } })} />
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