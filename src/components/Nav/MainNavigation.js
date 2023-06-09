import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import CartButton from './../Cart/CartButton';

function MainNavigation() {
  return (
    <div className={classes.container}>
      <div className={classes["nav-items"]}>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Products
          </NavLink>
        </div>
        <div className={classes.cart}>
          <CartButton/>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
