import './menu.css'
import React, {useState, useEffect} from "react";
import Reviews from '../Reviews/Reviews';

function Menu() {
  const [menu, setmenus] = useState([]);
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState(false);

  function handleClick(){
    setPopup(!popup);
  }


  async function fetching(){
    await fetch("http://127.0.0.1:3000/menus")
    .then((resp) => resp.json())
    .then((menu) => setmenus(menu));
  }

 
  //fetch data
  useEffect(() => {
    fetching()
   
  }, []);
  console.log(menu)

 

  const addToCart = (menuu) =>{
    
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => menuu.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...menuu,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
   
  }


  let container = menu.map((menuu) => (
      <div className='contain'>

        <img className='logo' src={menuu.image} alt={menuu.name} />
        <h3>{menuu.name}</h3>
        <h4>Ksh. {menuu.price}</h4>
        <h4>{menuu.category}</h4>
        <p>{menuu.description}</p>
        <button className='btn' onClick={()=>addToCart(menuu)}>Add to Cart</button>
        <button className='btn' onClick={handleClick}>Add a Review</button>
      
      </div>
  
  ))

  return (
    <div>
      
      {
        popup ?
        <Reviews />
        :
        <div className='display'>{container}</div>
      }
      
    </div>
  )
}

export default Menu
