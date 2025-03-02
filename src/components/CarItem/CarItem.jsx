import { Link } from "react-router-dom";

export default function CarItem({cars}) {



  return (
    <div >
    <div>
      <div >
        <img
          src={cars.img }
          alt={`${cars.brand} ${cars.model}`}
          
        />
        
      </div>
      <div >
        <div>
          <span>{cars.brand}</span>
          <span > {cars.model}</span>
          <span>, {cars.year}</span>
        </div>
        <span>${cars.rentalPrice}</span>
      </div>
      <div >
        <div >
          <span >
            {cars.address.split(",")[1]}
          </span>
          <span >
            {cars.address.split(",")[2]}
          </span>
          <span >
            {cars.rentalCompany}
          </span>
        </div>
        <div >
          <span >
            {cars.type}
          </span>
          <span>
            {cars.mileage.toLocaleString().replace(/,/g, " ")} km
          </span>
        </div>
      </div>
    </div>
    <Link
      to={`/catalog/${cars.id}`}>
      Read more
    </Link>
  </div>
  );
}