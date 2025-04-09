import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Card({ product }) {
  const { addToCart } = useContext(CartContext);
  // .log(product);

  const {
    id = product?.id,
    itemImg = product?.image,
    name = product?.name,
    price = product.price,
    category = product?.category,
  } = product;

  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked((prev) => !prev);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImg}>
        <Link to={`/product/${id}`}>
          <img src={itemImg} alt={name} />
        </Link>
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
          <button onClick={() => addToCart(product, id)}>
            <GrCart className={styles.cardIcon} />
          </button>
        </div>

        <h3>{price}</h3>
        <p>Category: &nbsp; {category}</p>

        <button onClick={() => addToCart(product, id)}>Purchase</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  itemImg: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  product: PropTypes.any,
};
