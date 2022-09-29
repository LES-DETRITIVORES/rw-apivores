import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const TourneeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.tournee?.id)
  }

  return (
    <>
      <div className="rw-form-wrapper">
        <Form onSubmit={onSubmit} error={props.error}>
          <FormError
            error={props.error}
            wrapperClassName="rw-form-error-wrapper"
            titleClassName="rw-form-error-title"
            listClassName="rw-form-error-list"
          />

          <div className="flex flex-col items-center">
            <Label
              name="date"
              className="rw-label text-right"
              errorClassName="rw-label rw-label-error"
            >
              Date
            </Label>

            <DatetimeLocalField
              name="date"
              defaultValue={formatDatetime(props.tournee?.date)}
              className="mt-2 w-96 rounded-md border-gray-300 focus:border-green-700 focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-96 rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="date" className="rw-field-error" />

            <Label
              name="note"
              defaultValue={props.tournee?.note}
              className="mt-2 block rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-96 rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            >
              Note
            </Label>

            <TextField
              name="note"
              defaultValue={props.tournee?.note}
              className="mt-2 block w-96 rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="note" className="rw-field-error" />
          </div>
          <div className="rw-button-group">
            <Submit
              disabled={props.loading}
              className="inline-flex items-center rounded-md border border-transparent bg-green-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
            >
              Save
            </Submit>
          </div>
        </Form>
      </div>
    </>
  )
}

export default TourneeForm
