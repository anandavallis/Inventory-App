const CategoryFilter = ({ category, setCategory }) => (
  <select value={category} onChange={(e) => setCategory(e.target.value)}>
    <option value="">All Categories</option>
    <option value="Electronics">Electronics</option>
    <option value="Accessories">Accessories</option>
    <option value="Kitchen">Kitchen</option>
  </select>
);

export default CategoryFilter;
