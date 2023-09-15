"use client";
import { useState } from "react";
import LatestPools from "@/components/LatestPools";
import CustomInput from "@/components/CustomInput";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";

type Props = {};

export default function CreateAirdrop({}: Props) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [tokenAddress, setTokenAddress] = useState<string>("");

  return (
    <div className="overflow-x-hidden pt-5 mb-20 pl-[1.69rem] pr-10 sm:pr-16 xl:border-t xl:border-[#424242]">
      <LatestPools />
      <main className="mt-[2.5rem] text-white ">
        <section className="bg-[#1D1C20] w-full pb-[1.19rem] rounded-[0.625rem] px-6 border border-[#26272B] pt-8">
          <div className="flex justify-between items-center mb-10">
            <h1 className="tracking-[-0.015rem] text-2xl text-white">
              Create new airdrop
            </h1>
            <p className="text-[#A4D0F2] tracking-[-0.01rem]">
              Create airdop fee <span className=" text-[#F3CE92]">1 BNB</span>
            </p>
          </div>
          {/* error */}
          <div className="mb-6">
            <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
              <span className="text-[#F04438]">(*) </span>is required field
            </p>
            {error && (
              <p className="text-[#F04438] text-sm sm:text-base">{error}</p>
            )}
          </div>
          {currentStep === 1 && (
            <StepOne
            currentStep={currentStep}
              tokenAddress={tokenAddress}
              setError={setError}
              setCurrentStep={setCurrentStep}
              setTokenAddress={setTokenAddress}
            />
          )}
          {currentStep === 2 && <StepTwo setError={setError} />}
        </section>
        <p className="mt-8 text-[0.875rem] text-[#D1D1D6] max-w-[44.6rem]">
          Disclaimer: Solimax Presale will never endorse or encourage that you
          invest in any of the projects listed and therefore, accept no
          liability for any loss occasioned. It is the user(s) responsibility to
          do their own research and seek financial advice from a professional.
          More information about (DYOR) can be found via{" "}
          <span className="underline">Binance Academy</span>.
        </p>
      </main>
    </div>
  );
}
