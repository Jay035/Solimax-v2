"use client";
import { useState } from "react";
import LatestPools from "@/components/LatestPools";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import { GlobalContext } from "@/context/Context";

type Props = {};

export default function CreateAirdrop({}: Props) {
  const { airdropCurrentStep } = GlobalContext();
  const [error, setError] = useState<string>("");

  return (
    <div className="overflow-x-hidden pt-5 mb-20 ml-[1.69rem]">
      {/* <LatestPools /> */}
      <main className="mt-[2.5rem] text-white mr-[1.69rem] xl:mr-10">
        <section className="bg-[#1D1C20] w-full pb-[1.19rem] rounded-[0.625rem] px-6 border border-[#26272B] pt-8">
          <div className="flex flex-col md:flex-row justify-between gap-2 md:items-center mb-10">
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
          {airdropCurrentStep === 1 && <StepOne setError={setError} />}
          {airdropCurrentStep === 2 && <StepTwo setError={setError} />}
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
