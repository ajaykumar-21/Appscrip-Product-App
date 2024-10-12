import Head from "next/head";
import styles from "./page.module.css";
import ProductrList from "@/components/ProductList/ProductrList";

const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default async function Home() {
  const products = await fetchData();
  // console.log(products);

  // Example schema data for the first product in the list
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: products[0]?.title || "Appscript Product",
    description:
      products[0]?.description ||
      "A top-tier product from Appscript's e-commerce platform.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: products[0]?.price || "49.99",
      availability: "https://schema.org/InStock",
    },
  };
  return (
    <>
      <Head>
        <title>Appscript Product App</title>
        <meta
          name="description"
          content="This project is an e-commerce appscrip product page built using Next.js."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <main className={styles.pageConatiner}>
        <h2 className={styles.pageHeading}>DISCOVER OUR PRODUCTS</h2>
        <p className={styles.pageDescription}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </main>
      <ProductrList products={products} />
    </>
  );
}
