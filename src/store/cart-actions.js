import { cartActions } from "./product-slice";

export const loadProducts = () => {
  return async (dispatch) => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8080/events");

      if (!response.ok) {
        throw new Error("Could not fetch products data!");
      }

      const products = await response.json();
      return products;
    };

    try {
      const productData = await fetchProducts();
      dispatch(cartActions.loadProducts(productData.events));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setProduct = (id) => {
  return async (dispatch) => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:8080/events/${id}`);

      if (!response) {
        throw new Error("Could not set product details");
      }
      const product = await response.json();
      return product;
    };

    try {
      const productData = await fetchProduct();
      dispatch(cartActions.setProduct(productData.event));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createEditDeleteProduct = (product, method, id) => {
  return async () => {
    const saveEditDeleteProduct = async () => {
      let url = "http://localhost:8080/events";

      if (method === "PATCH" || method === 'DELETE') {
        url = `http://localhost:8080/events/${id}`;
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: product ? JSON.stringify(product) : null,
      });

      if (!response) {
        throw new Error("Could not save product!");
      }
    };

    try {
      await saveEditDeleteProduct();
    } catch (error) {
      console.log(error);
    }
  };
};

