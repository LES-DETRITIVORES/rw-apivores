import EditEquipementCell from 'src/components/Equipement/EditEquipementCell'

type EquipementPageProps = {
  id: number
}

const EditEquipementPage = ({ id }: EquipementPageProps) => {
  return <EditEquipementCell id={id} />
}

export default EditEquipementPage
