import React from 'react';

const FilterDropdowns = ({ categories, categoryFilter, setCategoryFilter, quantityFilter, setQuantityFilter }) => {
  return (
    <div>
      <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select onChange={(e) => setQuantityFilter(e.target.value)} value={quantityFilter}>
        <option value="">All Quantities</option>
        <option value="bulk">Bulk (more than 5)</option>
        <option value="small">Small (5 or less)</option>
      </select>
    </div>
  );
};

export default FilterDropdowns;
