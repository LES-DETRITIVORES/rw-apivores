import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PlanificateursCell from 'src/components/Planning/PlanificateursCell'

const PlanningPage = () => {
  const debut = '2023-01-01T12:34:56Z'
  return (
    <>
      <MetaTags title="Planning" description="Planning page" />

      <h1>Planning</h1>
      {debut}
      <PlanificateursCell debut={debut}/>
    </>
  )
}

export default PlanningPage
