"use client";
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
  console.log(isModalShowing);

  return (
    <main className="font-questrial grid xl:grid-cols-[20rem_auto]">
      {isModalShowing === true && <CreateTokenModal />}
      <ScrollToTop />
      <Navbar />
      <section>
        <div className="hidden lg:flex justify-end">

        <Wallet />
        </div>
        {children}
      </section>
    </main>
  );
}
