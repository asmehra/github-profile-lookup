import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark:bg-slate-900 ${inter.className}`}>{children}</body>
    </html>
  );
}
