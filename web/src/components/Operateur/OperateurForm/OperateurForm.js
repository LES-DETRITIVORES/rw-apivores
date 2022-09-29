import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const OperateurForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.operateur?.id)
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
          name="prenom"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prenom
        </Label>

        <TextField
          name="prenom"
          defaultValue={props.operateur?.prenom}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          defaultValue={props.operateur?.nom}
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
          defaultChecked={props.operateur?.actif}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="actif" className="rw-field-error" />

        <Label
          name="tourneeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tournee id
        </Label>

        <NumberField
          name="tourneeId"
          defaultValue={props.operateur?.tourneeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="tourneeId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OperateurForm
