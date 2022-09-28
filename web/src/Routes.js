// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/inventaires" page={InventairePage} name="inventaire" />
      <Route path="/agents" page={AgentPage} name="agent" />
      <Route path="/vehicules" page={VehiculePage} name="vehicule" />
      <Route path="/materiels" page={MaterielPage} name="materiel" />
      <Route path="/matieres" page={MatierePage} name="matiere" />
      <Route path="/tarifs" page={TarifPage} name="tarif" />
      <Route path="/partenaires/contacts" page={ContactPage} name="contact" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
