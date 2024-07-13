import { useState } from "react";
import CheckoutPage from "../components/checkoutPage/CheckoutPage";
import styles from "../components/checkoutPage/CheckoutPage.module.css";
import Footer from "../components/footer/Footer";
import PaymentModal from "../components/checkoutPage/PaymentModal";

function CheckOut() {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(() => !modal);
  }

  return (
    <div className={styles.checkoutWrapper}>
      <CheckoutPage onClick={handleModal} />
      {modal && <PaymentModal closeModel={setModal} />}
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}

export default CheckOut;
