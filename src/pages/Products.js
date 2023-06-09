import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/Products/ProductList/ProductsList";
import { cartActions } from "../store/product-slice";
import { useEffect } from "react";
import { loadProducts } from "../store/cart-actions";


const ProductsPage = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

 
  useEffect(() => {
    const interval = setTimeout(() => {
      dispatch(cartActions.resetProduct());
      dispatch(loadProducts());
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <>
      {products.map((product) => (
        <ProductsList
          key={product.id}
          title={product.title}
          price={product.price}
          totalPrice={product.totalPrice}
          id={product.id}
        />
      ))}
    </>
  );
};

export default ProductsPage;
