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
          <Wallet containerClassName="flex items-center gap-[0.62rem] justify-end w-full xl:px-20 xl:pt-8 xl:pb-[1.31rem] xl:border-b xl:border-[#424242]" className="rounded-[3.125rem] p-[0.42rem] border-[0.5px] w-[9.38rem] h-10 bg-[#454FDA] text-white border-[#424242]" />
        </div>
        {children}
      </section>
    </main>
  );
}
