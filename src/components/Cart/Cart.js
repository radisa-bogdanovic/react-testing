import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const sum = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <div className={classes["cart-container"]}>
        <h2>Your Shopping Cart</h2>
        {cartTotalQuantity < 1 && <p>Your Cart Is Empty!</p>}

        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
        {sum > 0 && <h3>Total Price: ${sum.toFixed(2)}</h3>}
      </div>
    </>
  );
};

export default Cart;
