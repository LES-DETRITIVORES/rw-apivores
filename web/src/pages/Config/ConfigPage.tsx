import { MetaTags } from '@redwoodjs/web'

import ContainersLayout from 'src/layouts/ContainersLayout'
import CustomersLayout from 'src/layouts/CustomersLayout'
import EquipementsLayout from 'src/layouts/EquipementsLayout/EquipementsLayout'
import MaterialsLayout from 'src/layouts/MaterialsLayout'
import ServicesLayout from 'src/layouts/ServicesLayout'
import SitesLayout from 'src/layouts/SitesLayout'
import WorkersLayout from 'src/layouts/WorkersLayout'
import ContainersPage from 'src/pages/Container/ContainersPage'
import CustomersPage from 'src/pages/Customer/CustomersPage'
import MaterialsPage from 'src/pages/Material/MaterialsPage'
import ServicesPage from 'src/pages/Service/ServicesPage'
import SitesPage from 'src/pages/Site/SitesPage'
import WorkersPage from 'src/pages/Worker/WorkersPage'
import EquipementsPage from '../Equipement/EquipementsPage/EquipementsPage'

const ConfigPage = () => {
  return (
    <>
      <MetaTags title="Config" description="Config page" />
      <CustomersLayout>
        <CustomersPage />
      </CustomersLayout>
      <hr />
      <SitesLayout>
        <SitesPage />
      </SitesLayout>
      <hr />
      <ContainersLayout>
        <ContainersPage />
      </ContainersLayout>
      <hr />
      <MaterialsLayout>
        <MaterialsPage />
      </MaterialsLayout>
      <hr />
      <ServicesLayout>
        <ServicesPage />
      </ServicesLayout>
      <hr />
      <EquipementsLayout>
        <EquipementsPage />
      </EquipementsLayout>
      <WorkersLayout>
        <WorkersPage />
      </WorkersLayout>
    </>
  )
}

export default ConfigPage
