import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Home from './Components/home/Home';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Navbar from "./Components/navbar/NavBar";
import Menu from './Components/menu/menu'
// import Restaurants from './Components/restaurants/Restaurants'
import Cart from './Components/cart/Cart'
import Categories from './Components/categories/Categories'
import Searchby from './Components/searchby/Searchby'



// import Reviews from "./Components/Reviews/Reviews";

function App() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((customer) => setCustomer(customer));
      }
    });
  }, []);
  
  return (
    <div className="App">
    
      <Navbar customer={customer} setCustomer={setCustomer} />
      <main>
        {customer ? (
          <Routes>
            <Route path="/home">
              <Home customer={customer}/>
            </Route>
            {/* <Route path="/restaurants"> <Restaurants /></Route> */}
            <Route path="/menu"> <Menu /></Route>
            <Route path="/categories"> <Categories /></Route>
            <Route path="/searchby"> <Searchby /></Route>
            <Route path="/cart"> <Cart /></Route>
          </Routes>
          
        ) : (
          <Routes>
          
            <Route path="/signup"> <SignUp setCustomer={setCustomer} /> </Route>
            <Route path="/login"> <Login setCustomer={setCustomer} /></Route>

          </Routes>
        )}
      </main>

    </div>
  );
}

export default App;
