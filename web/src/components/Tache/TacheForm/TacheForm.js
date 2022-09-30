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

const TacheForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.tache?.id)
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
          name="debut"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Debut
        </Label>

        <DatetimeLocalField
          name="debut"
          defaultValue={formatDatetime(props.tache?.debut)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="debut" className="rw-field-error" />

        <Label
          name="fin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fin
        </Label>

        <DatetimeLocalField
          name="fin"
          defaultValue={formatDatetime(props.tache?.fin)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fin" className="rw-field-error" />

        <Label
          name="prestation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prestation
        </Label>

        <NumberField
          name="prestation"
          defaultValue={props.tache?.prestation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="prestation" className="rw-field-error" />

        <Label
          name="vehicule"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vehicule
        </Label>

        <NumberField
          name="vehicule"
          defaultValue={props.tache?.vehicule}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vehicule" className="rw-field-error" />

        <Label
          name="operateur1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Operateur1
        </Label>

        <NumberField
          name="operateur1"
          defaultValue={props.tache?.operateur1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="operateur1" className="rw-field-error" />

        <Label
          name="operateur2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Operateur2
        </Label>

        <NumberField
          name="operateur2"
          defaultValue={props.tache?.operateur2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="operateur2" className="rw-field-error" />

        <Label
          name="operateur3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Operateur3
        </Label>

        <NumberField
          name="operateur3"
          defaultValue={props.tache?.operateur3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="operateur3" className="rw-field-error" />

        <Label
          name="collecte"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Collecte
        </Label>

        <DatetimeLocalField
          name="collecte"
          defaultValue={formatDatetime(props.tache?.collecte)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="collecte" className="rw-field-error" />

        <Label
          name="quantite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantite
        </Label>

        <NumberField
          name="quantite"
          defaultValue={props.tache?.quantite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quantite" className="rw-field-error" />

        <Label
          name="noteCollecte"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Note collecte
        </Label>

        <TextField
          name="noteCollecte"
          defaultValue={props.tache?.noteCollecte}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="noteCollecte" className="rw-field-error" />

        <Label
          name="pesee"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pesee
        </Label>

        <DatetimeLocalField
          name="pesee"
          defaultValue={formatDatetime(props.tache?.pesee)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pesee" className="rw-field-error" />

        <Label
          name="poids"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Poids
        </Label>

        <NumberField
          name="poids"
          defaultValue={props.tache?.poids}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="poids" className="rw-field-error" />

        <Label
          name="qualite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Qualite
        </Label>

        <NumberField
          name="qualite"
          defaultValue={props.tache?.qualite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="qualite" className="rw-field-error" />

        <Label
          name="notePesee"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Note pesee
        </Label>

        <TextField
          name="notePesee"
          defaultValue={props.tache?.notePesee}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="notePesee" className="rw-field-error" />

        <Label
          name="photos"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Photos
        </Label>

        <TextField
          name="photos"
          defaultValue={props.tache?.photos}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="photos" className="rw-field-error" />

        <Label
          name="terminee"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Terminee
        </Label>

        <CheckboxField
          name="terminee"
          defaultChecked={props.tache?.terminee}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="terminee" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TacheForm
