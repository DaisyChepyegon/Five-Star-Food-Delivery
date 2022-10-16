import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Home from './Components/home/Home';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Navbar from "./Components/navbar/NavBar";
import Menu from './Components/menu/menu'
import Restaurants from './Components/restaurants/Restaurants'
import Cart from './Components/cart/Cart'
import Category from "./Components/categories/Category";
import Searchby from './Components/searchby/Searchby'



// import Reviews from "./Components/Reviews/Reviews";

function App() {
  const [customer, setCustomer] = useState(null);

  async function fetching(){
    await fetch("http://127.0.0.1:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((customer) => setCustomer(customer));
      }
    });
  }
  

  useEffect(() => {
    // auto-login
   fetching()
  }, []);
  
  return (
    <div className="App">
    
      <Navbar customer={customer} setCustomer={setCustomer} />
      <main>
        {/* {customer ? ( */}
          <Routes>
            <Route path="/home" element = {<Home customer={customer}/>} />
            <Route path="/restaurants" element = {<Restaurants/>} />
            <Route path="/menu" element = {<Menu/>} />
            <Route path="/categories" element = {<Category/>} />
            <Route path="/searchby" element = {<Searchby/>} />
            <Route path="/cart" element = {<Cart/>} />
          </Routes>
          
        {/* ) : (  */}
          <Routes>
            <Route path="/signup" element ={<SignUp setCustomer={setCustomer} />} />
            <Route path="/" element ={<Login setCustomer={setCustomer} />} />
            <Route path="/login" element ={<Login setCustomer={setCustomer} />} />

          </Routes>
         {/* ) } */}

      </main>

    </div>
  );
}

export default App;
