import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Questrial } from "next/font/google";
import { LaunchpadContextProvider } from "@/context/Context";
import BodyComponent from "./body";
import { Providers } from "./providers";
import "@rainbow-me/rainbowkit/styles.css";

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
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`${questrial.variable} ${NeueHaasDisplay.variable} relative`}
      >
        <Providers>
          <LaunchpadContextProvider>
            <BodyComponent>{children}</BodyComponent>
          </LaunchpadContextProvider>
        </Providers>
      </body>
    </html>
  );
}
