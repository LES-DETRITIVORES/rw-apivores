import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const UsagerForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.usager?.id)
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="nom"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Nom
            </Label>

            <TextField
              name="nom"
              defaultValue={props.usager?.nom}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="nom" className="rw-field-error" />

            <Label
              name="type"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Type
            </Label>

            <TextField
              name="type"
              defaultValue={props.usager?.type}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="type" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="tiers"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Tiers
            </Label>

            <TextField
              name="tiers"
              defaultValue={props.usager?.tiers}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="tiers" className="rw-field-error" />

            <Label
              name="contact"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Contact
            </Label>

            <TextField
              name="contact"
              defaultValue={props.usager?.contact}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="contact" className="rw-field-error" />
          </div>

          <div className="col-span-2 sm:col-span-2">
            <Label
              name="adresse"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Adresse
            </Label>

            <TextField
              name="adresse"
              defaultValue={props.usager?.adresse}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="adresse" className="rw-field-error" />

            <Label
              name="email"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Email
            </Label>

            <TextField
              name="email"
              defaultValue={props.usager?.email}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="email" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="telephone"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Telephone
            </Label>

            <TextField
              name="telephone"
              defaultValue={props.usager?.telephone}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="telephone" className="rw-field-error" />

            <Label
              name="reference"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Reference
            </Label>

            <TextField
              name="reference"
              defaultValue={props.usager?.reference}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="reference" className="rw-field-error" />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <Label
              name="note"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Note
            </Label>

            <TextField
              name="note"
              defaultValue={props.usager?.note}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="note" className="rw-field-error" />
            <Label
              name="actif"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Actif
            </Label>

            <CheckboxField
              name="actif"
              defaultChecked={props.usager?.actif}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
            />

            <FieldError name="actif" className="rw-field-error" />
          </div>
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
  )
}

export default UsagerForm
