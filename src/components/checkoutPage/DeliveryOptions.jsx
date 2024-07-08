import { useState } from "react";
import styles from "./CheckoutPage.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

function DeliveryOptions() {
  const [showCheck, setShowCheck] = useState(false);
  const [showStoreAddress, setShowStoreAddress] = useState(false);

  const handleShowClick = () => {
    setShowCheck((show) => !show);
  };

  const handleShowStoreAddress = () => {
    setShowStoreAddress((show) => !show);
  };

  return (
    <div className={styles.optionsDelivery}>
      <div className={styles.doorDelivery}>
        <div onClick={handleShowClick}>
          {showCheck ? (
            <FaCircleCheck
              className={`${styles.checkIcon} ${styles.fullCheckIcon}`}
            />
          ) : (
            <FaRegCheckCircle className={styles.checkIcon} />
          )}
          <span>Door Delivery (1 - 3 days)</span>
        </div>

        <div
          className={`${styles.deliveryInfos} ${
            showCheck ? styles.show : styles.hide
          }`}
        >
          <p>
            <span>Recepient</span>Alabi Olaide
          </p>
          <p>
            <span>Phone</span>+23470 2122 1211
          </p>
          <p>
            <span>Address</span>Lekki flood street, Lekki, Lagos, Nigeria
          </p>
        </div>
      </div>

      {/* 2 */}
      <div>
        <div onClick={handleShowStoreAddress}>
          {showStoreAddress ? (
            <FaCircleCheck
              className={`${styles.checkIcon} ${styles.fullCheckIcon}`}
            />
          ) : (
            <FaRegCheckCircle className={styles.checkIcon} />
          )}
          <span>Pick up from store</span>
        </div>

        <div className={showStoreAddress ? styles.show : styles.hide}>
          <p>
            Visit our store at No 3 HNG Interns ave, Lekki flood street, Lekki,
            Lagos, Nigeria with your order ID
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions;
