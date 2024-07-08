import styles from "./Hero.module.css";
import { IoIosSearch } from "react-icons/io";

function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.innerHero}>
        <h1>Quality you can trust</h1>
        <p>Effortless shopping for the things you love</p>

        <div tabIndex="0" className={styles.inputBox}>
          <IoIosSearch className={styles.searchIcon} />
          <input
            type="text"
            name="search-box"
            id="search"
            placeholder="Search in all categories e.g snickers"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
