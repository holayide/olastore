import styles from "./MyCart.module.css";
import { RiDeleteBin7Line } from "react-icons/ri";
import CartItems from "./CartItems";
import { OrderCheck } from "./OrderCheck";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

export default function MyCart() {
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div className={"container"}>
      <div className={styles.mycart}>
        <h2>My Cart</h2>
        <div className={styles.boxes}>
          <div className={styles.cartItemsHeader}>
            <div className={styles.cartHeader}>
              <h4>Cart (3 items)</h4>
              <div className={styles.emptyCart}>
                <RiDeleteBin7Line className={styles.whiteBin} />
                <h4 onClick={() => clearCart()}>Empty cart</h4>
              </div>
            </div>

            {cart.length === 0 ? (
              <h1>Your cart is empty 🛒</h1>
            ) : (
              cart.map((item) => <CartItems key={item.id} item={item} />)
            )}
          </div>

          <div className={styles.cartDetails}>
            <OrderCheck total={total} />
          </div>
        </div>
      </div>
    </div>
  );
}
