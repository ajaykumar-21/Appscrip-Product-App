import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

function ProductrList({ products }) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductrList;
