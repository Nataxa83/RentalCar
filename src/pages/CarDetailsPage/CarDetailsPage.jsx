import css from "./CarDetailsPage.module.css"
import ContactsForm from "../../components/ContactsForm/ContactsForm"
import CarsDetailsForm from "../../components/CarsDetailsForm/CarsDetailsForm"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCarById } from "../../redux/cars/operations";
import { selectCarById, selectError } from "../../redux/cars/selectors";

import Loader from "../../components/Loader/Loader"
import Error from "../../components/Error/Error"

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(state => selectCarById(state, id));
  const loading = useSelector(state => state.carsData.loading);
  const error = useSelector(selectError);

  useEffect(() => {
      if (!car) {
          dispatch(fetchCarById(id)); 
      }
  }, [dispatch, id, car]);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div>
     
        <div >
           <img
              src={car?.img }
              alt={`${car?.brand} ${car?.model}`}
              className={css.img}
            />
         </div>

         <ContactsForm />

         <CarsDetailsForm />
    </div>
  )
}

export default CarDetailsPage