// src/Filters.js
import React from 'react';
import { useRecoilState } from 'recoil';
import { categoryFilterState, quantityFilterState } from './atom.js';

function Filters() {
  const [categoryFilter, setCategoryFilter] = useRecoilState(categoryFilterState);
  const [quantityFilter, setQuantityFilter] = useRecoilState(quantityFilterState);

  return (
    <div>
      <h2>Filters</h2>
      <div>
        <label>
          Category:
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <select value={quantityFilter} onChange={(e) => setQuantityFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="bulk">Bulk (more than 5)</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Filters;
