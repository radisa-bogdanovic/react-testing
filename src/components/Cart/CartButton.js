import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { Link } from 'react-router-dom';

const CartButton = (props) => {
    const cartQuantity = useSelector(state => state.cart.totalQuantity);

    return (
        <button className={classes.button}>
            <Link to='cart' className={classes.cart} >My Cart</Link>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    )
}

export default CartButton;