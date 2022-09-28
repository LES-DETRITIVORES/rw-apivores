// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import UsagersLayout from 'src/layouts/UsagersLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={UsagersLayout}>
        <Route path="/usagers/new" page={UsagerNewUsagerPage} name="newUsager" />
        <Route path="/usagers/{id:Int}/edit" page={UsagerEditUsagerPage} name="editUsager" />
        <Route path="/usagers/{id:Int}" page={UsagerUsagerPage} name="usager" />
        <Route path="/usagers" page={UsagerUsagersPage} name="usagers" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
