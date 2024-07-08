import styles from "./ProductList.module.css";

export default function Display(product) {
  const { productImg, productname } = product;
  return (
    <div className={styles.displayItemsWrapper}>
      <div className={styles.displayWrapper}>
        <div className={styles.imgContainer}>
          <img src={productImg} alt={productname} />
        </div>
        <p>{productname}</p>
      </div>
    </div>
  );
}
