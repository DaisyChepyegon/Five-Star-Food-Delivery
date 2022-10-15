import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css"
import Home from './Components/home/Home';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Navbar from "./Components/navbar/Navbar";
import Welcome from "./Components/Welcome";
import Menu from './Components/menu/menu'
import Restaurants from './Components/restaurants/Restaurants'
import Cart from './Components/cart/Cart'
import Categories from './Components/categories/Categories'
import Searchby from './Components/searchby/Searchby'


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
      <Home />
      <Navbar customer={customer} setCustomer={setCustomer} />
      <main>
        {customer ? (
          <Switch>
            <Route path="/">
              <Welcome customer={customer}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/menu" element={<Menu />}/>
            <Route exact path="/restaurants" element={<Restaurants />}/>
            <Route exact path="/categories" element={<Categories/>}/>
            <Route exact path="/searchby" element={<Searchby />}/>
            <Route exact path="/cart" element={<Cart />}/>
          
            <Route path="/signup"> <SignUp setCustomer={setCustomer} /> </Route>
            <Route path="/login"> <Login setCustomer={setCustomer} /></Route>

          </Switch>
        )}
      </main>
    </div>
  );
}

export default App;
