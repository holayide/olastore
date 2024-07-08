import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import MyCart from "../components/myCart/MyCart";
import styles from "../components/myCart/MyCart.module.css";

function Cart() {
  return (
    <div className={styles.cartWrapper}>
      <BreadCrumb />
      <MyCart />
    </div>
  );
}

export default Cart;
