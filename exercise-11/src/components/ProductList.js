// src/ProductList.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredProductsState } from './atom.js';

function ProductList() {
  const products = useRecoilValue(filteredProductsState);
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.category} - Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
