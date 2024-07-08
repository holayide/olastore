import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";

export default function Card({ itemImg, name, price, category }) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked((prev) => !prev);
  };

  const handleCartClick = () => {
    setIsCartClicked((prev) => !prev);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImg}>
        <img src={itemImg} alt={name} />
        <div className={styles.heartWrapper} onClick={handleHeartClick}>
          {isHeartClicked ? (
            <IoMdHeart className={`${styles.heartIcon}  ${styles.fillHeart}`} />
          ) : (
            <IoMdHeartEmpty
              className={`${styles.heartIcon} ${styles.emptyHeart} `}
            />
          )}
        </div>
      </div>
      <div className={styles.cardTextWrapper}>
        <div className={styles.cardText}>
          <p>{name}</p>
          <button onClick={handleCartClick}>
            {isCartClicked ? (
              <FaShoppingCart
                className={`${styles.cardIcon} ${styles.filledCardIcon}`}
              />
            ) : (
              <GrCart className={styles.cardIcon} />
            )}
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
