"use client";
import LatestPools from "@/components/LatestPools";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Wallet from "@/components/Wallet";
import CreateTokenModal from "@/components/launchpad/CreateTokenModal";
import { GlobalContext } from "@/context/Context";
import React from "react";

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isModalShowing } = GlobalContext();
  return (
    <main className="font-questrial grid xl:grid-cols-[20rem_auto]">
      {isModalShowing === true && <CreateTokenModal />}
      <ScrollToTop />
      <Navbar />
      <section>
        <Wallet />
        <div className="overflow-x-hidden mt-5 mb-20 pl-[1.69rem] pr-10 sm:pr-16">
          <LatestPools />
          {children}
        </div>
      </section>
    </main>
  );
}
