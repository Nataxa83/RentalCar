// import Layout from "./components/Layout/Layout";

// import { useDispatch, useSelector } from "react-redux";
// import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// const Homepage = lazy(() => import("./pages/HomePage/HomePage"));
// const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
// const CarPage = lazy(() => import("./pages/CarPage/CarPage"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));


import Homepage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarPage from "./pages/CarPage/CarPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {

  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch]);

  // if (isRefreshing) {
  //   return <div>Loading...</div>;
  // }
   
  return (
    <>
      {/* <Layout>
        <Suspense fallback={<div>Loading...</div>}> */}
          <BrowserRouter>
          <Routes>

            <Route path="/" element={<Homepage />} > Home </Route> 
            <Route path="/catalog" element={<CatalogPage />}> Catalog </Route>
            <Route path ="/catalog/:id" element={<CarPage />} > Car </Route>
            <Route path="*" element={<NotFoundPage />} />
            
          </Routes>
          </BrowserRouter>
        {/* </Suspense> */}
      {/* </Layout> */}
    </>
  );
}
 