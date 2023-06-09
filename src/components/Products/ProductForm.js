import { Form, useNavigate } from "react-router-dom";

import classes from "./ProductForm.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createEditDeleteProduct } from "../../store/cart-actions";

function ProductForm({ method, event }) {
  const dispatch = useDispatch();

  const titleInput = useRef();
  const priceInput = useRef();
  const totalPriceInput = useRef();
  const quantityInput = useRef();
  const id = event?.id;

  const navigate = useNavigate();

  function cancelHandler() {
    navigate("..");
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title: titleInput.current.value,
      price: +priceInput.current.value,
      totalPrice: +totalPriceInput.current.value,
      quantity: +quantityInput.current.value,
    };

    dispatch(createEditDeleteProduct(formData, method, id));
    navigate("/products");
  };
  return (
    <Form onSubmit={onSubmit} method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          ref={titleInput}
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input
          ref={priceInput}
          id="price"
          type="number"
          name="price"
          required
          defaultValue={event ? event.price : ""}
        />
      </p>
      <p>
        <label htmlFor="totalPrice">Total Price</label>
        <input
          ref={totalPriceInput}
          id="totalPrice"
          type="number"
          name="totalPrice"
          required
          defaultValue={event ? event.totalPrice : ""}
        />
      </p>
      <p>
        <label htmlFor="quantity">Quantity</label>
        <input
          ref={quantityInput}
          id="quantity"
          type="number"
          name="quantity"
          defaultValue={event ? event.quantity : ""}
          required
        />
      </p>

      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default ProductForm;
