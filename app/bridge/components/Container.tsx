"use client";
import CustomInput from "@/components/CustomInput";
import Modal from "@/components/Modal";
import Wallet from "@/components/Wallet";
import CustomSelect from "@/components/launchpad/CustomSelect";
import { GlobalContext } from "@/context/Context";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {};

export default function Container({}: Props) {
  const {
    isWalletConnected,
    setIsWalletConnected,
    toggleModal,
    setModalHeader,
    bridgeDestinationChain,
    bridgeSourceChain,
  } = GlobalContext();
  const pathname = usePathname();
  const [amount, setAmount] = useState("");
  const [asset, setAsset] = useState("SLM");
  const [destinationChain, setDestinationChain] = useState("Fantom");
  const [sourceChain, setSourceChain] = useState("BSC Chain");

  const assetOptions = [
    {
      id: 1,
      value: "SLM",
    },
  ];

  return (
    <section className="w-full max-w-[43rem] mx-auto text-left md:min-w-[12rem] bg-gradient-to-b from-[#70707BB2] to-[#70707B4D] p-[0.07rem] rounded-[0.62rem]">
      {/* <Modal modalHeader="Select source chain">
        <form className="flex flex-col gap-6">
          <div className="flex gap-2 md:items-center ml-auto w-fit">
            <button
              onClick={() => {
                toggleModal?.();
                document.body.style.overflow = "unset";
              }}
              className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
            >
              Back
            </button>
            <button
              onClick={(e: any) => {
                alert("clicked");
                e.preventDefault();
              }}
              className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[10.625rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
            ></button>
          </div>
        </form>
      </Modal> */}
      <div className="bg-[#1D1C20] px-5 py-4 rounded-[0.625rem] w-full flex flex-col gap-6">
        <h2 className="border-b border-[#3F3F46] pb-[1.13rem]">
          Migrate your tokens
        </h2>
        {/* ASSET */}
        <div className="flex flex-col gap-[0.62rem]">
          <h3>Select Asset</h3>
          <div className="p-[0.07rem] w-full bg-gradient-to-b from-[#51525C] to-[#414149] rounded-[0.625rem]">
            <div className="relative rounded-[0.625rem] py-[0.88rem] px-[1.19rem] w-full cursor-default bg-[#26272b]">
              <div className="dropdown-header flex items-center gap-1">
                <Image
                  width="0"
                  height="0"
                  className="w-[2.125rem] h-[2.125rem]"
                  src="/icons/logo-frame.svg"
                  alt="check icon"
                />
                SLM
              </div>
            </div>
          </div>
        </div>
        {/* SWAP */}
        <div className="flex justify-between flex-col md:flex-row items-center gap-[1.4rem]">
          <div className="flex flex-col gap-[0.62rem] w-full">
            <h3>From</h3>
            {/* <CustomSelect
              options={originChainOptions}
              header={originChain}
              setHeader={setOriginChain}
            /> */}
            {/* SOURCE CHAIN */}
            <div
              onClick={() => {
                toggleModal?.();
                setModalHeader?.("Select source chain");
              }}
              className="p-[0.07rem] w-full bg-gradient-to-b from-[#51525C] to-[#414149] rounded-[0.625rem]"
            >
              <div className="custom-dropdown">
                <div className="dropdown-header flex items-center gap-1">
                  {pathname === "/bridge" && sourceChain === "BSC Chain" && (
                    <Image
                      width="0"
                      height="0"
                      className="w-[2.125rem] h-[2.125rem]"
                      src="/icons/bsc-chain.svg"
                      alt="check icon"
                    />
                  )}
                  {bridgeSourceChain}
                </div>
              </div>
            </div>
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
            {/* <CustomSelect
              options={destinationChainOptions}
              header={destinationChain}
              setHeader={setDestinationChain}
            /> */}
            {/* DESTINATION CHAIN */}
            <div className="p-[0.07rem] w-full bg-gradient-to-b from-[#51525C] to-[#414149] rounded-[0.625rem]">
              <div className="relative rounded-[0.625rem] py-[0.88rem] px-[1.19rem] w-full cursor-default bg-[#26272b]">
                <div className="dropdown-header flex items-center gap-1">
                  {pathname === "/bridge" && destinationChain === "Fantom" && (
                    <Image
                      width="0"
                      height="0"
                      className="w-[2.125rem] h-[2.125rem]"
                      src="/icons/fantom.svg"
                      alt="check icon"
                    />
                  )}
                  {bridgeDestinationChain}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* AMOUNT */}
        <CustomInput
          id="amount"
          className="flex flex-col gap-[0.62rem] "
          inputClassName="bg-[#26272B] outline-none tracking-[-0.00875rem] text-[0.875rem]"
          label="Amount"
          balance="13700000"
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
          <Wallet
            containerClassName=""
            className="w-full flex items-center justify-center p-[0.625rem] border-[0.5px] mt-[0.7rem] border-[#424242] rounded-[0.625rem] h-14 md:h-16 bg-[#454FDA]"
          />
        )}
      </div>
    </section>
  );
}
