import css from "./Navigation.module.css"


import { Link } from "react-router-dom"


const Navigation = () => {

  return (
      <div className={css.nav}>
         <Link to="/" > <span className={css.link}> Home </span> </Link>
           
         {
            
          <Link to="/catalog" > <span className={css.link}> Catalog  </span></Link>
          }
      </div>
  
  )
}

export default Navigation