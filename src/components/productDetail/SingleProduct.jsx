import style from "./SingleProduct.module.css";
import PropTypes from "prop-types";
import { IoStarOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function SingleProduct({ product }) {
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return null;
  }
  const price = product?.price
    ? parseFloat(product?.price)
    : "Price not available";
  const id = product.id;

  return (
    <div className="container">
      <div className={style.productdisplay}>
        <div className={style.productdisplayLeft}>
          <div className={style.productDisplayImgList}>
            <img src={product?.image} alt={product?.name} />
            <img src={product?.image} alt={product?.name} />
            <img src={product?.image} alt={product?.name} />
            <img src={product?.image} alt={product?.name} />
          </div>
          <div className={style.productdisplayImg}>
            <img
              onClick={window.scrollTo(0, 0)}
              className="productdisplay-main-img"
              src={product?.image}
              alt="Bigger view"
              loading="lazy"
            />
          </div>
        </div>

        <div className={style.productdisplayRight}>
          <h1>{product?.name}</h1>
          <div className={style.stars}>
            <FaStar className={style.star} />
            <FaStar className={style.star} />
            <FaStar className={style.star} />
            <FaStar className={style.star} />
            <IoStarOutline className={style.star} />
          </div>
          <p>₦ {price}</p>
          <div className={style.description}>
            Indulge in our curated collection: chic clothing, elegant jewelry,
            luxurious beauty, and essential grooming for all.
          </div>
          <div className={style.productdisplayRightSize}>
            <h3>Select Size</h3>
            <div className={style.productdisplayRightSizes}>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button
            className={style.detailBtn}
            onClick={() => addToCart(product, id)}
          >
            Add to Cart
          </button>
          <div className={style.minitags}>
            <p>
              Category: &nbsp; <span>{product?.description}</span>
            </p>
            <p>
              Tags: &nbsp; <span>Mordern Lastest</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

SingleProduct.propTypes = {
  product: PropTypes.any,
};

export default SingleProduct;
