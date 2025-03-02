// import AppBar from "../AppBar/AppBar"
import { useSelector } from "react-redux";
import CatalogList from "../CatalogList/CatalogList"
import css from "./Layout.module.css"

const Layout = ({children}) => {
  const cars = useSelector(state => state.carsData.cars);
  return (
    <div className={css.container}>
        <CatalogList cars= {cars}/>
        {children}
    </div>
  )
}

export default Layout