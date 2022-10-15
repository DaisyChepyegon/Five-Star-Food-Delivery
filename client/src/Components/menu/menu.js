// import React from "react";

// const Menu = ({ items }) => {
//   return (
//   //   <div className="section-center">
//   //     {items.map((item) => {
//   //       const { id, title, img, desc, price } = item;
//   //       return (
//   //           <article key={id} className="menu-item">
//   //           <img src={img} alt={title} className="photo" />
//   //           <div className="item-info">
//   //             <header>
//   //               <h4>{title}</h4>
//   //               <h4 className="price">Ksh{price}</h4>
//   //               </header>
//   //               <p className="item-text">{desc}</p>
//   //           </div>
//   //         </article>
//   //       );
//   //     })}
//   //   </div>
//   // );
// };

// export default Menu;


import React, {useState, useEffect} from "react";

function Menu() {
  const [menu, setmenus] = useState([]);

  //fetch data
  useEffect(() => {
    fetch("/menus")
      .then((resp) => resp.json())
      .then((menu) => setmenus(menu));
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
