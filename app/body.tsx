"use client";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Wallet from "@/components/Wallet";
import Modal from "@/components/Modal";
import { GlobalContext } from "@/context/Context";
import Image from "next/image";
import { useState } from "react";
import useDeployTokenMutation from "@/hooks/useContractMutations/useDeployToken";
import CustomSelect from "@/components/launchpad/CustomSelect";
import CustomInput from "@/components/CustomInput";
import { BridgeProps, ButtonProps } from "@/types";

export default function BodyComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    error,
    setError,
    nameOfToken,
    setNameOfToken,
    toggleModal,
    modalHeader,
    // query,
    // setQuery,
    handleSearchQuery,
    bridgeSourceChains,
    setModalHeader,
    bridgeDestinationLogo,
    bridgeSourceLogo,
    setBridgeDestinationLogo,
    setBridgeSourceLogo,
    bridgeSourceChain,
    bridgeDestinationChain,
    destinationChainOptions,
    sourceChainOptions,
    setBridgeDestinationChain,
    setBridgeSourceChain,
  } = GlobalContext();
  const [query, setQuery] = useState<string>("");
  const [selectedTokenType, setSelectedTokenType] =
    useState<string>("Standard token");
  const [symbol, setSymbol] = useState<string>("");
  const [decimals, setDecimals] = useState<number>(0);
  const [tokenSupply, setTokenSupply] = useState<number>(0);
  const deployFn = useDeployTokenMutation();
  const tokenTypes = [
    {
      value: "Standard token",
    },
  ];

  const handleQueryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery?.(value);
    // console.log("query:", query)
    handleSearchQuery?.(value);
  };

  return (
    <main className="font-questrial grid xl:grid-cols-[16.5rem_auto]">
      {/* {isModalShowing === true && <Modal />} */}
      <ScrollToTop />
      <Navbar />
      <section className="overflow-x-hidden">
        <div className="hidden xl:flex justify-end">
          <Wallet
            containerClassName="flex items-center gap-[0.62rem] justify-end w-full xl:px-20 xl:pt-8 xl:pb-[1.31rem] xl:border-b xl:border-[#424242]"
            className="rounded-[3.125rem] p-[0.42rem] border-[0.5px] w-[9.38rem] h-10 bg-[#454FDA] text-white border-[#424242]"
          />
        </div>
        {children}
        {modalHeader === "Create token" && (
          <Modal modalHeader="Create token">
            <div className="mt-[1.62rem]">
              <p className="mb-6 text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
                <span className="text-[#F04438]">(*) </span>is required field
              </p>
              {error && (
                <p className="text-[#F04438] mt-4 text-sm sm:text-base">
                  {error}
                </p>
              )}
            </div>
            <form className="flex flex-col gap-6">
              {/* TOKEN TYPE */}
              <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
                <p>
                  Token type<span className="text-[#F04438]">*</span>
                </p>
                <CustomSelect
                  options={tokenTypes}
                  header={selectedTokenType}
                  setHeader={setSelectedTokenType}
                />
                {/* create pool fee */}
                <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
                  Create token fee:{" "}
                  <span className="text-[#F3CE92]">0.2 BNB</span>
                </p>
              </div>

              {/* Name of token */}
              <CustomInput
                id="nameOfToken"
                className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
                inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Name of token"
                type="text"
                placeholder="Eg. Optimism"
                value={nameOfToken}
                onChange={(e) => {
                  setNameOfToken?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
              {/* Symbol */}
              <CustomInput
                id="symbol"
                className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
                inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Symbol"
                type="text"
                placeholder="Eg. OP"
                value={symbol}
                onChange={(e) => {
                  setSymbol?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
              {/* Decimals */}
              <CustomInput
                id="decimals"
                className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
                inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Decimals"
                type="number"
                placeholder="Eg. 18"
                value={decimals}
                onChange={(e) => {
                  setDecimals?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
              {/* Token Supply */}
              <CustomInput
                id="tokenSupply"
                className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
                inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Token Supply"
                type="number"
                placeholder="Eg. 1000000000"
                value={tokenSupply}
                onChange={(e) => {
                  setTokenSupply?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
              <div className="flex gap-2 md:items-center ml-auto w-fit">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModal?.();
                    document.body.style.overflow = "unset";
                  }}
                  className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
                >
                  Back
                </button>
                <button
                  disabled={
                    nameOfToken === "" ||
                    symbol === "" ||
                    decimals === 0 ||
                    tokenSupply === 0
                  }
                  onClick={(e: any) => {
                    console.log("clicked");
                    e.preventDefault();

                    const deployProps: any = {
                      nameOfToken,
                      symbol,
                      totalSupply: Number(tokenSupply),
                    };
                    console.log(deployProps);
                    deployFn.mutate(deployProps);
                    console.log(deployFn.error);
                  }}
                  className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[10.625rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
                >
                  {deployFn?.isLoading ? "Loading" : "Create token"}
                </button>
              </div>
            </form>
          </Modal>
        )}
        {modalHeader === "Select source chain" && (
          <Modal modalHeader="Select source chain">
            <div className="flex flex-col gap-6 mt-6">
              <CustomInput
                id="query"
                className=" text-[#E4E4E7]"
                inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label=""
                type="text"
                placeholder="Search chain by name"
                value={query}
                onChange={handleQueryInputChange}
                isRequired={false}
              />
              {bridgeSourceChains?.length > 0 ? (
                <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-white">
                  {bridgeSourceChains?.map(
                    (chain: BridgeProps, index: number) => (
                      <button
                        key={index}
                        className={`flex items-center gap-3 bg-[#26272B] rounded-2xl py-[0.81rem] px-4 w-full md:px-8 tracking-[-0.01rem] whitespace-nowrap`}
                        onClick={() => {
                          setBridgeSourceChain?.(chain.value);
                          setBridgeSourceLogo?.(chain.logo);
                          toggleModal?.();
                        }}
                      >
                        <Image
                          width={20}
                          height={20}
                          src={chain.logo}
                          alt="chain logo"
                        />
                        {chain.value}
                      </button>
                    )
                  )}
                </section>
              ) : (
                <p className="text-white text-center">No results found</p>
              )}
            </div>
          </Modal>
        )}
        {/* {modalHeader === "Select destination chain" && (
          <Modal modalHeader="Select destination chain">
            <div className="flex flex-col gap-6 mt-6">
              <CustomInput
                id="query"
                className=" text-[#E4E4E7]"
                inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label=""
                type="text"
                placeholder="Search chain by name"
                value={query}
                onChange={(e) => {
                  setQuery?.(e.target.value);
                }}
                isRequired={false}
              />
              <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-white">
                {destinationChainOptions?.map(
                  (chain: BridgeProps, index: number) => (
                    <button
                      key={index}
                      className={`flex items-center gap-3 bg-[#26272B] rounded-2xl py-[0.81rem] px-4 w-full md:px-8 tracking-[-0.01rem] whitespace-nowrap`}
                      onClick={() => {
                        setBridgeDestinationChain?.(chain.value);
                        toggleModal?.();
                      }}
                    >
                      <Image
                        width={20}
                        height={20}
                        src={chain.logo}
                        alt="chain logo"
                      />
                      {chain.value}
                    </button>
                  )
                )}
              </section>
            </div>
          </Modal>
        )} */}
      </section>
    </main>
  );
}
