import { useDispatch } from 'react-redux';
import classes from './ProductList.module.css';
import { Link } from 'react-router-dom';
import { cartActions } from '../../../store/cart-slice';

function ProductsList( props ) {
  
  const dispatch = useDispatch();
  const {title, price, totalPrice, id } = props;
  
  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id: id,
      price: price,
      quantity: 1,
      totalPrice: totalPrice,
      title: title,
    }))
  }

  return (
    <>
      <li key={id} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>To Cart</button>
          <Link to={id}>
          <button>Product Detail</button>
          </Link>
        </div>
      </div>
    </li>
    </>
  );
}

export default ProductsList;

