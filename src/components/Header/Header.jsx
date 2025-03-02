import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import css from "./Header.module.css"

const Header = () => {
 
  return (
    <header>
      <div className={css.header}>
          <Logo />
          <Navigation />
      </div>
    </header>
  )
}

export default Header