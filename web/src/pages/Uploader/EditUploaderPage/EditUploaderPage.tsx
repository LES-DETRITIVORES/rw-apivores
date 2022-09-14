import EditUploaderCell from 'src/components/Uploader/EditUploaderCell'

type UploaderPageProps = {
  id: number
}

const EditUploaderPage = ({ id }: UploaderPageProps) => {
  return <EditUploaderCell id={id} />
}

export default EditUploaderPage
