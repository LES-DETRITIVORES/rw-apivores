import InvoceCell from 'src/components/Invoce/InvoceCell'

type InvocePageProps = {
  id: number
}

const InvocePage = ({ id }: InvocePageProps) => {
  return <InvoceCell id={id} />
}

export default InvocePage
