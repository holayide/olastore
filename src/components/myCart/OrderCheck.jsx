import { Link } from "react-router-dom";
import styles from "./OrderCheck.module.css";

export function OrderCheck() {
  return (
    <div className={styles.orderCheck}>
      <h3>Order Checkout Details</h3>
      <div className={styles.subtotalOrder}>
        <p>Subtotal</p>
        <p>N42, 000</p>
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

export default OrderCheck;
