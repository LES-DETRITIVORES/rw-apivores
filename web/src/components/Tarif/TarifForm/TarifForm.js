import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  NumberField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const TarifForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.tarif?.id)
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
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.tarif?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="siteId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Site id
        </Label>

        <NumberField
          name="siteId"
          defaultValue={props.tarif?.siteId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="siteId" className="rw-field-error" />

        <Label
          name="prestation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prestation
        </Label>

        <TextField
          name="prestation"
          defaultValue={props.tarif?.prestation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="prestation" className="rw-field-error" />

        <Label
          name="prix"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prix
        </Label>

        <TextField
          name="prix"
          defaultValue={props.tarif?.prix}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="prix" className="rw-field-error" />

        <Label
          name="passage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Passage
        </Label>

        <CheckboxField
          name="passage"
          defaultChecked={props.tarif?.passage}
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
          defaultChecked={props.tarif?.bac}
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
          defaultChecked={props.tarif?.actif}
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

export default TarifForm
