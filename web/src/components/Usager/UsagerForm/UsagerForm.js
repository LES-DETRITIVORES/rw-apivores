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

<<<<<<< HEAD
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
=======
        <Label
          name="tiers"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tiers
        </Label>
>>>>>>> a19af17b86d24a23a4986c1116bff1505bf5d1f0

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

<<<<<<< HEAD
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
=======
        <Label
          name="adresse2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Adresse2
        </Label>

        <TextField
          name="adresse2"
          defaultValue={props.usager?.adresse2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="adresse2" className="rw-field-error" />

        <Label
          name="codePostal"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Code postal
        </Label>

        <TextField
          name="codePostal"
          defaultValue={props.usager?.codePostal}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="codePostal" className="rw-field-error" />

        <Label
          name="ville"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ville
        </Label>

        <TextField
          name="ville"
          defaultValue={props.usager?.ville}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ville" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
>>>>>>> a19af17b86d24a23a4986c1116bff1505bf5d1f0

            <TextField
              name="telephone"
              defaultValue={props.usager?.telephone}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="telephone" className="rw-field-error" />

<<<<<<< HEAD
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
=======
        <Label
          name="telephone1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Telephone1
        </Label>

        <TextField
          name="telephone1"
          defaultValue={props.usager?.telephone1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          defaultValue={props.usager?.telephone2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="telephone2" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="actif" className="rw-field-error" />
>>>>>>> a19af17b86d24a23a4986c1116bff1505bf5d1f0

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
