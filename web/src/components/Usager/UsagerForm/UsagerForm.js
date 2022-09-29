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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nom" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tiers" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contact" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="adresse" className="rw-field-error" />

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

        <TextField
          name="email"
          defaultValue={props.usager?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

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

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UsagerForm
