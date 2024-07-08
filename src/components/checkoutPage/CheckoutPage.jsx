import styles from "./CheckoutPage.module.css";
import PropTypes from "prop-types";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartItems from "../myCart/CartItems";
import corset from "../../assets/images/silver top.svg";
import kidsStar from "../../assets/images/kids-star.svg";
import lacoste from "../../assets/images/lacoste.svg";
import { MdOutlineEdit } from "react-icons/md";
import { CheckoutBreadCrum } from "../breadCrumb/BreadCrumb";

function CheckoutPage() {
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
                      <Link to="/#">Edit details</Link>
                      <MdOutlineEdit className={styles.editIcon} />
                    </div>
                  </div>
                </div>
              </CheckOutBox>

              <CheckOutBox>
                <div className={styles.options}>
                  <h3>Delivery Options</h3>
                  <div className={styles.optionsDelivery}>
                    <div>
                      <FaRegCheckCircle className={styles.checkIcon} />
                      <span>Door Delivery (1 - 3 days)</span>
                    </div>
                    <div>
                      <FaRegCheckCircle className={styles.checkIcon} />
                      <span>Pick up from store</span>
                    </div>
                  </div>
                </div>
              </CheckOutBox>

              <div className={styles.checkBoxes}>
                <div className={styles.customersItem}>
                  <h3>Items in checkout</h3>
                  <CartItems
                    name="Silver corset top"
                    price="N20,000"
                    img={corset}
                    className={styles.itemsInCart}
                  />
                  <hr className={styles.checkourHr} />
                  <CartItems
                    name="kids star"
                    price="N2,000"
                    img={kidsStar}
                    className={styles.itemsInCart}
                  />
                  <hr className={styles.checkourHr} />
                  <CartItems
                    name="Lacoste designer"
                    price="N20,000"
                    img={lacoste}
                    className={styles.itemsInCart}
                  />
                </div>
                <hr className={styles.checkourHr} />
              </div>

              <CheckOutBox>
                <h3>Payment Options</h3>
                <p>Pay with Cards, Bank Transfer or USSD</p>
              </CheckOutBox>
            </div>

            {/* 2 */}

            <div className={styles.checkOutCard}>
              <CheckOutBox>
                <div className={styles.innerCheckOutCard}>
                  <h3>Order Checkout Details</h3>
                  <div className={styles.itemPrices}>
                    <div className={styles.itemPrice}>
                      <p>Items price (3)</p>
                      <p>N60, 000</p>
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
                      <p>N63, 000</p>
                    </div>
                  </div>

                  <Link to="#/">Confirm order</Link>
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

export default CheckoutPage;

function CheckOutBox({ children }) {
  return <div className={styles.checkBoxes}>{children}</div>;
}

CheckOutBox.propTypes = {
  children: PropTypes.node.isRequired,
};
