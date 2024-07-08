import styles from "./Footer.module.css";
import logo from "../../assets/icons/Olastore.svg";
import { RiMapPinLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <div className={styles.footerLogoImg}>
              <img src={logo} alt="Logo" />
            </div>
            <p>Find your next obsession...</p>
          </div>

          <div className={styles.footerDetailTexts}>
            <div className={styles.footerLinks}>
              <h3>LINKS</h3>
              <nav>
                <ul>
                  <li>
                    <Link to="#/">About us</Link>
                  </li>
                  <li>
                    <Link to="#/">Privacy policy</Link>
                  </li>
                  <li>
                    <Link to="#/">FAQ</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={styles.footerContact}>
              <h3>CONTACT</h3>
              <div className={styles.footerNavContact}>
                <div className={styles.conatctItem}>
                  <RiMapPinLine className={styles.footerIcon} />
                  <a href="https://www.google.com/maps/dir/6.537216,3.3521664/Lekki,+Lagos">
                    2 HNG Ave, Lekki
                  </a>
                </div>
                <div className={styles.conatctItem}>
                  <FiPhone className={styles.footerIcon} />
                  <a href="tel:+23470 4111 1111">+23470 4111 1111</a>
                </div>
                <div className={styles.conatctItem}>
                  <MdOutlineEmail className={styles.footerIcon} />
                  <a href="mailto:olastore@olastore.com.ng">
                    olastore@olastore.com.ng
                  </a>
                </div>
              </div>
            </div>

            <NewsLetter />
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsLetter() {
  const notify = () =>
    toast.success("Thanks for Subscribing", {
      position: "bottom-right",
      theme: "dark",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    notify();
  };

  return (
    <form className={styles.newsletter} onSubmit={handleSubmit}>
      <label htmlFor="news">Newsletter</label>
      <input
        type="text"
        name="News"
        id="news"
        placeholder="Subscribe to our newsletter"
        className={styles.newsInput}
      />
      <button type="submit" className={styles.submitBtn}>
        Subscribe
      </button>
    </form>
  );
}
