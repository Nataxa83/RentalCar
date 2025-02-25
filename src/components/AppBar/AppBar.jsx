import CatalogList from "../CatalogList/CatalogList"
import Navigation from "../Navigation/Navigation"

import css from "./AppBar.module.css"

const AppBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Navigation /> 
        <CatalogList/>
      </nav>
    </header>
  )
}

export default AppBar