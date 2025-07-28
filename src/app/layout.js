import { Inter, Nerko_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/global/Navbar";
import LenisProvider from "./components/global/LenisProvider";
import Footer from "./components/global/Footer";

const nerko = Nerko_One({
  variable: "--font-",
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400"], // Normal
  subsets: ["latin"],
});

export const metadata = {
  title: "Frosted Bloom | Ice Cream Shop",
  description: "Delight in every scoop 🍨",
  favicon: "/logo.png",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Frosted Bloom",
    description: "Delight in every scoop 🍨",
    images: "/logo.png",
  },
  icon: "/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nerko.variable} ${inter.variable} antialiased`}>
        <LenisProvider>
          <div className="fixed w-full top-0 z-[9999] px-4">
            <Navbar />
          </div>

          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
