import { Link } from "react-router-dom"
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={css.homePage}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.subTitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={css.btn} type="button">
          <Link to="/catalog">View Catalog</Link>
        </button>
    </div>
  )
}

export default HomePage