import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  DateField,
} from '@redwoodjs/forms'

// @ts-ignore
import type { EditUploaderById, UpdateUploaderInput } from 'types/graphql'
import { useEffect, useState } from 'react'
import { RWGqlError } from 'interfaces'

type FormUploader = NonNullable<EditUploaderById['uploader']>

interface UploaderFormProps {
  uploader?: EditUploaderById['uploader']
  onSave?: (data: UpdateUploaderInput, id?: FormUploader['id']) => void
  error?: RWGqlError
  loading?: boolean
  status?: string
  handleFileChange?: (e: any) => void
  preview?: string
  data?: string
}

const UploaderForm = (props: UploaderFormProps) => {
  type Data = {
    data?: [
      {
        John: string
        Doe: string
      }
    ]
  }
  const [preview, setPreview] = useState<Data>([{}] as any)
  const onSubmit = async (data: FormUploader) => {
    props.onSave?.(data, props.uploader?.id)
  }
  useEffect(() => {
    fetch(`http://localhost:5000/read?id=${props.uploader?.id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setPreview(data)
      })
  }, [props.uploader?.id])

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
        {preview?.data?.map((item) => (
          <>
            <td>{item.John}</td>
            <td>{item.Doe}</td>
          </>
        ))}
        <input
          type="file"
          name="file"
          onChange={props.handleFileChange}
        ></input>
        {props.status && <h4>{props.status}</h4>}
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
