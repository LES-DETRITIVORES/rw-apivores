import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditInvoceById, UpdateInvoceInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormInvoce = NonNullable<EditInvoceById['invoce']>

interface InvoceFormProps {
  invoce?: EditInvoceById['invoce']
  onSave: (data: UpdateInvoceInput, id?: FormInvoce['id']) => void
  error: RWGqlError
  loading: boolean
}

const InvoceForm = (props: InvoceFormProps) => {
  const onSubmit = (data: FormInvoce) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.invoce?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInvoce> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="invoiceId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Invoice id
        </Label>
        
          <TextField
            name="invoiceId"
            defaultValue={props.invoce?.invoiceId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="invoiceId" className="rw-field-error" />

        <Label
          name="reference"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reference
        </Label>
        
          <TextField
            name="reference"
            defaultValue={props.invoce?.reference}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="reference" className="rw-field-error" />

        <Label
          name="period"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Period
        </Label>
        
          <TextField
            name="period"
            defaultValue={props.invoce?.period}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="period" className="rw-field-error" />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>
        
          <TextField
            name="date"
            defaultValue={props.invoce?.date}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="client"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Client
        </Label>
        
          <TextField
            name="client"
            defaultValue={props.invoce?.client}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="client" className="rw-field-error" />

        <Label
          name="site"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Site
        </Label>
        
          <TextField
            name="site"
            defaultValue={props.invoce?.site}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="site" className="rw-field-error" />

        <Label
          name="canceled"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Canceled
        </Label>
        
          <CheckboxField
            name="canceled"
            defaultChecked={props.invoce?.canceled}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="canceled" className="rw-field-error" />

        <Label
          name="paid"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Paid
        </Label>
        
          <TextField
            name="paid"
            defaultValue={props.invoce?.paid}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="paid" className="rw-field-error" />

        <Label
          name="amountHT"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Amount ht
        </Label>
        
          <TextField
            name="amountHT"
            defaultValue={props.invoce?.amountHT}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsNumber: true, required: true }}
          />
        

        <FieldError name="amountHT" className="rw-field-error" />

        <Label
          name="amountTTC"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Amount ttc
        </Label>
        
          <TextField
            name="amountTTC"
            defaultValue={props.invoce?.amountTTC}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsNumber: true, required: true }}
          />
        

        <FieldError name="amountTTC" className="rw-field-error" />

        <Label
          name="collectHT"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Collect ht
        </Label>
        
          <TextField
            name="collectHT"
            defaultValue={props.invoce?.collectHT}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="collectHT" className="rw-field-error" />

        <Label
          name="treatHT"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Treat ht
        </Label>
        
          <TextField
            name="treatHT"
            defaultValue={props.invoce?.treatHT}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="treatHT" className="rw-field-error" />

        <Label
          name="cleanHT"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Clean ht
        </Label>
        
          <TextField
            name="cleanHT"
            defaultValue={props.invoce?.cleanHT}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="cleanHT" className="rw-field-error" />

        <Label
          name="otherHT"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Other ht
        </Label>
        
          <TextField
            name="otherHT"
            defaultValue={props.invoce?.otherHT}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="otherHT" className="rw-field-error" />

        <Label
          name="otherLines"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Other lines
        </Label>
        
          <TextField
            name="otherLines"
            defaultValue={props.invoce?.otherLines}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="otherLines" className="rw-field-error" />

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

export default InvoceForm
