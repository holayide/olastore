import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./OrderCheck.module.css";

export function OrderCheck({ total }) {
  return (
    <div className={styles.orderCheck}>
      <h3>Order Checkout Details</h3>
      <div className={styles.subtotalOrder}>
        <p>Subtotal</p>
        <p>{`N ${total}`}</p>
      </div>
      <p>Delivery fees will be added at checkout.</p>
      <Link to="/checkout">Proceed to checkout</Link>
      <p>
        Return Policy: &nbsp; Return within 3 days for all items. Read more on
        our return policy <Link to="#/">here</Link>.
      </p>
    </div>
  );
}

OrderCheck.propTypes = {
  total: PropTypes.number,
};

export default OrderCheck;
