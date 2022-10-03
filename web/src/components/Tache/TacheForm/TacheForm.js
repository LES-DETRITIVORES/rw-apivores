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
import { FINDALLQUERY } from 'src/components/Prestation/Prestation'
import { useQuery } from '@redwoodjs/web'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import { useEffect, useState } from 'react'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const TacheForm = (props) => {
  const [file, setFile] = useState(null)
  const onSubmit = (data) => {
    props.onSave(data, props?.tache?.id)
  }
  useEffect(() => {
    if (props.tache?.photos) {
      setFile(props.tache?.photos)
    }
  }, [props.tache?.photos])

  const { loading, error, data } = useQuery(FINDALLQUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const vehicule = data.vehicules?.reduce((acc, vehicule) => {
    acc[vehicule.id] = vehicule.nom + ' ' + vehicule.immatriculation
    return acc
  }, {})

  const prestation = data.prestations?.reduce((acc, prestation) => {
    acc[prestation.id] = prestation.nom
    return acc
  }, {})

  const publicKey = 'public_RujORre5FFpe1N220PBprbYjPjg='
  const urlEndpoint = 'https://ik.imagekit.io/dttv/'

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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="fin" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="vehicule" className="rw-field-error" />
          </div>

          <div className="col-span-2 sm:col-span-2">
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="operateur2" className="rw-field-error" />
          </div>

          <div className="col-span-2 sm:col-span-2">
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="collecte" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="quantite"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Quantité
            </Label>

            <NumberField
              name="quantite"
              defaultValue={props.tache?.quantite}
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="noteCollecte" className="rw-field-error" />
          </div>

          <div className="col-span-2 sm:col-span-2">
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="poids" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
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
              className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
              errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
              validation={{ required: true }}
            />

            <FieldError name="notePesee" className="rw-field-error" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <Label
              name="photos"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Photos
            </Label>

            <div className="inline-flex items-center space-x-2">
              <TextField
                name="photos"
                defaultValue={props.tache?.photos}
                className="mt-2 block w-full rounded-md border-gray-300 focus:border-green-700  focus:ring-green-700 sm:text-sm"
                errorClassName="sm:text-sm mt-2 block w-full rounded-md border-red-300  focus:border-red-500 focus:ring-red-500"
                validation={{ required: true }}
                onError={(error) => {
                  console.log(error)
                }}
              />

              <IKContext
                publicKey={publicKey}
                urlEndpoint={urlEndpoint}
                transformationPosition="path"
              >
                <IKUpload
                  fileName={'/' + file}
                  folder="IMAGES_CLIENTS"
                  authenticationEndpoint={'http://localhost:3001/auth'}
                  className="file:mt-2 file:cursor-pointer file:rounded-md file:border-none file:bg-green-900 file:px-2.5 file:py-2.5 file:text-white file:hover:bg-green-800"
                />
              </IKContext>
            </div>
            <FieldError name="photos" className="rw-field-error" />
            <Label
              name="terminee"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Terminé
            </Label>

            <CheckboxField
              name="terminee"
              defaultChecked={props.tache?.terminee}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
              errorClassName="focus:ring-red-500 h-4 w-4 text-red-600 border-red-300 rounded"
            />

            <FieldError name="terminee" className="rw-field-error" />
          </div>
          <IKImage
            path={'/' + props?.tache?.photos}
            className="m-auto rounded-md "
            transformation={[{ height: '300', width: '300' }]}
            urlEndpoint={urlEndpoint}
          />
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

export default TacheForm
