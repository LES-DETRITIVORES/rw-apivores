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
          defaultValue={props.site?.ordre}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          defaultValue={props.site?.nom}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          defaultValue={props.site?.adresse2}
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
          defaultValue={props.site?.codePostal}
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
          defaultValue={props.site?.ville}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="latitude" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="etage" className="rw-field-error" />

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
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="ascenseur" className="rw-field-error" />

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
          defaultChecked={props.site?.actif}
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

export default SiteForm
