"use client";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Wallet from "@/components/Wallet";
import Modal from "@/components/Modal";
import { GlobalContext } from "@/context/Context";

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isModalShowing } = GlobalContext();

  return (
    <main className="font-questrial grid xl:grid-cols-[16.5rem_auto]">
      {isModalShowing === true && <Modal />}
      <ScrollToTop />
      <Navbar />
      <section className="overflow-x-hidden">
        <div className="hidden xl:flex justify-end">
          <Wallet />
        </div>
        {children}
      </section>
    </main>
  );
}
