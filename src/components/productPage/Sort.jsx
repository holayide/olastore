import styles from "./Sort.module.css";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

function Sort() {
  return (
    <div className={styles.sortWrapper}>
      <div className={styles.sort}>
        <div className={styles.innerSort}>
          <HiAdjustmentsHorizontal className={styles.filterPin} />
          <select name="filter" id="filter" className={styles.select}>
            <option value="">Filter</option>
            <option value="menCloth">Men clothing</option>
            <option value="womenCloth">Women clothing</option>
            <option value="kidCloth">Kids clothing</option>
            <option value="menFootwear">Men footwear</option>
            <option value="womenFootwear">Women footwear</option>
            <option value="kidFootwear">Kidds footwear</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Sort;
