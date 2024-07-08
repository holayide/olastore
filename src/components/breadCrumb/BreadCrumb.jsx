import styles from "./BreadCrumb.module.css";
import { PiGreaterThanLight } from "react-icons/pi";

export default function BreadCrumb() {
  return (
    <div className="container">
      <div className={styles.breadCrumb}>
        <p>Home</p>
        <PiGreaterThanLight className={styles.breadCrumbIcon} />
        <p>My cart</p>
      </div>
    </div>
  );
}

export function CheckoutBreadCrum() {
  return (
    <div>
      <div className={styles.breadCrumb}>
        <p>Home</p>
        <PiGreaterThanLight className={styles.breadCrumbIcon} />
        <p>My cart</p>
        <PiGreaterThanLight className={styles.breadCrumbIcon} />
        <p>Checkout</p>
      </div>
    </div>
  );
}
