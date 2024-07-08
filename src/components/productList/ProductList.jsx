import styles from "./ProductList.module.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { products } from "../../utilities/Products";
import Display from "./Display";

function ProductList() {
  return (
    <section className={styles.productlistSection}>
      <div className={"container"}>
        <div className={styles.innerProductListSection}>
          <h1>Find your next obsession</h1>

          <div className={styles.productSlider}>
            {products.map((product) => (
              <Display
                key={product.id}
                productImg={product.productImg}
                productname={product.productname}
              />
            ))}

            <div className={`${styles.displayIcons} ${styles.displayIcon1}`}>
              <div className={styles.displayIconWrapper}>
                <GrPrevious className={styles.displayIcon} />
              </div>
            </div>

            <div className={`${styles.displayIcons} ${styles.displayIcon2}`}>
              <div className={styles.displayIconWrapper}>
                <GrNext className={styles.displayIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
    </section>
  );
}

export default ProductList;
