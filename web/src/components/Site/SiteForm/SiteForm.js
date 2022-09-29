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

const SiteForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.site?.id)
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
        <div className="grid grid-cols-1 flex-col gap-6 md:grid-cols-6">
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
              defaultValue={props.site?.usager}
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
              defaultValue={props.site?.ordre}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="ordre" className="rw-field-error" />
          </div>
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
              defaultValue={props.site?.nom}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="nom" className="rw-field-error" />

            <Label
              name="adresse"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Adresse
            </Label>

            <TextField
              name="adresse"
              defaultValue={props.site?.adresse}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="adresse" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="adresse2"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Adresse2
            </Label>

            <TextField
              name="adresse2"
              defaultValue={props.site?.adresse2}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
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
              defaultValue={props.site?.codePostal}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="codePostal" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="ville"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Ville
            </Label>

            <TextField
              name="ville"
              defaultValue={props.site?.ville}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="ville" className="rw-field-error" />

            <Label
              name="latitude"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Latitude
            </Label>

            <TextField
              name="latitude"
              defaultValue={props.site?.latitude}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="latitude" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="longitude"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Longitude
            </Label>

            <TextField
              name="longitude"
              defaultValue={props.site?.longitude}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="longitude" className="rw-field-error" />

            <Label
              name="etage"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Etage
            </Label>

            <NumberField
              name="etage"
              defaultValue={props.site?.etage}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="etage" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="note"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Note
            </Label>

            <TextField
              name="note"
              defaultValue={props.site?.note}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="note" className="rw-field-error" />
          </div>
          <div className="inline-flex items-center space-x-2">
            <div>
              <Label
                name="ascenseur"
                className="rw-label"
                errorClassName="rw-label rw-label-error"
              >
                Ascenseur
              </Label>

              <CheckboxField
                name="ascenseur"
                defaultChecked={props.site?.ascenseur}
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
                errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
              />

              <FieldError name="ascenseur" className="rw-field-error" />
            </div>
            <div className="">
              <Label
                name="actif"
                className="rw-label"
                errorClassName="rw-label rw-label-error"
              >
                Actif
              </Label>
              <CheckboxField
                name="actif"
                defaultChecked={props.site?.actif}
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
                errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
              />

              <FieldError name="actif" className="rw-field-error" />
            </div>
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

export default SiteForm
