import PropTypes from "prop-types";
// import { toast, Bounce } from "react-toastify";
import { RiDeleteBin7Line } from "react-icons/ri";
import styles from "./CartItems.module.css";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function CartItems({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const {
    id = item?.id,
    itemImg = item?.photos[0]?.url,
    name = item?.name,
    price = item.current_price[0]?.["NGN"]?.[0],
    amount,
    // category = item?.category,
  } = item;

  return (
    <div className={`${styles.cartItems}`}>
      <div className={styles.cartItem}>
        <div className={styles.cartItemImg}>
          <img src={`https://api.timbu.cloud/images/${itemImg}`} alt={name} />
        </div>
        <div className={styles.cartItemDetails}>
          <p>{name}</p>
          <h3>{price * amount}</h3>
          <div className={styles.cartItemBtn}>
            <button
              className={styles.whiteBtn}
              onClick={() => decreaseAmount(id)}
            >
              <FiMinus className={styles.sign} />
            </button>
            <span>{amount}</span>
            <button
              className={styles.greenBtn}
              onClick={() => increaseAmount(id)}
            >
              <FiPlus className={styles.sign} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.redEmptyBin} onClick={() => removeFromCart(id)}>
        <RiDeleteBin7Line className={styles.redBin} />
        <p>Remove from cart</p>
      </div>
    </div>
  );
}

CartItems.propTypes = {
  item: PropTypes.any,
  name: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
  className: PropTypes.string,
};

// { name, price, img, className }
