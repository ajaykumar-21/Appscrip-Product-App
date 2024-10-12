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
  title: "Appscrip-Prroduct-App",
  description:
    "This project is an e-commerce appscrip product page built using Next.js",
  other: {
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Appscrip Product App",
      description: "A top-tier product from Appscript's e-commerce platform.",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "49.99",
      },
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
