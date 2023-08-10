import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Wallet from "@/components/Wallet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solimax Launchpad",
  description: "A Global Hub for Farmers, Degens, and Tech Geeks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid lg:grid-cols-[19rem_auto]`}>
        <Navbar />
        <main>
          <Wallet />
          {children}
        </main>
      </body>
    </html>
  );
}
