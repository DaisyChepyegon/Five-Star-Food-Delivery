
import React from 'react'
import { Link } from "react-router-dom";

function Navbar({ customer, setCustomer }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCustomer(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Link to="/">Welcome</Link>
      </div>
      <div>
        {customer ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <> 
            <Link to="/menu">Menu</Link>
            <Link to="/restaurants">Restaurants</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/searchby">Search By</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </header>
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


