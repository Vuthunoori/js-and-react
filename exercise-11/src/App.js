// src/App.js
import React from 'react';
import { RecoilRoot } from 'recoil';
import ProductList from './components/ProductList.js';
import Filters from './components/Filters.js';
import Cart from './components/Cart.js';

function App() {
  return (
    <RecoilRoot>
      <div>
        <h1>My E-Commerce App</h1>
        <Filters />
        <ProductList />
        <Cart />
      </div>
    </RecoilRoot>
  );
}

export default App;
