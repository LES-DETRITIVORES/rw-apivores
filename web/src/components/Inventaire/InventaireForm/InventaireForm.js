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
import { useQuery } from '@redwoodjs/web'
import { FINDALLQUERY } from 'src/components/Prestation/Prestation/'
import { useState } from 'react'
import Comboboxes from 'src/components/Comboboxes'

const InventaireForm = (props) => {
  const { loading, error, data } = useQuery(FINDALLQUERY)
  const sites = data?.sites
  const materiels = data?.materiels

  const [querySite, setQuerySite] = useState('')
  const [queryMateriel, setQueryMateriel] = useState('')

  const [selectedSite, setSelectedSite] = useState(props?.inventaire?.site)
  const [selectedMateriel, setSelectedMateriel] = useState(
    props?.inventaire?.materiel
  )

  const filteredSite =
    querySite === ''
      ? sites
      : sites.filter((site) =>
          site.nom.toLowerCase().includes(querySite.toLowerCase())
        )

  const filteredMateriel =
    queryMateriel === ''
      ? materiels
      : materiels.filter((materiel) =>
          materiel.nom.toLowerCase().includes(queryMateriel.toLowerCase())
        )

  const onSubmit = (data) => {
    data.site = selectedSite.id
    data.materiel = selectedMateriel.id
    props.onSave(data, props?.inventaire?.id)
  }

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Comboboxes
          setQuery={setQuerySite}
          query={querySite}
          filtered={filteredSite}
          selected={selectedSite}
          setSelected={setSelectedSite}
          name="site"
          defaultValue={selectedSite}
          label="Site"
        />

        <FieldError name="site" className="rw-field-error" />

        <Comboboxes
          setQuery={setQueryMateriel}
          query={queryMateriel}
          filtered={filteredMateriel}
          selected={selectedMateriel}
          setSelected={setSelectedMateriel}
          name="materiel"
          defaultValue={selectedMateriel}
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
          defaultValue={props.inventaire?.quantite}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
          validation={{ required: true }}
        />

        <FieldError name="quantite" className="rw-field-error" />

        <Label
          name="note"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Note
        </Label>

        <TextField
          name="note"
          defaultValue={props.inventaire?.note}
          className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
          errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
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
          defaultChecked={props.inventaire?.actif}
          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
          errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
        />

        <FieldError name="actif" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="inline-flex items-center rounded-md border border-transparent bg-green-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InventaireForm
