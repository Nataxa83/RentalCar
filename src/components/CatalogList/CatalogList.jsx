import CarItem from "../CarItem/CarItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { useEffect } from "react";
import { selectCars } from "../../redux/cars/selectors";
import css from "../CatalogList/CatalogList.module.css"


export default function CatalogList() {
  const dispatch = useDispatch();
  const data = useSelector(selectCars);
  const loading = useSelector((state) => state.carsData.loading);
  const error = useSelector((state) => state.carsData.error);

  useEffect(() => {
    console.log("Список машин:", data);
  }, [data]);
  useEffect(() => {
   
    console.log("Fetching cars...");
    dispatch(fetchCars()); // Загружаем данные при монтировании
  }, [dispatch]);
  
  const cars = data?.cars || [];

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  if (cars.length===0) return <p>Нет машин</p>;

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
