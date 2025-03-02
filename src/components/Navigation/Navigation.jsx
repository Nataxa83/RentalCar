import css from "./Navigation.module.css"
import clsx from "clsx"
import { NavLink } from "react-router-dom"


const isActiveClass = ({ isActive }) => 
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
      <nav className={css.nav}>
         <ul className={css.navList}>
            <li>
              <NavLink className={isActiveClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={isActiveClass} to="/catalog">
                Catalog
              </NavLink>
            </li>
          </ul>
      </nav>
  )
}

export default Navigation