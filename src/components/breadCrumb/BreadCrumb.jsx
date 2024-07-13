import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./BreadCrumb.module.css";
import { PiGreaterThanLight } from "react-icons/pi";

export default function BreadCrumb() {
  return (
    <div className="container">
      <div className={styles.breadCrumb}>
        <Link to="/">Home</Link>
        <PiGreaterThanLight className={styles.breadCrumbIcon} />
        <Link to="/cart">My cart</Link>
      </div>
    </div>
  );
}

export function CheckoutBreadCrum() {
  return (
    <div>
      <div className={styles.breadCrumb}>
        <Link to="/">Home</Link>
        <PiGreaterThanLight className={styles.breadCrumbIcon} />
        <Link to="/cart">My cart</Link>
        <PiGreaterThanLight className={styles.breadCrumbIcon} />
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
}

export function ItemBreadCrum({ product }) {
  return (
    <div className="container">
      <div className={styles.breadCrumb}>
        <Link to="/">Home</Link>
        <PiGreaterThanLight className={styles.breadCrumbIcon} />
        <Link to="#/">{product?.name}</Link>
      </div>
    </div>
  );
}

ItemBreadCrum.propTypes = {
  product: PropTypes.any,
};
