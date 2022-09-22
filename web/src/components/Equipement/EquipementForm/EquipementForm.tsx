import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditEquipementById, UpdateEquipementInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormEquipement = NonNullable<EditEquipementById['equipement']>

interface EquipementFormProps {
  equipement?: EditEquipementById['equipement']
  onSave: (data: UpdateEquipementInput, id?: FormEquipement['id']) => void
  error: RWGqlError
  loading: boolean
}

const EquipementForm = (props: EquipementFormProps) => {
  const onSubmit = (data: FormEquipement) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.equipement?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEquipement> onSubmit={onSubmit} error={props.error}>
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
            defaultValue={props.equipement?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>
        
          <TextField
            name="status"
            defaultValue={props.equipement?.status}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="status" className="rw-field-error" />

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

export default EquipementForm
