"use client";
import CustomInput from "@/components/CustomInput";
import Modal from "@/components/Modal";
import { useEthersSigner, useEthersProvider } from "@/web3/adapters";
import Wallet from "@/components/Wallet";
import CustomSelect from "@/components/launchpad/CustomSelect";
import { GlobalContext } from "@/context/Context";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import BridgeContract from "@/web3/BridgeContract";
import { BridgeConfigurations } from "@/web3/config";

type Props = {};

export default function Container({}: Props) {
  const { chain } = useNetwork();
  const signer = useEthersSigner();
  const provider = useEthersProvider();
  const [bridgingChain, setBridgingChain] = useState(10);
  const [toChain, setToChain] = useState(0);
  const [recieveAmount, setRecieveAmount] = useState(0);
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const time = Math.floor(Date.now() / 1000).toString();
  const {
    // isWalletConnected,
    setIsWalletConnected,
    toggleModal,
    setModalHeader,
    bridgeDestinationChain,
    bridgeSourceChain,
    bridgeSourceLogo,
  } = GlobalContext();
  const pathname = usePathname();
  const [amount, setAmount] = useState(0);
  const [asset, setAsset] = useState("SLM");
  const [destinationChain, setDestinationChain] = useState("Fantom");
  const [sourceChain, setSourceChain] = useState("BSC Chain");

  useEffect(() => {
    if (isConnected) {
      console.log({ bridgeSourceChain });
      if (bridgeSourceChain === "BSC Chain") {
        setBridgingChain(56);
        setToChain(250);
      }
      if (bridgeSourceChain === "Optimism") {
        setToChain(250);
        setBridgingChain(10);
      }
      if (bridgeSourceChain === "Kava") {
        setToChain(250);
        setBridgingChain(2222);
      }
      if (bridgeSourceChain === "Fantom") {
        setToChain(250);
        setBridgingChain(250);
      }
      if (bridgeSourceChain === "Fantom (Solimax v1)") {
        setToChain(250);
        setBridgingChain(250);
      }
    }
  }, [bridgeSourceChain]);
  const BscBridgeObject = new BridgeContract({
    nlu: BridgeConfigurations.bsc.solimax,
    bridge: BridgeConfigurations.bsc.bridge,
    signer: signer!,
    provider: provider,
  });
  const OptBridgeObject = new BridgeContract({
    nlu: BridgeConfigurations.opt.solimax,
    bridge: BridgeConfigurations.opt.bridge,
    signer: signer!,
    provider,
  });
  const KavaBridgeObject = new BridgeContract({
    nlu: BridgeConfigurations.kava.solimax,
    bridge: BridgeConfigurations.kava.bridge,
    signer: signer!,
    provider,
  });
  const FantomV1BridgeObject = new BridgeContract({
    nlu: BridgeConfigurations.ftmV1.solimax,
    bridge: BridgeConfigurations.ftmV1.bridge,
    signer: signer!,
    provider,
  });

  const Bridger = async (bridgeObject: BridgeContract, toChain: string) => {
    const allowanceIsSatisfied = await bridgeObject.checkAllowance();
    if (allowanceIsSatisfied) {
      return await bridgeObject
        .LockToken(recieveAmount.toString(), toChain)
        .then((res) => {
          alert("Token is Bridging..kindly wait" + res.hash);
          return res;
        })
        .catch((err) => {
          alert("Bridging Error Occuredd");
          console.log(err);
          return;
        });
    } else {
      return await bridgeObject
        .approve()
        .then(async (res) => {
          alert("Approved Succesfully");
          await bridgeObject
            .LockToken(recieveAmount.toString(), toChain)
            .then((res) => {
              alert("Token is Bridging..kindly wait" + res.hash);
              return res;
            })
            .catch((err) => {
              alert("Bridging Error Occuredd");
              console.log(err);
              return;
            });
        })
        .catch((err) => {
          console.log(err);
          alert("Error  Occured");
        });
    }
  };

  const BridgerMap: any = {
    "10": async (bridgeTxId: string) => {
      return await Bridger(OptBridgeObject, bridgeTxId);
    },
    "2222": async (bridgeTxId: string) => {
      return await Bridger(KavaBridgeObject, bridgeTxId);
    },
    "250": async (bridgeTxId: string) => {
      return await Bridger(FantomV1BridgeObject, bridgeTxId);
    },
    "56": async (bridgeTxId: string) => {
      return await Bridger(BscBridgeObject, bridgeTxId);
    },
  };
  // const BridgeToOptObject = new BridgeContract({
  //   nlu: BridgeConfigurations.GOERLI.nlu,
  //   bridge: BridgeConfigurations.GOERLI.bridge,
  //   signer: signer,
  //   provider: provider,
  // });

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
                  <Image
                    width="0"
                    height="0"
                    className="w-[2.125rem] h-[2.125rem]"
                    src={bridgeSourceLogo!}
                    alt="check icon"
                  />
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
          balance="0"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => {
            setAmount?.(e.target.value);
            setRecieveAmount(e.target.value);
            //   setError?.("");
          }}
          isRequired={false}
        />
        {isConnected ? (
          <button
            onClick={async () => {
              const txIndentifier = time.toString() + "-" + toChain.toString();
              console.log({ txIndentifier });
              console.log({ bridgingChain, recieveAmount });
              switchNetwork?.(bridgingChain);
              await BridgerMap[bridgingChain.toString()](txIndentifier);
            }}
            disabled={amount === 0}
            className="w-full flex items-center justify-center p-[0.625rem] border-[0.5px] mt-[0.7rem] border-[#424242] rounded-[0.625rem] h-14 md:h-16 bg-[#454FDA] disabled:bg-[#454FDA]/80"
          >
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
