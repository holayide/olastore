import styles from "./Header.module.css";
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
            <Link to="/#">
              <GrCart className={styles.mobileListImg} />
            </Link>
            <Link to="/#">
              <GoPerson className={styles.mobileListImg} />
            </Link>
          </div>
        </div>

        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          <ul>
            <li>
              <NavLink to="/cart" onClick={closeMenu}>
                <GrCart className={styles.listImg} />
                <span>Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/#" onClick={closeMenu}>
                <TbNotes className={styles.listImg} />
                <span>My order</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/#" onClick={closeMenu}>
                <IoMdHeartEmpty className={styles.listImg} />
                <span>Saved</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/#" onClick={closeMenu}>
                <GoPerson className={styles.listImg} />
                <span>Me</span>
              </NavLink>
            </li>

            {/* start */}
            <li className={styles.hide}>
              <NavLink to="/#" onClick={closeMenu}>
                <BiMessageX className={styles.listImg} />
                <span>Pending reviews</span>
              </NavLink>
            </li>
            <li className={styles.hide}>
              <NavLink to="/#" onClick={closeMenu}>
                <MdOutlinePolicy className={styles.listImg} />
                <span>Return Policy</span>
              </NavLink>
            </li>
            <li className={styles.hide}>
              <NavLink to="/#" onClick={closeMenu}>
                <MdHelpOutline className={styles.listImg} />
                <span>Help?</span>
              </NavLink>
            </li>
            <li className={`${styles.hide}`}>
              <NavLink to="/#" onClick={closeMenu}>
                <span>Sign Out</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
