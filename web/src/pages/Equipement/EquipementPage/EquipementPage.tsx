import EquipementCell from 'src/components/Equipement/EquipementCell'

type EquipementPageProps = {
  id: number
}

const EquipementPage = ({ id }: EquipementPageProps) => {
  return <EquipementCell id={id} />
}

export default EquipementPage
