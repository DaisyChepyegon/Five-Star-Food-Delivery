
import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar({ customer, setCustomer }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCustomer(null);
      }
    });
  }

  return (
    <nav>
      <div>
        <NavLink to="/">Welcome</NavLink>
      </div>
      <div>
        {customer ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <> 
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/restaurants">Restaurants</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/searchby">Search By</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;




// import React from "react";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import styles from "./navbar.module.css";

// const NavBar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <ul style={{ flex: 1 }}>
//         <li className={styles.logo}>Five star food delivery</li>
//         <li style={{ color: "#2f4454" }} className={styles.item}>
//           Menu
//         </li>
//         <li className={styles.item}>Restaurant</li>
//         <li className={styles.item}>Categories</li>
//         <li className={styles.item}>Search By</li>
//       </ul>

//       <ul>
//         <li className={styles.item}>
//             {/* Find more icons at https://react-icons.github.io/react-icons/search */}
//           <AiOutlineShoppingCart size={30} color="#2f4454"/>
//         </li>
//         <li><hr/></li>
//         <li className={styles.profile}>Profile</li>
//         <li className={styles.logout}>Logout</li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;


