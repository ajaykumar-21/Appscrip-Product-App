import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Appscrip-Product-App", // Page title that appears in the browser tab and search results
  description:
    "This project is an e-commerce appscrip product page built using Next.js", // Brief description of the page for search engines

  // Additional metadata for structured data
  other: {
    structuredData: {
      "@context": "https://schema.org", // Defines the context for structured data
      "@type": "Product", // Specifies the type of structured data
      name: "Appscrip Product App", // Name of the product
      description: "A top-tier product from Appscript's e-commerce platform.",
      offers: {
        "@type": "Offer", // Specifies that this is an offer
        priceCurrency: "USD", // Currency for the price
        price: "49.99", // Price of the product
      },
      images: [],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
