import styles from "./ProductItems.module.css";
import Card from "./Card";
import { HiArrowUp } from "react-icons/hi";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Loader from "../loader/Loader";

export default function ProductItems() {
  const { products, loading } = useContext(ProductContext);

  return (
    <div className={styles.cardsWrapper}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.cardsWrapperCard}>
          {products.map((data, i) => (
            <Card key={i} product={data} />
          ))}
        </div>
      )}

      <div className={styles.moveUp} onClick={() => window.scrollTo(0, 0)}>
        <HiArrowUp className={styles.arrowUp} />
      </div>
    </div>
  );
}

{
  /* <Card
key={data.unique_id}
id={data.id}
itemImg={data.photos[0].url}
name={data.name}
price={data.current_price[0]["NGN"][0]}
category={data.category}
/> */
}
