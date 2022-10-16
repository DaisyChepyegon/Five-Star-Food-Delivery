import React from 'react'

function Displaycart({cart, setCart}) {

  const getTotalSum = () => {
    return cart.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };


  const setQuantity = (menuu, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === menuu.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (menuuToRemove) => {
    setCart(
      cart.filter((menuu) => menuu !== menuuToRemove)
    );
  };


  return (
    <div>

    <h1>CART</h1>
    {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
    )}

    <div>
    {cart.map((menuu, idx) => (
          <div className="menuu" key={idx}>
            <h3>{menuu.name}</h3>
            <h4>Ksh {menuu.price}</h4>
            <h4>{menuu.description}</h4>
            <input
              value={menuu.quantity}
              onChange={(e) =>
                setQuantity(
                  menuu,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={menuu.image} alt={menuu.name} />
            <button onClick={() => removeFromCart(menuu)}>
              Remove
            </button>
          </div>
        ))}
    </div>
    <div>Total Cost: ${getTotalSum()}</div>
    </div>
  )
}

export default Displaycart
