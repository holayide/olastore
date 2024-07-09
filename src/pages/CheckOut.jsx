import CheckoutPage from "../components/checkoutPage/CheckoutPage";
import styles from "../components/checkoutPage/CheckoutPage.module.css";
import Footer from "../components/footer/Footer";

function CheckOut() {
  return (
    <div className={styles.checkoutWrapper}>
      <CheckoutPage />
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}

export default CheckOut;
