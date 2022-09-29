import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const ContactForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.contact?.id)
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
              name="usager"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Usager
            </Label>

            <NumberField
              name="usager"
              defaultValue={props.contact?.usager}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="usager" className="rw-field-error" />

            <Label
              name="ordre"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Ordre
            </Label>

            <NumberField
              name="ordre"
              defaultValue={props.contact?.ordre}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="ordre" className="rw-field-error" />
          </div>

          <div className="col-span-2 sm:col-span-2">
            <Label
              name="prenom"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Prenom
            </Label>

            <TextField
              name="prenom"
              defaultValue={props.contact?.prenom}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="prenom" className="rw-field-error" />

            <Label
              name="nom"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Nom
            </Label>

            <TextField
              name="nom"
              defaultValue={props.contact?.nom}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="nom" className="rw-field-error" />
          </div>

          <div className="col-span-2 sm:col-span-2">
            <Label
              name="email"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Email
            </Label>

            <TextField
              name="email"
              defaultValue={props.contact?.email}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="email" className="rw-field-error" />

            <Label
              name="motdepasse"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Motdepasse
            </Label>

            <TextField
              name="motdepasse"
              defaultValue={props.contact?.motdepasse}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="motdepasse" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="telephone1"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Telephone1
            </Label>

            <TextField
              name="telephone1"
              defaultValue={props.contact?.telephone1}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="telephone1" className="rw-field-error" />

            <Label
              name="telephone2"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Telephone2
            </Label>

            <TextField
              name="telephone2"
              defaultValue={props.contact?.telephone2}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="telephone2" className="rw-field-error" />
          </div>

          <div className="col-span-2 sm:col-span-2">
            <Label
              name="remarque"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Remarque
            </Label>

            <TextField
              name="remarque"
              defaultValue={props.contact?.remarque}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="remarque" className="rw-field-error" />

            <Label
              name="fonction"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Fonction
            </Label>

            <TextField
              name="fonction"
              defaultValue={props.contact?.fonction}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="fonction" className="rw-field-error" />
          </div>

          <div className="col-span-2 sm:col-span-2">
            <Label
              name="extranet"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Extranet
            </Label>

            <CheckboxField
              name="extranet"
              defaultChecked={props.contact?.extranet}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
            />

            <FieldError name="extranet" className="rw-field-error" />

            <Label
              name="actif"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Actif
            </Label>

            <CheckboxField
              name="actif"
              defaultChecked={props.contact?.actif}
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

export default ContactForm
