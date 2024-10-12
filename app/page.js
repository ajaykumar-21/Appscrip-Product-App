import Head from "next/head";
import styles from "./page.module.css";
import ProductrList from "@/components/ProductList/ProductrList";

const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    // Check if the response is OK (status in the range 200-299)
    if (!res.ok) throw new Error("Failed to fetch data");
    // Parse the JSON data
    const data = await res.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching products:", error); // Log the error with context
    return []; // Return an empty array in case of error
  }
};

export default async function Home() {
  const products = await fetchData();
  // console.log(products);

  // Example schema data for the first product in the list
  const schemaData = {
    "@context": "https://schema.org", // Define the schema context
    "@type": "Product", // Specify the type of schema
    name: products[0]?.title || "Appscript Product", // Use the product title or a fallback value
    description:
      products[0]?.description || // Use the product description or a fallback value
      "A top-tier product from Appscript's e-commerce platform.",
    offers: {
      "@type": "Offer", // Specify the type of offer
      priceCurrency: "USD", // Set the currency type
      price: products[0]?.price || "49.99", // Use the product price or a fallback value
      availability: "https://schema.org/InStock", // Set the availability status
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
