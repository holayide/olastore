import styles from "./MyCart.module.css";
import { RiDeleteBin7Line } from "react-icons/ri";
import CartItems from "./CartItems";
import corset from "../../assets/images/silver top.webp";
import { OrderCheck } from "./OrderCheck";
import kidsStar from "../../assets/images/kids-star.webp";
import lacoste from "../../assets/images/lacoste.webp";

export default function MyCart() {
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
                <h4>Empty cart</h4>
              </div>
            </div>

            <CartItems name="Silver corset top" price="N20,000" img={corset} />
            <CartItems name="kids star" price="N2,000" img={kidsStar} />
            <CartItems name="Lacoste designer" price="N20,000" img={lacoste} />
          </div>

          <div className={styles.cartDetails}>
            <OrderCheck />
          </div>
        </div>
      </div>
    </div>
  );
}
