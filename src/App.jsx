import Layout from "./components/Layout/Layout";

import { lazy, Suspense} from "react";
import { Route, Routes} from "react-router-dom";
import Loader from "./components/Loader/Loader";

const Homepage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CarDetailsPage = lazy(() => import("./pages/CarDetailsPage/CarDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Header = lazy(() => import("./components/Header/Header"));


export default function App() {
  return (

    <>
      <Layout>
        <Suspense fallback={<Loader />}>
        <Header />
          <Routes>

            <Route path="/" element={<Homepage />} > Home </Route> 
            <Route path="/catalog" element={<CatalogPage />}> Catalog </Route>
            <Route path ="/catalog/:id" element={<CarDetailsPage />} > Car </Route>
            <Route path="*" element={<NotFoundPage />} />
            
          </Routes>
        </Suspense> 
       </Layout>
    </>
  );
}
 