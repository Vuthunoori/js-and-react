
import { atom, selector } from 'recoil';

// Atom for storing products
export const productsState = atom({
  key: 'productsState',
  default: [
    { id: 1, name: 'Product 1', category: 'Electronics', quantity: 10 },
    { id: 2, name: 'Product 2', category: 'Clothing', quantity: 3 },
    { id: 3, name: 'Product 3', category: 'Electronics', quantity: 8 },
    { id: 4, name: 'Product 4', category: 'Furniture', quantity: 15 },
    // More products
  ],
});

// Atom for category filter
export const categoryFilterState = atom({
  key: 'categoryFilterState',
  default: '',
});

// Atom for quantity filter
export const quantityFilterState = atom({
  key: 'quantityFilterState',
  default: 'all', // 'all' or 'bulk'
});

// Selector for filtered products
export const filteredProductsState = selector({
  key: 'filteredProductsState',
  get: ({ get }) => {
    const products = get(productsState);
    const categoryFilter = get(categoryFilterState);
    const quantityFilter = get(quantityFilterState);

    return products.filter(product => {
      const matchesCategory = categoryFilter === '' || product.category === categoryFilter;
      const matchesQuantity = quantityFilter === 'bulk' ? product.quantity > 5 : true;
      return matchesCategory && matchesQuantity;
    });
  },
});
