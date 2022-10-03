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
  SelectField,
} from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'
import Comboboxes from 'src/components/Comboboxes'
import { FINDALLQUERY } from '../Prestation'
import { useState } from 'react'
const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const PrestationForm = (props) => {
  const [queryMateriel, setQueryMateriel] = useState('')
  const [querySite, setQuerySite] = useState('')
  const [queryMatiere, setQueryMatiere] = useState('')
  const [queryVehicule, setQueryVehicule] = useState('')
  const [queryService, setQueryService] = useState('')

  const [selectedMateriel, setSelectedMateriel] = useState(
    props?.prestation?.materiel
  )
  const [selectedSite, setSelectedSite] = useState(props?.prestation?.site)
  const [selectedMatiere, setSelectedMatiere] = useState(
    props?.prestation?.matiere
  )
  const [selectedVehicule, setSelectedVehicule] = useState(
    props?.prestation?.vehicule
  )
  const [selectedService, setSelectedService] = useState(
    props?.prestation?.service
  )

  const { loading, error, data } = useQuery(FINDALLQUERY)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const onSubmit = (data) => {
    props.onSave(data, props?.prestation?.id)
    data.materiel = selectedMateriel.id
    data.site = selectedSite.id
    data.matiere = selectedMatiere.id
    data.vehicule = selectedVehicule.id
    data.service = selectedService.id
  }

  const filteredMateriel =
    queryMateriel === ''
      ? data.materiels
      : data.materiels.filter((materiel) =>
          materiel.nom.toLowerCase().includes(query.toLowerCase())
        )

  const filteredSite =
    querySite === ''
      ? data.sites
      : data.sites.filter((site) =>
          site.nom.toLowerCase().includes(query.toLowerCase())
        )

  const filteredMatiere =
    queryMatiere === ''
      ? data.matieres
      : data.matieres.filter((matiere) =>
          matiere.nom.toLowerCase().includes(query.toLowerCase())
        )

  const filteredVehicule =
    queryVehicule === ''
      ? data.vehicules
      : data.vehicules.filter((vehicule) =>
          vehicule.nom.toLowerCase().includes(query.toLowerCase())
        )

  const filteredService =
    queryService === ''
      ? data.services
      : data.services.filter((service) =>
          service.nom.toLowerCase().includes(query.toLowerCase())
        )

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          <div className="col-span-2 sm:col-span-2">
            <Comboboxes
              query={querySite}
              setQuery={setQuerySite}
              selected={selectedSite}
              setSelected={setSelectedSite}
              filtered={filteredSite}
              name="site"
            />
            <FieldError name="site" className="rw-field-error" />

            <Comboboxes
              query={queryMatiere}
              setQuery={setQueryMatiere}
              selected={selectedMatiere}
              setSelected={setSelectedMatiere}
              filtered={filteredMatiere}
              name="matiere"
            />

            <FieldError name="matiere" className="rw-field-error" />

            <Comboboxes
              query={queryMateriel}
              setQuery={setQueryMateriel}
              selected={selectedMateriel}
              setSelected={setSelectedMateriel}
              filtered={filteredMateriel}
              name="materiel"
            />

            <FieldError name="materiel" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="quantite" className="rw-field-error" />

            <Comboboxes
              query={queryService}
              setQuery={setQueryService}
              selected={selectedService}
              setSelected={setSelectedService}
              filtered={filteredService}
              name="service"
            />
            <FieldError name="service" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Comboboxes
              query={queryVehicule}
              setQuery={setQueryVehicule}
              selected={selectedVehicule}
              setSelected={setSelectedVehicule}
              filtered={filteredVehicule}
              name="vehicule"
            />

            <FieldError name="vehicule" className="rw-field-error" />

            <Label
              name="prix"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Prix
            </Label>

            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">€</span>
              </div>
              <NumberField
                name="prix"
                defaultValue={props.prestation?.prix}
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-green-800 focus:ring-green-800 sm:text-sm"
                errorClassName="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                validation={{ required: true }}
              />
            </div>

            <FieldError name="prix" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
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
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="note" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="fin" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="frequence"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Frequence
            </Label>
            <SelectField
              name="frequence"
              defaultValue={props.prestation?.frequence}
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-800 focus:outline-none focus:ring-green-700 sm:text-sm"
              errorClassName="mt-1 block w-full rounded-md border-red-300 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
              validation={{ required: true }}
            >
              <option value="Hébdomadaire">Hébdomadaire</option>
              <option value="Mensuel">Mensuel</option>
              <option value="Ponctuel">Ponctuel</option>
            </SelectField>

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
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
            />

            <FieldError name="lundi" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
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
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
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
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
            />

            <FieldError name="mercredi" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
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
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
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
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
            />

            <FieldError name="vendredi" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
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
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
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
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
            />

            <FieldError name="dimanche" className="rw-field-error" />
          </div>
          <div className="col-span-1 sm:col-span-1">
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
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
            />

            <FieldError name="actif" className="rw-field-error" />
          </div>
        </div>

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

export default PrestationForm
