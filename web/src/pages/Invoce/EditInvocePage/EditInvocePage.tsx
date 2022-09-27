import EditInvoceCell from 'src/components/Invoce/EditInvoceCell'

type InvocePageProps = {
  id: number
}

const EditInvocePage = ({ id }: InvocePageProps) => {
  return <EditInvoceCell id={id} />
}

export default EditInvocePage
