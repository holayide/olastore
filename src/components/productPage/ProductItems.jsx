import styles from "./ProductItems.module.css";
import Card from "./Card";
import { HiArrowUp } from "react-icons/hi";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

export default function ProductItems() {
  const { products } = useContext(ProductContext);

  return (
    <div className={styles.cardsWrapper}>
      {products.map((data, i) => (
        <Card key={i} product={data} />
      ))}

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
