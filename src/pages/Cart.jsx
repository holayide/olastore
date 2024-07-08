import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import MyCart from "../components/myCart/MyCart";
import styles from "../components/myCart/MyCart.module.css";
import Footer from "../components/footer/Footer";

function Cart() {
  return (
    <div className={styles.cartWrapper}>
      <BreadCrumb />
      <MyCart />
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
