
import React, {useState, useEffect} from "react";

function Menu() {
  const [menu, setmenus] = useState([]);


  async function fetching(){
    await fetch("http://127.0.0.1:3000/menus")
    .then((resp) => resp.json())
    .then((menu) => setmenus(menu));
  }
  //fetch data
  useEffect(() => {
    fetching()
  }, []);
  console.log(menu);


  let container = menu.map((menuu) => (
    <div>
      <div className='contain'>
        <h3>{menuu.name}</h3>
        <img src={menuu.image} alt={menuu.name} />
        <h4>Ksh. {menuu.price}</h4>
        <h4>{menuu.category}</h4>
        <p>{menuu.description}</p>
      </div>
    </div>
  ))

  return (
    <div className='display'>
      <div>{container}</div>
      <div className="btn">
        <button>Add to Cart</button>
        <button>Add a Review</button>
      </div>
    </div>
  )
}

export default Menu
