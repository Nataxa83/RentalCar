import Layout from "./components/Layout/Layout";

import { lazy, Suspense} from "react";
import { Route, Routes} from "react-router-dom";
import Loader from "./components/Loader/Loader";

const Homepage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CarPage = lazy(() => import("./pages/CarPage/CarPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Header = lazy(() => import("./components/Header/Header"));


export default function App() {
  console.log("Компонент App отрендерился! ✅"); 
  return (

    <>
      <Layout>
        <Suspense fallback={<Loader />}>
        <Header />
          <Routes>

            <Route path="/" element={<Homepage />} > Home </Route> 
            <Route path="/catalog" element={<CatalogPage />}> Catalog </Route>
            <Route path ="/catalog/:id" element={<CarPage />} > Car </Route>
            <Route path="*" element={<NotFoundPage />} />
            
          </Routes>
        </Suspense> 
       </Layout>
    </>
  );
}
 