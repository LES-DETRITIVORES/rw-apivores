import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
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
          name="nom"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nom
        </Label>

        <TextField
          name="nom"
          defaultValue={props.vehicule?.nom}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="icone" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ordre" className="rw-field-error" />

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

export default VehiculeForm
