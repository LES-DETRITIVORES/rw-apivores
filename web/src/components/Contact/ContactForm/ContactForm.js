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

const ContactForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.contact?.id)
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
          name="usager"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Usager
        </Label>

        <NumberField
          name="usager"
          defaultValue={props.contact?.usager}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          defaultValue={props.contact?.ordre}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ordre" className="rw-field-error" />

        <Label
          name="prenom"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prenom
        </Label>

        <TextField
          name="prenom"
          defaultValue={props.contact?.prenom}
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
          defaultValue={props.contact?.nom}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nom" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.contact?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="motdepasse"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Motdepasse
        </Label>

        <TextField
          name="motdepasse"
          defaultValue={props.contact?.motdepasse}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="motdepasse" className="rw-field-error" />

        <Label
          name="telephone1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Telephone1
        </Label>

        <TextField
          name="telephone1"
          defaultValue={props.contact?.telephone1}
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
          defaultValue={props.contact?.telephone2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="telephone2" className="rw-field-error" />

        <Label
          name="remarque"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Remarque
        </Label>

        <TextField
          name="remarque"
          defaultValue={props.contact?.remarque}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="remarque" className="rw-field-error" />

        <Label
          name="fonction"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fonction
        </Label>

        <TextField
          name="fonction"
          defaultValue={props.contact?.fonction}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fonction" className="rw-field-error" />

        <Label
          name="extranet"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Extranet
        </Label>

        <CheckboxField
          name="extranet"
          defaultChecked={props.contact?.extranet}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="extranet" className="rw-field-error" />

        <Label
          name="actif"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Actif
        </Label>

        <CheckboxField
          name="actif"
          defaultChecked={props.contact?.actif}
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

export default ContactForm
