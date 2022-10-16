import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./navbar.module.css";

function Navbar({ customer, setCustomer }) {
  const navigate = useNavigate()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCustomer(null);
        navigate("/login")
      }
    });
  }
  return (
    <nav className={styles.navbar}>
      <ul style={{ flex: 1 }}>
     <NavLink  to="/home"><li className={styles.logo}>Five Star Food Delivery</li></NavLink>
     <NavLink to="/menu"><li style={{ color: "#2F4454" }} className={styles.item}>
          Menu
        </li></NavLink>
        <NavLink to="/restaurants"> <li className={styles.item}>Restaurants</li></NavLink>
        <NavLink to="/categories"> <li className={styles.item}>Category</li></NavLink>
      </ul>
      <ul>
      <NavLink to="/cart"> <li className={styles.item}>
            {/* Find more icons at https://react-icons.github.io/react-icons/search */}
          <AiOutlineShoppingCart size={30} color="#2F4454"/>
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






