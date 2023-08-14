"use client";
import { useState } from "react";
import CreationSteps from "@/components/launchpad/CreationSteps";
import Form from "@/components/launchpad/Form";
import ButtonGroup from "@/components/launchpad/ButtonGroup";

export default function CreateLaunchpad() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTab, setSelectedTab] = useState("presale");
  const [selectedCurrency, setSelectedCurrency] = useState("BNB");
  const [tokenAddress, setTokenAddress] = useState("");
  const [softcap, setSoftcap] = useState(0);
  const [minBuy, setMinBuy] = useState(0);
  const [maxBuy, setMaxBuy] = useState(0);
  const [router, setRouter] = useState("Select router exchange");
  const [refundType, setRefundType] = useState("Burn");
  const [liquidity, setLiquidity] = useState(0);
  const [listingRate, setListingRate] = useState(0);
  const [presaleRate, setPresaleRate] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [liquidityLockup, setLiquidityLockup] = useState("");
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
    <main className="mt-[2.5rem] text-white flex flex-col md:flex-row md:items-start gap-8">
      {/* LEFT COLUMN */}
      <CreationSteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        tokenAddress={tokenAddress}
        error={error}
        setError={setError}
      />
      {/* RIGHT COLUMN */}
      <section
        className={`${
          currentStep === 1
            ? "bg-[#1D1C20] border border-[#26272B] pb-[6rem] rounded-[0.625rem] px-6 pt-8"
            : ""
        }  text-white  w-full`}
      >
        {currentStep === 1 && (
          <ButtonGroup
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        )}

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
          tabs={tabs}
          selectedTab={selectedTab}
          startDate={startDate}
          liquidityLockup={liquidityLockup}
          endDate={endDate}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          setLiquidityLockup={setLiquidityLockup}
          setSelectedTab={setSelectedTab}
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
