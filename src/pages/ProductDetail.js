import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setProduct } from "../store/cart-actions";
import ProductItem from "./../components/Products/ProductItem/ProductItem";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(setProduct(params.id));
    }, [dispatch, params.id]);

  return (
    <>
      <ProductItem
        method={"DELETE"}
        title={product?.title}
        price={product?.price}
        totalPrice={product?.totalPrice}
        id={product?.id}
      />
    </>
  );
};

export default ProductDetailPage;
