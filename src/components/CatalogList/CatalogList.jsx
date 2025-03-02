import CarItem from "../CarItem/CarItem";

import css from "./CatalogList.module.css"


export default function CatalogList({cars}) {
  

return (
  
  <ul className={css.catalogList}>
    {cars.map(car => (
      <li key={car.id}>
        <CarItem cars={car} />
      </li>
    ))}

   
  </ul>
)
 }
