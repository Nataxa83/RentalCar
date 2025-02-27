import { Link } from "react-router-dom"
import css from "./Logo.module.css"
import sprite from "../../images/sprite.svg";


const Logo = () => {
    const iconLogo = "iconLogo";
    return (
    <div>
        <Link to="/">
        <svg className={css.logo} >
            <use href = {`${sprite}#${iconLogo}` } /> 
        </svg>
        </Link>
    </div>
  )
}

export default Logo