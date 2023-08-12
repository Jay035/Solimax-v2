import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Questrial } from "next/font/google";
import Wallet from "@/components/Wallet";
import LatestPools from "@/components/LatestPools";

const inter = Inter({ subsets: ["latin"] });
const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

const NeueHaasDisplay = localFont({
  variable: "--font-neuehaas",
  src: [
    {
      path: "./neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

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
      <body
        className={`${questrial.variable} ${NeueHaasDisplay.variable} grid lg:grid-cols-[20rem_auto]`}
      >
        <Navbar />
        <main>
          <Wallet />
          <section className="overflow-x-hidden font-questrial mt-5 mb-20 pl-[1.69rem] pr-10 sm:pr-16">
            <LatestPools />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
