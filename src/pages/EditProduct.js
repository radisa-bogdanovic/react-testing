import ProductForm from "../components/Products/ProductForm";

import { useSelector } from "react-redux";


const EditProductPage = () => {
    const product = useSelector((state) => state.products.product);
  
    return <>
     <ProductForm event={product} method={'PATCH'} />
    </>
}

export default EditProductPage;