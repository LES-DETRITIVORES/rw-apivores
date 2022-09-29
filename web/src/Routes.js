// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import OperationsLayout from 'src/layouts/OperationsLayout'

import PrestationsLayout from 'src/layouts/PrestationsLayout'

import MainLayout from './layouts/MainLayout/MainLayout'

import InventairesLayout from 'src/layouts/InventairesLayout'

import ContactsLayout from 'src/layouts/ContactsLayout'

import SitesLayout from 'src/layouts/SitesLayout'

import UsagersLayout from 'src/layouts/UsagersLayout'

import OperateursLayout from 'src/layouts/OperateursLayout'

import VehiculesLayout from 'src/layouts/VehiculesLayout'

import MaterielsLayout from 'src/layouts/MaterielsLayout'

import MatieresLayout from 'src/layouts/MatieresLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={OperationsLayout}>
        <Route path="/operations/new" page={OperationNewOperationPage} name="newOperation" />
        <Route path="/operations/{id:Int}/edit" page={OperationEditOperationPage} name="editOperation" />
        <Route path="/operations/{id:Int}" page={OperationOperationPage} name="operation" />
        <Route path="/operations" page={OperationOperationsPage} name="operations" />
      </Set>
      <Set wrap={PrestationsLayout}>
        <Route path="/prestations/new" page={PrestationNewPrestationPage} name="newPrestation" />
        <Route path="/prestations/{id:Int}/edit" page={PrestationEditPrestationPage} name="editPrestation" />
        <Route path="/prestations/{id:Int}" page={PrestationPrestationPage} name="prestation" />
        <Route path="/prestations" page={PrestationPrestationsPage} name="prestations" />
      </Set>
      <Set wrap={MainLayout}>
        <Set wrap={InventairesLayout}>
          <Route path="/inventaires/new" page={InventaireNewInventairePage} name="newInventaire" />
          <Route path="/inventaires/{id:Int}/edit" page={InventaireEditInventairePage} name="editInventaire" />
          <Route path="/inventaires/{id:Int}" page={InventaireInventairePage} name="inventaire" />
          <Route path="/inventaires" page={InventaireInventairesPage} name="inventaires" />
        </Set>
        <Set wrap={ContactsLayout}>
          <Route path="/contacts/new" page={ContactNewContactPage} name="newContact" />
          <Route path="/contacts/{id:Int}/edit" page={ContactEditContactPage} name="editContact" />
          <Route path="/contacts/{id:Int}" page={ContactContactPage} name="contact" />
          <Route path="/contacts" page={ContactContactsPage} name="contacts" />
        </Set>
        <Set wrap={SitesLayout}>
          <Route path="/sites/new" page={SiteNewSitePage} name="newSite" />
          <Route path="/sites/{id:Int}/edit" page={SiteEditSitePage} name="editSite" />
          <Route path="/sites/{id:Int}" page={SiteSitePage} name="site" />
          <Route path="/sites" page={SiteSitesPage} name="sites" />
        </Set>
        <Set wrap={UsagersLayout}>
          <Route path="/usagers/new" page={UsagerNewUsagerPage} name="newUsager" />
          <Route path="/usagers/{id:Int}/edit" page={UsagerEditUsagerPage} name="editUsager" />
          <Route path="/usagers/{id:Int}" page={UsagerUsagerPage} name="usager" />
          <Route path="/usagers" page={UsagerUsagersPage} name="usagers" />
        </Set>
        <Set wrap={OperateursLayout}>
          <Route path="/operateurs/new" page={OperateurNewOperateurPage} name="newOperateur" />
          <Route path="/operateurs/{id:Int}/edit" page={OperateurEditOperateurPage} name="editOperateur" />
          <Route path="/operateurs/{id:Int}" page={OperateurOperateurPage} name="operateur" />
          <Route path="/operateurs" page={OperateurOperateursPage} name="operateurs" />
        </Set>
        <Set wrap={VehiculesLayout}>
          <Route path="/vehicules/new" page={VehiculeNewVehiculePage} name="newVehicule" />
          <Route path="/vehicules/{id:Int}/edit" page={VehiculeEditVehiculePage} name="editVehicule" />
          <Route path="/vehicules/{id:Int}" page={VehiculeVehiculePage} name="vehicule" />
          <Route path="/vehicules" page={VehiculeVehiculesPage} name="vehicules" />
        </Set>
        <Set wrap={MaterielsLayout}>
          <Route path="/materiels/new" page={MaterielNewMaterielPage} name="newMateriel" />
          <Route path="/materiels/{id:Int}/edit" page={MaterielEditMaterielPage} name="editMateriel" />
          <Route path="/materiels/{id:Int}" page={MaterielMaterielPage} name="materiel" />
          <Route path="/materiels" page={MaterielMaterielsPage} name="materiels" />
        </Set>
        <Set wrap={MatieresLayout}>
          <Route path="/matieres/new" page={MatiereNewMatierePage} name="newMatiere" />
          <Route path="/matieres/{id:Int}/edit" page={MatiereEditMatierePage} name="editMatiere" />
          <Route path="/matieres/{id:Int}" page={MatiereMatierePage} name="matiere" />
          <Route path="/matieres" page={MatiereMatieresPage} name="matieres" />
        </Set>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
