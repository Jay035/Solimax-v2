"use client";
import { useState } from "react";
import CreationSteps from "@/components/launchpad/CreationSteps";
import Image from "next/image";
import CustomSelect from "@/components/launchpad/CustomSelect";

export default function CreateLaunchpad() {
  const [selectedTab, setSelectedTab] = useState("presale");
  const [selectedCurrency, setSelectedCurrency] = useState("BNB");
  const tabs = [
    {
      id: "presale",
      text: "Presale",
      style: "rounded-tl-[0.625rem] rounded-bl-[0.625rem]",
    },
    {
      id: "fairLaunch",
      text: "Fair launch",
      style: "rounded-tr-[0.625rem] rounded-br-[0.625rem]",
    },
  ];

  //   currency options
  const currencyOptions = [
    { value: "BNB", label: "BNB", imageSrc: "/icons/check.svg" },
    { value: "BUSD", label: "BUSD", imageSrc: "/icons/check.svg" },
    { value: "USDT", label: "USDT", imageSrc: "/icons/check.svg" },
    { value: "USDC", label: "USDC", imageSrc: "/icons/check.svg" },
  ];

  const handleSelect = (selectedValue: string) => {
    console.log("Selected option:", selectedValue);
  };
  return (
    <main className="mt-[2.5rem]  text-white flex items-start gap-8">
      {/* LEFT COLUMN */}
      <CreationSteps />
      {/* RIGHT COLUMN */}
      <section className="bg-[#1D1C20] pb-[6rem] rounded-[0.625rem] px-6 pt-8 text-white border border-[#26272B] w-full">
        <div className="flex justify-between mb-8 md:items-center gap-4 pr-11">
          {/* presale_fair Launch group */}
          <div className="">
            {tabs?.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  selectedTab === tab.id
                    ? "bg-[#454FDA] border border-[#454FDA]"
                    : "bg-[#3F3F46]"
                } ${tab?.style} py-[0.81rem] px-[2.88rem] tracking-[-0.01rem]`}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.text}
              </button>
            ))}
          </div>
          {/* Create token button */}
          <button>Create token</button>
        </div>
        <form className="flex flex-col gap-6">
          <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
            <span className="text-[#F04438]">(*) </span>is required field
          </p>
          <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
            <label htmlFor="token-address">
              Token Address<span className="text-[#F04438]">*</span>
            </label>
            <input
              id="token-address"
              className="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              type="text"
              placeholder="0x..."
              required
            />
            {/* create pool fee */}
            <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              Create pool fee <span className="text-[#F3CE92]">15BNB</span>
            </p>
          </div>
          <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
            <label htmlFor="currency">
              Select Currency<span className="text-[#F04438]">*</span>
            </label>
            <CustomSelect options={currencyOptions} onSelect={handleSelect} />
            {/* create pool fee */}
            <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              Users will pay with {selectedCurrency} for your token
            </p>
          </div>
          <div className="flex flex-col gap-4" role="fee-options">
            <h3 className="text-base text-[#E4E4E7] tracking-[-0.01rem]">
              Fee Options
            </h3>
            <label
              htmlFor=""
              className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
            >
              <input
                className="w-6 h-6 accent-[#A4D0F2]"
                type="radio"
                checked
                name=""
                id=""
              />
              % BNB raised only
              <span className="text-[#F3CE92]"> (Recommended)</span>
            </label>
            <label
              htmlFor=""
              className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
            >
              <input
                className="w-6 h-6 accent-[#F4F4F5]"
                type="radio"
                name=""
                id=""
              />
              1.5% BNB raised + 1.5% token raised
            </label>
          </div>
          <div className="mb-8 text-[0.875rem] tracking-[-0.00875rem] p-[0.625rem] bg-[#a4d0f2]/[0.05] rounded-[0.625rem]">
            Make sure the token has &apos;Exclude transfer fee&apos; function if
            it has transfer fees.
          </div>
          <button className="bg-[#C38CC3] w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]">Next</button>
        </form>
      </section>
    </main>
  );
}
