import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./navbar.module.css";

function Navbar({ customer, setCustomer }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCustomer(null);
      }
    });
  }
  return (
    <nav className={styles.navbar}>
      <ul style={{ flex: 1 }}>
     <NavLink  to="/home"><li className={styles.logo}>Five Star Food Delivery</li></NavLink>
     <NavLink to="/menu"><li style={{ color: "#20A964" }} className={styles.item}>
          Menu
        </li></NavLink>
        <NavLink to="/categories"> <li className={styles.item}>Categories</li></NavLink>
        <NavLink to="/searchby"> <li className={styles.item}>Search By</li></NavLink>
      </ul>
      <ul>
      <NavLink to="/cart"> <li className={styles.item}>
            {/* Find more icons at https://react-icons.github.io/react-icons/search */}
          <AiOutlineShoppingCart size={30} color="#20A964"/>
        </li></NavLink>
        <li><hr/></li>
        <div>
        {customer ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
        <NavLink to="/signup"><li className={styles.Signup}>Signup</li></NavLink>
        <NavLink to="/login"><li className={styles.Login}>Login</li></NavLink>
        </>
        )}
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;






