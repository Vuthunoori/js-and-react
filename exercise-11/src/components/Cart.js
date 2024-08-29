// src/Cart.js
import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      {/* Example button to add a product to the cart (you'd need to integrate this with actual product selection) */}
      <button onClick={() => addToCart({ name: 'Example Product', quantity: 1 })}>
        Add Example Product to Cart
      </button>
    </div>
  );
}

export default Cart;
