import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
      products: [],
      product: null
    },
    reducers: {
        loadProducts (state, action) {
            state.products = action.payload;
        },
        setProduct (state, action) {
            state.product = action.payload;
        },
        resetProduct (state, action) { 
            state.product = null;
        }
    }

});

export const cartActions = productSlice.actions;

export default productSlice;
