const ProductItem = ({ product }) => (
  <li>
    <strong>{product.name}</strong> - ₹{product.price} ({product.category})
  </li>
);

export default ProductItem;
