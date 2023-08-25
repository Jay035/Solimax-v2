"use client";
import LatestPools from "@/components/LatestPools";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Wallet from "@/components/Wallet";
import CreateTokenModal from "@/components/launchpad/CreateTokenModal";
import { GlobalContext, LaunchpadContextProvider } from "@/context/Context";
import React from "react";

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isModalShowing } = GlobalContext();
  return (
    <LaunchpadContextProvider>
      {isModalShowing === true && <CreateTokenModal />}
      {/* <CreateTokenModal /> */}

      <ScrollToTop />
      <Navbar />
      <main
        className={`${isModalShowing ? "overflow-hidden" : ""} font-questrial`}
      >
        <Wallet />
        <section className="overflow-x-hidden font-questrial mt-5 mb-20 pl-[1.69rem] pr-10 sm:pr-16">
          <LatestPools />
          {children}
        </section>
      </main>
    </LaunchpadContextProvider>
  );
}
