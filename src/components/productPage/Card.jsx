import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { GrCart } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";

export default function Card({ itemImg, name, price, category }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImg}>
        <img src={itemImg} alt={name} />
        <div className={styles.heartWrapper}>
          <IoMdHeartEmpty className={styles.heartIcon} />
        </div>
      </div>
      <div className={styles.cardTextWrapper}>
        <div className={styles.cardText}>
          <p>{name}</p>
          <button>
            <GrCart className={styles.cardIcon} />
          </button>
        </div>

        <h3>{price}</h3>
        <p>Category: &nbsp; {category}</p>

        <button>Purchase</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  itemImg: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
};
