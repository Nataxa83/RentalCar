import { Link } from "react-router-dom";
import css from "./CarItem.module.css"

export default function CarItem({cars}) {

  return (
    <div className={css.carItem}>
        <div >
            <div >
              <img
                src={cars.img }
                alt={`${cars.brand} ${cars.model}`}
                className={css.img}
              />
              
            </div>

            <div className={css.carInfo} >
              <div>
                <span className={css.brand}>{cars.brand}</span>
                <span className={css.model}> {cars.model}</span>
                <span className={css.year}>, {cars.year}</span>
              </div>
              <span className={css.price}>${cars.rentalPrice}</span>
            </div>
              <div >
                  <div >
                    <span className={css.city}>
                      {cars.address.split(",")[1]}
                    </span>
                    <span className={css.country}>
                      {cars.address.split(",")[2]}
                    </span>
                    <span className={css.company}>
                      {cars.rentalCompany}
                    </span>
                  </div>

                  <div >
                    <span className={css.carType}>
                      {cars.type}
                    </span>
                    <span className={css.mileage}>
                      {cars.mileage.toLocaleString().replace(/,/g, " ")} km
                    </span>
                  </div>
              </div>
        </div>

            <Link
              to={`/catalog/${cars.id}`}
              className={css.link}>
              Read more
            </Link>
    </div>
  );
}