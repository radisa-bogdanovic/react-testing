import { Outlet } from "react-router-dom";
import ProductsNavigation from "../components/Nav/ProductsNavigation";

const ProductsRootPage = () => {
  return (
    <>
      <ProductsNavigation />
      <Outlet />
    </>
  );
};

export default ProductsRootPage;
