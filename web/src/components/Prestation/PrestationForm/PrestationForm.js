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
          name="prestation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prestation
        </Label>

        <TextField
          name="prestation"
          defaultValue={props.prestation?.prestation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="prestation" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="quantite" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="bac" className="rw-field-error" />

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
