import PropTypes from "prop-types";
import { RiDeleteBin7Line } from "react-icons/ri";
import styles from "./CartItems.module.css";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export default function CartItems({ name, price, img, className }) {
  return (
    <div className={`${styles.cartItems} ${{ className }}`}>
      <div className={styles.cartItem}>
        <div className={styles.cartItemImg}>
          <img src={img} alt={name} />
        </div>
        <div className={styles.cartItemDetails}>
          <p>{name}</p>
          <h3>{price}</h3>
          <div className={styles.cartItemBtn}>
            <button className={styles.whiteBtn}>
              <FiMinus className={styles.sign} />
            </button>
            <span>1</span>
            <button className={styles.greenBtn}>
              <FiPlus className={styles.sign} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.redEmptyBin}>
        <RiDeleteBin7Line className={styles.redBin} />
        <p>Remove from cart</p>
      </div>
    </div>
  );
}

CartItems.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
  className: PropTypes.string,
};
