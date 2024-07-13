import styles from "./CheckoutPage.module.css";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CartItems from "../myCart/CartItems";
import { MdOutlineEdit } from "react-icons/md";
import { CheckoutBreadCrum } from "../breadCrumb/BreadCrumb";
import DeliveryOptions from "./DeliveryOptions";

function CheckoutPage({ onClick }) {
  const { cart, total } = useContext(CartContext);
  const totalCost = total + 3000;

  return (
    <div className={styles.checkOutSection}>
      <div className="container">
        <div className={styles.checkoutpage}>
          <div className={styles.crum}>
            <CheckoutBreadCrum />
          </div>
          <h2>Checkout</h2>
          <div className={styles.checkoutsSection}>
            <div className={styles.customerCheckoutsSection}>
              {/* Customer Details */}
              <CheckOutBox>
                <div className={styles.customerDetails}>
                  <h3>Customer Details</h3>
                  <div className={styles.innercustomerDetail}>
                    <div className={styles.customerInfo}>
                      <p>
                        <span>Recepient</span>Alabi Olaide
                      </p>
                      <p>
                        <span>Phone</span>+23470 2122 1211
                      </p>
                      <p>
                        <span>Address</span>Lekki flood street, Lekki, Lagos,
                        Nigeria
                      </p>
                    </div>

                    <div className={styles.editDetails}>
                      <Link to="#/">Edit details</Link>
                      <MdOutlineEdit className={styles.editIcon} />
                    </div>
                  </div>
                </div>
              </CheckOutBox>

              {/* Delivery Options */}
              <CheckOutBox>
                <div className={styles.options}>
                  <h3>Delivery Options</h3>
                  <DeliveryOptions />
                </div>
              </CheckOutBox>

              {/* Items in checkout */}
              <div className={styles.checkBoxes}>
                <div className={styles.customersItem}>
                  <h3>Items in checkout</h3>

                  {cart.map((item, i) => {
                    return (
                      <div key={`${item.unique_id}-${i}`}>
                        <CartItems item={item} />
                        <hr className={styles.checkourHr} />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Payment Options */}
              <CheckOutBox>
                <div className={styles.paymentOption}>
                  <h3>Payment Options</h3>
                  <Link to="#/">Change</Link>
                </div>

                <p>Pay with Cards, Bank Transfer or USSD</p>
              </CheckOutBox>
            </div>

            {/* 2 - Order Checkout Details */}
            <div className={styles.checkOutCard}>
              <CheckOutBox>
                <div className={styles.innerCheckOutCard}>
                  <h3>Order Checkout Details</h3>
                  <div className={styles.itemPrices}>
                    <div className={styles.itemPrice}>
                      <p>Items price (3)</p>
                      <p>N {total}</p>
                    </div>

                    <div className={styles.itemPrice}>
                      <p>Delivery fee</p>
                      <p>N2, 000</p>
                    </div>

                    <div className={styles.itemPrice}>
                      <p>VAT</p>
                      <p>N1, 000</p>
                    </div>

                    <div className={styles.itemPrice}>
                      <p>Total cost</p>
                      <p>N {totalCost}</p>
                    </div>
                  </div>

                  <button className={styles.btn} onClick={onClick}>
                    Confirm order
                  </button>
                  <p>
                    Return Policy: &nbsp; Return within 3 days for all items.
                    Read more on our return policy <Link to="#/">here</Link>.
                  </p>
                </div>
              </CheckOutBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CheckoutPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CheckoutPage;

function CheckOutBox({ children }) {
  return <div className={styles.checkBoxes}>{children}</div>;
}

CheckOutBox.propTypes = {
  children: PropTypes.node.isRequired,
};
