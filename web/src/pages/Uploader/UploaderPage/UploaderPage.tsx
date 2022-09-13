import UploaderCell from 'src/components/Uploader/UploaderCell'

type UploaderPageProps = {
  id?: number
}

const UploaderPage = ({ id }: UploaderPageProps) => {
  return <UploaderCell id={id} />
}

export default UploaderPage
