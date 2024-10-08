import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapJs from "@/components/BootstrapJs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:"Practice | Bootstrap",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapJs/>
        {children}
      </body>
    </html>
  );
}
