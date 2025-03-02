import CatalogList from "../../components/CatalogList/CatalogList"
import Loader from "../../components/Loader/Loader"
import Error from "../../components/Error/Error"

import { useDispatch, useSelector } from "react-redux";
import { fetchCars, fetchMoreCars } from "../../redux/cars/operations";
import { useEffect, useState } from "react";
import { selectCars, selectTotalPages, selectLoading, selectError } from "../../redux/cars/selectors";

import css from "./CatalogPage.module.css"

const CatalogPage = () => {

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

 
  useEffect(() => {
    dispatch(fetchCars()); 
  }, [dispatch]);
  
  const cars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (page > 1) {
      dispatch(fetchMoreCars({  page: page }));
    }
  }, [dispatch, page]);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div>
        <div className={css.catalog}>
          {Array.isArray(cars) && cars.length > 0 ? ( <CatalogList cars={cars} />) : (<p>No cars found</p>)}
          
        </div>

          {page !== totalPages && totalPages !== 0 && (
            <button
              type="submit"
              className={css.loadMore}
              onClick={handleLoadMore}>
              Load more
            </button>
          )}
    </div>
 );
};

export default CatalogPage