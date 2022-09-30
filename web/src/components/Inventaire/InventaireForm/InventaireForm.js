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
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'

const InventaireForm = (props) => {
  const { loading, error, data } = useQuery(FINDALLQUERY)
  const sites = data?.sites
  const materiels = data?.materiels

  const [querySite, setQuerySite] = useState('')
  const [queryMateriel, setQueryMateriel] = useState('')

  const [selectedSite, setSelectedSite] = useState(props.inventaire.site)
  const [selectedMateriel, setSelectedMateriel] = useState(props.inventaire.materiel)
  
  const filteredSite =
    querySite === '' ? sites : sites.filter((site) => site.nom.toLowerCase().includes(querySite.toLowerCase()))

  const filteredMateriel =
    queryMateriel === '' ? materiels : materiels.filter((materiel) => materiel.nom.toLowerCase().includes(queryMateriel.toLowerCase()))

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
        <Label
          name="site"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Site
        </Label>
        <Combobox
          value={selectedSite}
          onChange={setSelectedSite}
          name="site"
          defaultValue={selectedSite}
        >
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                onChange={(event) => setQuerySite(event.target.value)}
                displayValue={(site) => site.nom}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuerySite('')}
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredSite.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Aucune site trouvé.
                </div>
              ) : (
                filteredSite.map((site) => (
                  <Combobox.Option
                    key={site.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={site}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {site.nom}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>            
        </Combobox>

        <FieldError name="site" className="rw-field-error" />
        
        <Label
          name="materiel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Matériel
        </Label>
        <Combobox
          value={selectedMateriel}
          onChange={setSelectedMateriel}
          name="materiel"
          defaultValue={selectedMateriel}
        >
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                onChange={(event) => setQueryMateriel(event.target.value)}
                displayValue={(materiel) => materiel.nom}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQueryMateriel('')}
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredMateriel.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Aucune matériel trouvé.
                </div>
              ) : (
                filteredMateriel.map((materiel) => (
                  <Combobox.Option
                    key={materiel.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={materiel}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {materiel.nom}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>            
        </Combobox>

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
