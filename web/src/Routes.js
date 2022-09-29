// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import VehiculesLayout from 'src/layouts/VehiculesLayout'

import MaterielsLayout from 'src/layouts/MaterielsLayout'

import MatieresLayout from 'src/layouts/MatieresLayout'

const Routes = () => {
  return (
    <Router>
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
    </Router>
  )
}

export default Routes
