import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  DatetimeLocalField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const PrestationForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.prestation?.id)
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
          name="site"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Site
        </Label>

        <NumberField
          name="site"
          defaultValue={props.prestation?.site}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="site" className="rw-field-error" />

        <Label
          name="matiere"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Matiere
        </Label>

        <NumberField
          name="matiere"
          defaultValue={props.prestation?.matiere}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="matiere" className="rw-field-error" />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.prestation?.date)}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="service"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Service
        </Label>

        <NumberField
          name="service"
          defaultValue={props.prestation?.service}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="service" className="rw-field-error" />

        <Label
          name="prix"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prix
        </Label>

        <TextField
          name="prix"
          defaultValue={props.prestation?.prix}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="prix" className="rw-field-error" />

        <Label
          name="forfait"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Forfait
        </Label>

        <CheckboxField
          name="forfait"
          defaultChecked={props.prestation?.forfait}
          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
          errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
        />

        <FieldError name="forfait" className="rw-field-error" />

        <Label
          name="actif"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Actif
        </Label>

        <CheckboxField
          name="actif"
          defaultChecked={props.prestation?.actif}
          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
          errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
        />

        <FieldError name="actif" className="rw-field-error" />

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
  )
}

export default PrestationForm
