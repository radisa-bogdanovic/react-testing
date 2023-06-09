import classes from './ProductsNavigation.module.css';
import { Link } from 'react-router-dom';

function ProductsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="">All Products</Link>
          </li>
          <li>
          <Link to="new">New Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ProductsNavigation;
