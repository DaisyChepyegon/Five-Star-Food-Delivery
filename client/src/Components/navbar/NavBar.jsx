import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul style={{ flex: 1 }}>
        <li className={styles.logo}>Five star food delivery</li>
        <li style={{ color: "#2f4454" }} className={styles.item}>
          Menu
        </li>
        <li className={styles.item}>Restaurant</li>
        <li className={styles.item}>Categories</li>
        <li className={styles.item}>Search By</li>
      </ul>

      <ul>
        <li className={styles.item}>
            {/* Find more icons at https://react-icons.github.io/react-icons/search */}
          <AiOutlineShoppingCart size={30} color="#2f4454"/>
        </li>
        <li><hr/></li>
        <li className={styles.profile}>Profile</li>
        <li className={styles.logout}>Logout</li>
      </ul>
    </nav>
  );
};

export default NavBar;
