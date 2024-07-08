import styles from "./Header.module.css";
import { toast } from "react-toastify";
import logo from "../../assets/icons/Olastore.svg";
import { GrCart } from "react-icons/gr";
import { TbNotes } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { MdDehaze } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { BiMessageX } from "react-icons/bi";
import { MdOutlinePolicy } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((preOpen) => !preOpen);
  }

  function closeMenu() {
    setOpen(false);
  }

  const dormantLink = () => {
    toast.error("Sorry, this link is dormant.");
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner_header}>
        <div className={styles.logoWrapper}>
          <div className={styles.BtnWrapper} onClick={handleOpen}>
            {open ? (
              <IoMdClose className={`${styles.ToggleBtn}`} />
            ) : (
              <MdDehaze className={`${styles.ToggleBtn}`} />
            )}
          </div>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Olastore's logo" />
            </Link>
          </div>
        </div>

        <div className={styles.mobileProfileWrapper}>
          <div className={styles.innerMobileProfile}>
            <Link to="/cart" className={styles.activeLink}>
              <GrCart className={styles.mobileListImg} />
            </Link>
            <Link to="/#" className={styles.dormantLink}>
              <GoPerson className={styles.mobileListImg} />
            </Link>
          </div>
        </div>

        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/cart"
                onClick={closeMenu}
                className={styles.activeLink}
              >
                <GrCart className={styles.listImg} />
                <span>Cart</span>
              </NavLink>
            </li>
            <li onClick={dormantLink}>
              <Link to="#/" onClick={closeMenu} className={styles.dormantLink}>
                <TbNotes className={styles.listImg} />
                <span>My order</span>
              </Link>
            </li>
            <li onClick={dormantLink}>
              <Link to="#/" onClick={closeMenu} className={styles.dormantLink}>
                <IoMdHeartEmpty className={styles.listImg} />
                <span>Saved</span>
              </Link>
            </li>

            <li onClick={dormantLink}>
              <Link to="#/" onClick={closeMenu} className={styles.dormantLink}>
                <GoPerson className={styles.listImg} />
                <span>Me</span>
              </Link>
            </li>

            {/* start */}
            <li className={styles.hide}>
              <Link to="/#" onClick={closeMenu} className={styles.dormantLink}>
                <BiMessageX className={styles.listImg} />
                <span>Pending reviews</span>
              </Link>
            </li>
            <li className={styles.hide}>
              <Link to="/#" onClick={closeMenu} className={styles.dormantLink}>
                <MdOutlinePolicy className={styles.listImg} />
                <span>Return Policy</span>
              </Link>
            </li>
            <li className={styles.hide}>
              <Link to="/#" onClick={closeMenu} className={styles.dormantLink}>
                <MdHelpOutline className={styles.listImg} />
                <span>Help?</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
