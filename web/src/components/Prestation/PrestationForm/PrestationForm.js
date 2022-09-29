import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

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
<<<<<<< HEAD

        <Label
          name="nom"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nom
        </Label>

        <TextField
          name="nom"
          defaultValue={props.prestation?.nom}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nom" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="actif" className="rw-field-error" />

=======
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          <div className="col-span-2 sm:col-span-2">
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
          </div>
          <div className="col-span-2 sm:col-span-2">
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
              name="prestation"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Prestation
            </Label>

            <TextField
              name="prestation"
              defaultValue={props.prestation?.prestation}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="prestation" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="tarif"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Tarif
            </Label>

            <TextField
              name="tarif"
              defaultValue={props.prestation?.tarif}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ valueAsNumber: true, required: true }}
            />

            <FieldError name="tarif" className="rw-field-error" />

            <Label
              name="quantite"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Quantite
            </Label>

            <TextField
              name="quantite"
              defaultValue={props.prestation?.quantite}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ valueAsNumber: true, required: true }}
            />

            <FieldError name="quantite" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="passage"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Passage
            </Label>

            <CheckboxField
              name="passage"
              defaultChecked={props.prestation?.passage}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
            />

            <FieldError name="passage" className="rw-field-error" />

            <Label
              name="bac"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Bac
            </Label>

            <CheckboxField
              name="bac"
              defaultChecked={props.prestation?.bac}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
            />

            <FieldError name="bac" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
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
          </div>
        </div>
>>>>>>> 5dac5e5e75f5023129195eb23c8fae81e9994983
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
