import { Link } from "react-router-dom"
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <main>
      <div className={css.container}>
        <div className={css.heroInfo}>
          <h1 className={css.title}>Find your perfect rental car</h1>

          <p className={css.subTitle}>
            Reliable and budget-friendly rentals for any journey
          </p>

          <Link to="/catalog" className={css.link}>View Catalog</Link>
        </div>
      </div>
    </main>
  )
}

export default HomePage