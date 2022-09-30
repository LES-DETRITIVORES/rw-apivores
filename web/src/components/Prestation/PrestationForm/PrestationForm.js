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
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState({
    site: null,
    materiel: null,
    matiere: null,
    vehicule: null,
    service: null,
  })
  const { loading, error, data } = useQuery(FINDALLQUERY)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const onSubmit = (data) => {
    props.onSave(data, props?.prestation?.id)
    setSelected({
      site: props.prestation?.site,
      matiere: props.prestation?.matiere,
      materiel: props.prestation?.materiel,
      vehicule: props.prestation?.vehicule,
      service: props.prestation?.service,
    })
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
          <div className="col-span-2 sm:col-span-2">
            <Comboboxes
              selected={props.prestation?.site}
              setSelected={(e) =>
                setSelected({
                  site: selected,
                })
              }
              query={query}
              setQuery={setQuery}
              filtered={
                query === ''
                  ? data.sites?.map((site) => {
                      return {
                        id: site.id,
                        name: site.nom,
                      }
                    })
                  : data.sites
                      ?.map((site) => {
                        return {
                          id: site.id,
                          name: site.nom,
                        }
                      })
                      .filter((site) => {
                        return site.name
                          .toLowerCase()
                          .includes(query?.toLowerCase())
                      })
              }
              label="Site"
            />
            <FieldError name="site" className="rw-field-error" />

            <Comboboxes
              selected={props.prestation?.matiere}
              setSelected={(e) =>
                setSelected({
                  matiere: selected,
                })
              }
              query={query}
              setQuery={setQuery}
              filtered={
                query === ''
                  ? data.matieres?.map((site) => {
                      return {
                        id: site.id,
                        name: site.nom,
                      }
                    })
                  : data.matieres
                      ?.map((matiere) => {
                        return {
                          id: matiere.id,
                          name: matiere.nom,
                        }
                      })
                      .filter((matiere) => {
                        return matiere.name
                          .toLowerCase()
                          .includes(query?.toLowerCase())
                      })
              }
              label="Matière"
            />

            <FieldError name="matiere" className="rw-field-error" />

            <Comboboxes
              selected={props.prestation?.materiel}
              setSelected={(e) =>
                setSelected({
                  materiel: selected,
                })
              }
              query={query}
              setQuery={setQuery}
              filtered={
                query === ''
                  ? data.materiels?.map((materiel) => {
                      return {
                        id: materiel.id,
                        name: materiel.nom,
                      }
                    })
                  : data.materiels
                      ?.map((materiel) => {
                        return {
                          id: materiel.id,
                          name: materiel.nom,
                        }
                      })
                      .filter((materiel) => {
                        return materiel.name
                          .toLowerCase()
                          .includes(query?.toLowerCase())
                      })
              }
              label="Materiel"
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
              selected={props.prestation?.service}
              setSelected={(e) =>
                setSelected({
                  service: selected,
                })
              }
              query={query}
              setQuery={setQuery}
              filtered={
                query === ''
                  ? data.services?.map((service) => {
                      return {
                        id: service.id,
                        name: service.nom,
                      }
                    })
                  : data.services
                      ?.map((service) => {
                        return {
                          id: service.id,
                          name: service.nom,
                        }
                      })
                      .filter((service) => {
                        return service.name
                          .toLowerCase()
                          .includes(query?.toLowerCase())
                      })
              }
              label="Services"
            />
            <FieldError name="service" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Comboboxes
              selected={props.prestation?.vehicule}
              setSelected={(e) =>
                setSelected({
                  service: selected,
                })
              }
              query={query}
              setQuery={setQuery}
              filtered={
                query === ''
                  ? data.vehicules?.map((vehicule) => {
                      return {
                        id: vehicule.id,
                        name: vehicule.nom + ' ' + vehicule.immatriculation,
                      }
                    })
                  : data.vehicules
                      ?.map((vehicule) => {
                        return {
                          id: vehicule.id,
                          name: vehicule.nom + ' ' + vehicule.immatriculation,
                        }
                      })
                      .filter((vehicule) => {
                        return vehicule.name
                          .toLowerCase()
                          .includes(query?.toLowerCase())
                      })
              }
              label="Véhicule"
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
