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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="operation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Operation
        </Label>

        <NumberField
          name="operation"
          defaultValue={props.prestation?.operation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="operation" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="actif" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PrestationForm
