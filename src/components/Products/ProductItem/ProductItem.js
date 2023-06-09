import { useDispatch } from 'react-redux';
import classes from './ProductItem.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { createEditDeleteProduct } from '../../../store/cart-actions';



function ProductsItem( props ) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {title, price, totalPrice, id, method } = props;

  const deleteProduct = () => {
    dispatch(createEditDeleteProduct(props, method, id));
    navigate('/products');
  }

  return (
    <>
      <li key={id} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice?.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price?.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.actions}>
          <button onClick={deleteProduct}>Delete Product</button>
          <Link to={'edit'}>
          <button>Edit Product</button>
          </Link>
        </div>
      </div>
    </li>
    </>
  );
}

export default ProductsItem;
