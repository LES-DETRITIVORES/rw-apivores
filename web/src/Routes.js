// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import MatieresLayout from 'src/layouts/MatieresLayout'

const Routes = () => {
  return (
    <Router>
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
