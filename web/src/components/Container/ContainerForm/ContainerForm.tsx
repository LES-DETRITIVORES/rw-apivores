import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'

import type { EditContainerById, UpdateContainerInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormContainer = NonNullable<EditContainerById['container']>

interface ContainerFormProps {
  container?: EditContainerById['container']
  onSave: (data: UpdateContainerInput, id?: FormContainer['id']) => void
  error: RWGqlError
  loading: boolean
}

const ContainerForm = (props: ContainerFormProps) => {
  const typeOptions = [
    {
      id: 1,
      name: 'Bac 120L (77)',
    },
    {
      id: 2,
      name: 'Bac 120L tampon (0)',
    },
    {
      id: 3,
      name: 'Bac 240L (71)',
    },
    {
      id: 4,
      name: 'Bac 500L (0)',
    },
    {
      id: 5,
      name: 'Bac 770L (0)',
    },
    {
      id: 6,
      name: 'Bac AUER (0)',
    },
    {
      id: 7,
      name: 'Bac carton 360L (0)',
    },
    {
      id: 8,
      name: 'Bac Debord (0)',
    },
    {
      id: 9,
      name: 'Badge 015 (CE Atlantica) (0)',
    },
    {
      id: 10,
      name: 'Badge 017 (Ecole le Bourg Blqft) (0)',
    },
    {
      id: 11,
      name: 'Badge 018 (Ecoles artigues) (0)',
    },
    {
      id: 12,
      name: 'Badge 025 (Cap Sciences) (0)',
    },
    {
      id: 13,
      name: 'Badge 107 (Gangofood) (0)',
    },
    {
      id: 14,
      name: 'Badge 165A-B (leupold/maucoudinat) (0)',
    },
    {
      id: 15,
      name: 'Badge 205 (Darwin cuisines) (0)',
    },
    {
      id: 16,
      name: 'Badge UBISOFT (0)',
    },
    {
      id: 17,
      name: 'Batterie BAV (0)',
    },
    {
      id: 18,
      name: 'Bioseau 10L (0)',
    },
    {
      id: 19,
      name: 'Bioseau 30L (0)',
    },
    {
      id: 20,
      name: 'Cagette (0)',
    },
    {
      id: 21,
      name: 'Caisse palette avec remorque (0)',
    },
    {
      id: 22,
      name: 'Caisse palette sans remorque (0)',
    },
    {
      id: 23,
      name: 'CARTON SACS COMPOSTABLES (0)',
    },
    {
      id: 24,
      name: 'Clé 002 (Contener Darwin) (0)',
    },
    {
      id: 25,
      name: 'Clé 011G (CTM Blqft) (0)',
    },
    {
      id: 26,
      name: 'Clé 028A (KEOLIS bdx Lescure) (0)',
    },
    {
      id: 27,
      name: 'Clé 170 (Bruges) (0)',
    },
    {
      id: 28,
      name: 'Clé 178B/E (Ecoles mérignac) (0)',
    },
    {
      id: 29,
      name: 'Clé 64 (Ragazzi BDX) (0)',
    },
    {
      id: 30,
      name: 'Clé Babilou Naujac (0)',
    },
    {
      id: 31,
      name: 'Clé BAV (0)',
    },
    {
      id: 32,
      name: 'Clé Ecoles Blanquefort (0)',
    },
    {
      id: 33,
      name: 'Clé Ecoles Pessac (0)',
    },
    {
      id: 34,
      name: 'Clé triangle (0)',
    },
    {
      id: 35,
      name: 'COLLECTE REPORTEE (0)',
    },
    {
      id: 36,
      name: 'Couvercle palox (0)',
    },
    {
      id: 37,
      name: 'Désinfectant BAV (0)',
    },
    {
      id: 38,
      name: 'Diable + Sangle (0)',
    },
    {
      id: 39,
      name: 'FORFAIT EVENEMENT (0)',
    },
    {
      id: 40,
      name: 'FORFAIT EVENEMENT WEEKEND (0)',
    },
    {
      id: 41,
      name: 'FRAIS DE PORT (0)',
    },
    {
      id: 42,
      name: 'Fûts 110L HAU (0)',
    },
    {
      id: 43,
      name: 'Fûts 30L HAU (0)',
    },
    {
      id: 44,
      name: 'Fûts 60L HAU (0)',
    },
    {
      id: 45,
      name: 'HOUSSE 140L (0)',
    },
    {
      id: 46,
      name: 'HOUSSE 240L (0)',
    },
    {
      id: 47,
      name: 'Lavage - maintenance (0)',
    },
    {
      id: 48,
      name: 'LIVRAISON ET INSTALLATION CONTENANTS (0)',
    },
    {
      id: 49,
      name: 'LIVRAISON COMPOST (0)',
    },
    {
      id: 50,
      name: 'NON FACTURE (0)',
    },
    {
      id: 51,
      name: 'Palox métallique (0)',
    },
    {
      id: 52,
      name: 'Passage HAU (0)',
    },
    {
      id: 53,
      name: 'Racloir + papier (nettoyage BAV) (0)',
    },
    {
      id: 54,
      name: 'ROULEAU SACS COMPOSTABLES (0)',
    },
    {
      id: 55,
      name: 'Sac (0)',
    },
    {
      id: 56,
      name: 'Sac polystyrene (0)',
    },
    {
      id: 57,
      name: 'SACS 12L (0)',
    },
    {
      id: 58,
      name: 'Seau 22L (0)',
    },
    {
      id: 59,
      name: 'SENSIBILISATION ET VISITE TECHNIQUE (0)',
    },
    {
      id: 60,
      name: 'stickers coquilles (0)',
    },
    {
      id: 61,
      name: 'Transpalette (0)',
    },
    {
      id: 62,
      name: 'VRAC (1)',
    },
  ]
  const onSubmit = (data: FormContainer) => {
    props.onSave(data, props?.container?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormContainer> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

          <TextField
            name="name"
            defaultValue={props.container?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />


        <FieldError name="name" className="rw-field-error" />

        <Label
          name="barcode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Barcode
        </Label>

          <TextField
            name="barcode"
            defaultValue={props.container?.barcode}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />


        <FieldError name="barcode" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <SelectField
          name="type"
          defaultValue={props.container?.type}
          className="rw-select"
          errorClassName="rw-select rw-select-error"
          validation={{ required: true }}
        >
          {typeOptions.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
          </SelectField>

        <FieldError name="type" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ContainerForm
