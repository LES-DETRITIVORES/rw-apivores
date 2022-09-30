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

const VehiculeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.vehicule?.id)
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
          name="ordre"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ordre
        </Label>

        <NumberField
          name="ordre"
          defaultValue={props.vehicule?.ordre}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="ordre" className="rw-field-error" />

        <Label
          name="nom"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nom
        </Label>

        <TextField
          name="nom"
          defaultValue={props.vehicule?.nom}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="nom" className="rw-field-error" />

        <Label
          name="immatriculation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Immatriculation
        </Label>

        <TextField
          name="immatriculation"
          defaultValue={props.vehicule?.immatriculation}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="immatriculation" className="rw-field-error" />

        <Label
          name="identifiant"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Identifiant
        </Label>

        <TextField
          name="identifiant"
          defaultValue={props.vehicule?.identifiant}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="identifiant" className="rw-field-error" />

        <Label
          name="couleur"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Couleur
        </Label>

        <TextField
          name="couleur"
          defaultValue={props.vehicule?.couleur}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="couleur" className="rw-field-error" />

        <Label
          name="icone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Icone
        </Label>

        <TextField
          name="icone"
          defaultValue={props.vehicule?.icone}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="icone" className="rw-field-error" />

        <Label
          name="actif"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Actif
        </Label>

        <CheckboxField
          name="actif"
          defaultChecked={props.vehicule?.actif}
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

export default VehiculeForm
