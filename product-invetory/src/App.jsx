import { useEffect, useState } from 'react';
import { getProducts } from './services/productService';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const fetchProducts = async () => {
    let url = `http://localhost:3001/products?q=${searchQuery}`;
    if (category) url += `&category=${category}`;
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, category]);

  return (
    <div>
      <h1>Product Inventory</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
