import styles from "./page.module.css";

const fetchData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const product = await fetchData();
  // console.log(product);
  return (
    <div className={styles.pageConatiner}>
      <div className={styles.pageHeading}>DISCOVER OUR PRODUCTS</div>
      <div>
        <div className={styles.pageDescription}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        </div>
        <div className={styles.pageDescription}>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </div>
      </div>
    </div>
  );
}
