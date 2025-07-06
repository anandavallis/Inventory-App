import ProductItem from './ProductItem';

const ProductList = ({ products }) => (
  <ul>
    {products.map((p) => <ProductItem key={p.id} product={p} />)}
  </ul>
);

export default ProductList;
