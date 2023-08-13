"use client";
import { useState } from "react";
import CreationSteps from "@/components/launchpad/CreationSteps";
import Form from "@/components/launchpad/Form";

export default function CreateLaunchpad() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTab, setSelectedTab] = useState("presale");
  const [selectedCurrency, setSelectedCurrency] = useState("BNB");
  const [tokenAddress, setTokenAddress] = useState("");
  const [softcap, setSoftcap] = useState(0);
  const [minBuy, setMinBuy] = useState(0);
  const [maxBuy, setMaxBuy] = useState(0);
  const [router, setRouter] = useState("");
  const [refundType, setRefundType] = useState("");
  const [liquidity, setLiquidity] = useState(0);
  const [listingRate, setListingRate] = useState(0);
  const [presaleRate, setPresaleRate] = useState(0);
  const [error, setError] = useState("");

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
    { value: "BNB", label: "BNB" },
    { value: "BUSD", label: "BUSD" },
    { value: "USDT", label: "USDT" },
    { value: "USDC", label: "USDC" },
  ];

  return (
    <main className="mt-[2.5rem]  text-white flex flex-col md:flex-row md:items-start gap-8">
      {/* LEFT COLUMN */}
      <CreationSteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        tokenAddress={tokenAddress}
        error={error}
        setError={setError}
      />
      {/* RIGHT COLUMN */}
      <section className="bg-[#1D1C20] pb-[6rem] rounded-[0.625rem] px-6 pt-8 text-white border border-[#26272B] w-full">
        <div className="flex flex-col md:flex-row justify-between mb-8 md:items-center gap-4 pr-11">
          {/* presale_ fair Launch group */}
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

        <Form
          error={error}
          setError={setError}
          softcap={softcap}
          minBuy={minBuy}
          maxBuy={maxBuy}
          liquidity={liquidity}
          refundType={refundType}
          router={router}
          listingRate={listingRate}
          setListingRate={setListingRate}
          setRouter={setRouter}
          setSoftcap={setSoftcap}
          setMinBuy={setMinBuy}
          setMaxBuy={setMaxBuy}
          setRefundType={setRefundType}
          setLiquidity={setLiquidity}
          currentStep={currentStep}
          currencyOptions={currencyOptions}
          tokenAddress={tokenAddress}
          presaleRate={presaleRate}
          selectedCurrency={selectedCurrency}
          setPresaleRate={setPresaleRate}
          setCurrentStep={setCurrentStep}
          setTokenAddress={setTokenAddress}
          setSelectedCurrency={setSelectedCurrency}
        />
      </section>
    </main>
  );
}
