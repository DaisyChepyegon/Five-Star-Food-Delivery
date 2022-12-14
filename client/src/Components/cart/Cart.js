import React, { useState } from 'react'
import Displaycart from './Displaycart';
import Menu from '../menu/menu';
import "./Cart.css"



const PAGE_MENUU = 'menuu';
const PAGE_CART = 'cart';

function Cart() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_MENUU);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div>
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
           Cart ({getCartTotal()})
        </button>

        <button onClick={() => navigateTo(PAGE_MENUU)}>
         Menus
        </button>
      </header>
      {page === PAGE_MENUU && (
        <Menu cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Displaycart cart={cart} setCart={setCart} />
      )}
      
    </div>
  )
}

export default Cart
