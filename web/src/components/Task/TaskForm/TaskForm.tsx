import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditTaskById, UpdateTaskInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'



const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


type FormTask = NonNullable<EditTaskById['task']>

interface TaskFormProps {
  task?: EditTaskById['task']
  onSave: (data: UpdateTaskInput, id?: FormTask['id']) => void
  error: RWGqlError
  loading: boolean
}

const TaskForm = (props: TaskFormProps) => {
  const onSubmit = (data: FormTask) => {
    props.onSave(data, props?.task?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormTask> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="plannedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Planned at
        </Label>

        <DatetimeLocalField
          name="plannedAt"
          defaultValue={formatDatetime(props.task?.plannedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="plannedAt" className="rw-field-error" />

        <Label
          name="start"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Started at
        </Label>

        <DatetimeLocalField
          name="start"
          defaultValue={formatDatetime(props.task?.start)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="start" className="rw-field-error" />

        <Label
          name="end"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ended at
        </Label>

        <DatetimeLocalField
          name="end"
          defaultValue={formatDatetime(props.task?.end)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="end" className="rw-field-error" />
        <Label
          name="workerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Worker id
        </Label>

        <NumberField
          name="workerId"
          defaultValue={props.task?.workerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="workerId" className="rw-field-error" />

        <Label
          name="customerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Customer id
        </Label>

        <NumberField
          name="customerId"
          defaultValue={props.task?.customerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="customerId" className="rw-field-error" />

        <Label
          name="siteId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Site id
        </Label>

        <NumberField
          name="siteId"
          defaultValue={props.task?.siteId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="siteId" className="rw-field-error" />

        <Label
          name="containerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Container id
        </Label>

        <NumberField
          name="containerId"
          defaultValue={props.task?.containerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="containerId" className="rw-field-error" />

        <Label
          name="materialId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Material id
        </Label>

        <NumberField
          name="materialId"
          defaultValue={props.task?.materialId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="materialId" className="rw-field-error" />

        <Label
          name="serviceId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Service id
        </Label>

        <NumberField
          name="serviceId"
          defaultValue={props.task?.serviceId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="serviceId" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.task?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaskForm
