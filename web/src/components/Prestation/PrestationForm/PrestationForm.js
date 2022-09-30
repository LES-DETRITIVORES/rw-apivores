import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  CheckboxField,
  DatetimeLocalField,
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
          name="materiel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Materiel
        </Label>

        <NumberField
          name="materiel"
          defaultValue={props.prestation?.materiel}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="materiel" className="rw-field-error" />

        <Label
          name="quantite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantite
        </Label>

        <NumberField
          name="quantite"
          defaultValue={props.prestation?.quantite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quantite" className="rw-field-error" />

        <Label
          name="service"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Service
        </Label>

        <NumberField
          name="service"
          defaultValue={props.prestation?.service}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="service" className="rw-field-error" />

        <Label
          name="vehicule"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vehicule
        </Label>

        <NumberField
          name="vehicule"
          defaultValue={props.prestation?.vehicule}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vehicule" className="rw-field-error" />

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
          name="note"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Note
        </Label>

        <TextField
          name="note"
          defaultValue={props.prestation?.note}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="note" className="rw-field-error" />

        <Label
          name="debut"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Debut
        </Label>

        <DatetimeLocalField
          name="debut"
          defaultValue={formatDatetime(props.prestation?.debut)}
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
          defaultValue={formatDatetime(props.prestation?.fin)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fin" className="rw-field-error" />

        <Label
          name="frequence"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Frequence
        </Label>

        <TextField
          name="frequence"
          defaultValue={props.prestation?.frequence}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="frequence" className="rw-field-error" />

        <Label
          name="lundi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lundi
        </Label>

        <CheckboxField
          name="lundi"
          defaultChecked={props.prestation?.lundi}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="lundi" className="rw-field-error" />

        <Label
          name="mardi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mardi
        </Label>

        <CheckboxField
          name="mardi"
          defaultChecked={props.prestation?.mardi}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="mardi" className="rw-field-error" />

        <Label
          name="mercredi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mercredi
        </Label>

        <CheckboxField
          name="mercredi"
          defaultChecked={props.prestation?.mercredi}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="mercredi" className="rw-field-error" />

        <Label
          name="jeudi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Jeudi
        </Label>

        <CheckboxField
          name="jeudi"
          defaultChecked={props.prestation?.jeudi}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="jeudi" className="rw-field-error" />

        <Label
          name="vendredi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vendredi
        </Label>

        <CheckboxField
          name="vendredi"
          defaultChecked={props.prestation?.vendredi}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="vendredi" className="rw-field-error" />

        <Label
          name="samedi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Samedi
        </Label>

        <CheckboxField
          name="samedi"
          defaultChecked={props.prestation?.samedi}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="samedi" className="rw-field-error" />

        <Label
          name="dimanche"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Dimanche
        </Label>

        <CheckboxField
          name="dimanche"
          defaultChecked={props.prestation?.dimanche}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="dimanche" className="rw-field-error" />

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
