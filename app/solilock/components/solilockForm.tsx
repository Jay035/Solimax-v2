"use client";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";
import LockForm from "./LockForm";

export default function SolilockForm() {
  const { currentStep } = GlobalContext();
  const [error, setError] = useState("");
  return (
    <section className="flex flex-col gap-6 bg-[#1D1C20] pb-[1.19rem] rounded-[0.625rem] px-6 border border-[#26272B] pt-8 text-white">
      <div className="flex justify-between items-center">
        <h1 className="tracking-[-0.015rem] text-2xl text-white">
        Create your lock
        </h1>
        <p className="text-[#A4D0F2] tracking-[-0.01rem]">
          Private sale fee: <span className=" text-[#F3CE92]">1 BNB</span>
        </p>
      </div>
      <div className="">
        <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
          <span className="text-[#F04438]">(*) </span>is required field
        </p>
        {error && (
          <p className="text-[#F04438] text-sm sm:text-base">{error}</p>
        )}
      </div>
      <LockForm />
    </section>
  );
}
