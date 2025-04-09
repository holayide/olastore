import { toast } from "react-toastify";
import styles from "./PaymentModal.module.css";
import PropTypes from "prop-types";
import { IoArrowBackCircle } from "react-icons/io5";
import { ImCreditCard } from "react-icons/im";

function PaymentModal({ closeModel }) {
  const confirmOrder = () => {
    toast.success("Confirmed 👍", { autoClose: 1000, hideProgressBar: true });
    setTimeout(() => {
      closeModel(false);
    }, 2000);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
          <div className={styles.head}>
            <div className={styles.headArrow}>
              <IoArrowBackCircle
                className={styles.backIcon}
                onClick={() => closeModel(false)}
              />
            </div>

            <h3>Add Card</h3>
          </div>

          <div className={styles.innerBox}>
            <div className={styles.creditCard}>
              <ImCreditCard className={styles.cardCardIcon} />
              <h4>Credit/Debit</h4>
            </div>
            <div className={styles.form}>
              <div className={styles.formInput}>
                <label htmlFor="cardNo">Card Number</label>
                <input
                  type="text"
                  name="CardNo"
                  id="cardNo"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
              </div>
              <div className={styles.itemForms}>
                <div className={styles.expiry}>
                  <label htmlFor=" Date">Expiry Date</label>
                  <div>
                    <input
                      type="text"
                      name="CardNo"
                      id=" Date"
                      placeholder="mm"
                    />
                    <input
                      type="text"
                      name="CardNo"
                      id=" Date"
                      placeholder="yy"
                    />
                  </div>
                </div>

                <div className={styles.cvc}>
                  <label htmlFor="cvc">CVC</label>
                  <input type="text" name="CVC" id="cvc" placeholder="xxx" />
                </div>
              </div>
              <div className={styles.formInput}>
                <label htmlFor="cardNo">Card Holder Name</label>
                <input
                  type="text"
                  name="CardNo"
                  id="cardNo"
                  placeholder="Full Name"
                />
              </div>
            </div>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="save"
              id="save"
              className={styles.check}
            />
            <label htmlFor="save">Save this card for faster payments.</label>
          </div>

          <button className={styles.payNow} onClick={confirmOrder}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

PaymentModal.propTypes = {
  closeModel: PropTypes.func.isRequired,
};

export default PaymentModal;
