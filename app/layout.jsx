import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mercado Libre",
  description: "Mercado Libre clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Navbar></Navbar>
        <div className="flex gap-4 justify-center">
          <div>
            <Sidebar />
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
