import { Inter, Nerko_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/global/Navbar";
import LenisProvider from "./components/global/LenisProvider";

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
  title: "Ice Cream Parlor",
  description: "Delight in every scoop 🍨",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nerko.variable} ${inter.variable} antialiased`}>
        <LenisProvider>
          <div className="fixed w-full top-0 z-50 py-2 px-4">
            <Navbar />
          </div>

          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
