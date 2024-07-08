import styles from "./ProductItems.module.css";
import Card from "./Card";
import { datas } from "../../utilities/Datas";
import { LuArrowUp } from "react-icons/lu";

export default function ProductItems() {
  return (
    <div className={styles.cardsWrapper}>
      {datas.map((data) => (
        <Card
          key={data.id}
          itemImg={data.itemImg}
          name={data.name}
          price={data.price}
          category={data.category}
          label={data.label}
        />
      ))}

      <div className={styles.moveUp} onClick={() => window.scrollTo(0, 0)}>
        <LuArrowUp className={styles.arrowUp} />
      </div>
    </div>
  );
}
