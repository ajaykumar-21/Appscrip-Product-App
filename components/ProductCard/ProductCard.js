import Image from "next/image";
import styles from "./ProductCard.module.css";
import heart from "../../assets/heart.svg";

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div>
        <img
          src={product.image}
          alt={product.title}
          width="100%"
          height="270px"
        />
      </div>
      <div className={styles.cardDetails}>
        <div className={styles.cardTitle}>{product.title}</div>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <span className={styles.signIn}>Sign in</span> or Create an account
            to see pricing
          </div>
          <div style={{ cursor: "pointer" }}>
            <Image src={heart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
