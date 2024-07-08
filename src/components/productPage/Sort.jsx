import styles from "./Sort.module.css";
// import { HiAdjustmentsHorizontal } from "react-icons/hi2";

function Sort() {
  return (
    <div className={styles.sortWrapper}>
      <div className={styles.sort}>
        <div className={styles.innerSort}>
          <select name="filter" id="filter" className={styles.select}>
            <option value="">Price</option>
            <option value="menCloth">low to high</option>
            <option value="womenCloth">high to low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Sort;
