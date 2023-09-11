"use client";
import { useState } from "react";
import LatestPools from "@/components/LatestPools";
import CustomInput from "@/components/CustomInput";

type Props = {};

export default function CreateAirdrop({}: Props) {
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
          <div className="mb-6">
            <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
              <span className="text-[#F04438]">(*) </span>is required field
            </p>
            {error && (
              <p className="text-[#F04438] text-sm sm:text-base">{error}</p>
            )}
          </div>
          <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
            <CustomInput
              id="token-address"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Token address"
              type="text"
              placeholder="Enter sale title"
              value={tokenAddress}
              onChange={(e) => {
                setTokenAddress?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
            {/* create pool fee */}
            <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              Create sale fee <span className="text-[#F3CE92]">1BNB</span>
            </p>
          </div>
          <div className="flex mt-8">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                // if (name === "") {
                //   setError?.("Name must be entered");
                // } else {
                //   handleNextStep?.(e);
                // }
                //   handleNextStep?.(e);
              }}
              className="bg-[#C38CC3] text-center disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
            >
              Next
            </button>
          </div>
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
