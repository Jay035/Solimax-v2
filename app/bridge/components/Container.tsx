"use client";
import CustomInput from "@/components/CustomInput";
import Wallet from "@/components/Wallet";
import CustomSelect from "@/components/launchpad/CustomSelect";
import { GlobalContext } from "@/context/Context";
import Image from "next/image";
import { useState } from "react";

type Props = {};

export default function Container({}: Props) {
  const { isWalletConnected, setIsWalletConnected } = GlobalContext();
  const [amount, setAmount] = useState("");
  const [asset, setAsset] = useState("SLM");
  const [destinationChain, setDestinationChain] = useState("Fantom");
  const [originChain, setOriginChain] = useState("BSC Chain");

  const assetOptions = [
    {
      id: 1,
      value: "SLM",
    },
  ];

  const destinationChainOptions = [
    {
      id: 1,
      value: "Fantom",
    },
  ];

  const originChainOptions = [
    {
      id: 1,
      value: "BSC Chain",
    },
  ];
  return (
    <section className="w-full max-w-[43rem] mx-auto text-left md:min-w-[12rem] bg-gradient-to-b from-[#70707BB2] to-[#70707B4D] p-[0.07rem] rounded-[0.62rem]">
      <div className="bg-[#1D1C20] px-5 py-4 rounded-[0.625rem] w-full flex flex-col gap-6">
        <h2 className="border-b border-[#3F3F46] pb-[1.13rem]">
          Migrate your tokens
        </h2>
        {/* ASSET */}
        <div className="flex flex-col gap-[0.62rem]">
          <h3>Select Asset</h3>
          <CustomSelect
            options={assetOptions}
            header={asset}
            setHeader={setAsset}
          />
        </div>
        {/* SWAP */}
        <div className="flex justify-between flex-col md:flex-row items-center gap-[1.4rem]">
          <div className="flex flex-col gap-[0.62rem] w-full">
            <h3>From</h3>
            <CustomSelect
              options={originChainOptions}
              header={originChain}
              setHeader={setOriginChain}
            />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <h3 className="text-transparent hidden md:inline"> from</h3>
            <div className="w-fit h-fit bg-gradient-to-b from-[#70707BB2] to-[#70707B4D] p-[0.07rem] rounded-full">
              <div className="bg-[#1D1C20] flex items-center rounded-full justify-center w-[3.9rem] h-[3.9rem]">
                <Image
                  width="0"
                  height="0"
                  className="w-[1.125rem] h-[1.125rem]"
                  src="/icons/arrow-swap-horizontal.svg"
                  alt="swap icon"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[0.62rem] w-full">
            <h3>To</h3>
            <CustomSelect
              options={destinationChainOptions}
              header={destinationChain}
              setHeader={setDestinationChain}
            />
          </div>
        </div>
        {/* AMOUNT */}
        <CustomInput
          id="amount"
          className="flex flex-col gap-[0.62rem] "
          inputClassName="bg-[#26272B] outline-none tracking-[-0.00875rem] text-[0.875rem]"
          label="Amount"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => {
            setAmount?.(e.target.value);
            //   setError?.("");
          }}
          isRequired={false}
        />
        {isWalletConnected ? (
          <button className="w-full flex items-center justify-center p-[0.625rem] border-[0.5px] mt-[0.7rem] border-[#424242] rounded-[0.625rem] h-14 md:h-16 bg-[#454FDA]">
            Bridge Asset
          </button>
        ) : (
          <Wallet containerClassName="" className="w-full flex items-center justify-center p-[0.625rem] border-[0.5px] mt-[0.7rem] border-[#424242] rounded-[0.625rem] h-14 md:h-16 bg-[#454FDA]" />
        )}
      </div>
    </section>
  );
}
