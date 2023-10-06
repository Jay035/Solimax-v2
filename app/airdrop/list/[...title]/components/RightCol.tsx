"use client";
import {Newsletter} from "@/components/Newsletter";
import Image from "next/image";
import banner from "../../../../../public/images/detail banner.png";
import { useState } from "react";

type Props = {};

export default function RightCol({}: Props) {
  const [email, setEmail] = useState<string>("");

  return (
    <section className="flex flex-col gap-6 text-white">
      <Image className="w-full" src={banner} alt="banner" />
      <div className="bg-[#1D1C20] pt-[1.13rem] border border-[#3F3F46] rounded-[0.65rem] px-5">
        {/* PROGRESS */}
        <div className="">
          <div className="flex justify-between items-center text-[#e4e4e7] text-[0.72rem]">
            <p className="tracking-[-0.0073rem]">Progress</p>
            <p className="tracking-[-0.0073rem]">67%</p>
          </div>
          {/* progress bar */}
          <div className="bg-[#70707b] w-full h-[0.434rem] rounded-[0.58rem] my-[0.29rem]">
            <div className="bg-[#454FDA] w-[67%] h-full rounded-[0.58rem]"></div>
          </div>
          <div className="flex justify-between items-center text-[#e4e4e7] text-[0.72rem]">
            <p className="tracking-[-0.0073rem]">870 BNB</p>
            <p className="tracking-[-0.0073rem] text-[#f3ce92]">1000 BNB</p>
          </div>
        </div>
        {/* pool state */}
        <p className="bg-[#a1f381]/[0.05] text-center text-[0.875rem] tracking-[-0.00875rem] mt-[1.05rem] mb-[2.37rem] p-[0.65rem] rounded-[0.65rem]">
          This pool is active
        </p>
        <div className="border-b border-[#26272B]">
          {/* Status */}
          <section className="pb-2 mb-2 flex justify-between items-center">
            <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
              Status
            </p>
            <p className="tracking-[-0.00875rem] text-right text-[#12B76A] text-sm">
              Active
            </p>
          </section>
          {/* Sale type */}
          <section className="pb-2 mb-2 flex justify-between items-center">
            <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
              Sale type
            </p>
            <p className="tracking-[-0.00875rem] text-right text-[#86CB3C] text-sm">
              Whitelist
            </p>
          </section>
          {/* Max buy */}
          <section className="pb-2 mb-2 flex justify-between items-center">
            <p className="text-sm tracking-[-0.00875rem]">Maximum buy</p>
            <p className="tracking-[-0.00875rem] text-right  text-sm">
              0.033 BNB{" "}
            </p>
          </section>
          {/* Min buy */}
          <section className="pb-2 mb-2 flex justify-between items-center">
            <p className="text-sm tracking-[-0.00875rem]">Minimum buy</p>
            <p className="tracking-[-0.00875rem] text-right  text-sm">
              3.3 BNB{" "}
            </p>
          </section>
          {/* My contributions */}
          <section className="pb-2 mb-2 flex justify-between items-center">
            <p className="text-sm tracking-[-0.00875rem]">My contributions</p>
            <p className="tracking-[-0.00875rem] text-right text-sm">
              0.0 BNB{" "}
            </p>
          </section>
          {/* My contributions */}
          <section className="pb-2 mb-2 flex justify-between items-center">
            <p className="text-sm tracking-[-0.00875rem]">Total contributors</p>
            <p className="tracking-[-0.00875rem] text-right text-sm">69 </p>
          </section>
        </div>
        <div className="p-0.5">
          <Newsletter className="px-6 py-10 bg-[#18181B] bordr-[#E4E4E7] mt-7 text-white rounded-2xl text-center" email={email} setEmail={setEmail} />
        </div>
      </div>
    </section>
  );
}
