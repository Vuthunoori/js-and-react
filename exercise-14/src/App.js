import React, { useState } from 'react';
import ProductList from './components/ProductList.js';
import Cart from './components/Cart.js';
import FilterDropdowns from './components/FilterDropdowns.js';

// Hardcoded product data
const initialProducts = [
  { id: 1, name: 'Product A', category: 'Electronics', quantity: 10 },
  { id: 2, name: 'Product B', category: 'Electronics', quantity: 3 },
  { id: 3, name: 'Product C', category: 'Books', quantity: 7 },
  { id: 4, name: 'Product D', category: 'Books', quantity: 2 },
  { id: 5, name: 'Product E', category: 'Clothing', quantity: 15 }
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [quantityFilter, setQuantityFilter] = useState('');

  const categories = [...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p => {
    const matchesCategory = categoryFilter ? p.category === categoryFilter : true;
    const matchesQuantity = quantityFilter === 'bulk'
      ? p.quantity > 5
      : quantityFilter === 'small'
      ? p.quantity <= 5
      : true;
    return matchesCategory && matchesQuantity;
  });

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <FilterDropdowns
        categories={categories}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        quantityFilter={quantityFilter}
        setQuantityFilter={setQuantityFilter}
      />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
