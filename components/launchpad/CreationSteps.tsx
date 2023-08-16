import { useState } from "react";

type Props = {
  currentStep: number;
  setCurrentStep(stepNumber: number): void; // function to set the step in which we are currently at.
  tokenAddress: string;
  error: string;
  setError: (err: string) => void;
};

export default function CreationSteps({
  currentStep,
  setCurrentStep,
  tokenAddress,
  error,
  setError,
  presaleRate,
  softcap,
  hardcap,
  minBuy,
  maxBuy,
  refundType,
  router,
  liquidity,
  listingRate,
  startDate,
  endDate,
  liquidityLockup,
  firstRelease,
  vestingPeriod,
  presaleToken,
}: FormProps) {
  const steptitles = [
    {
      id: "verify-your-token",
      tag: 1,
      title: "Verify your token",
      description: "Enter the token address and verify",
      completed: true,
    },
    {
      id: "deFi-launchpad",
      tag: 2,
      title: "DeFi Launchpad",
      description: "Enter the launchpad information",
      completed: false,
    },
    {
      id: "additional-info",
      tag: 3,
      title: "Add Additional Info",
      description: "Let people know who you are",
      completed: false,
    },
    {
      id: "finish",
      tag: 4,
      title: "Finish",
      description: "Review your information and submit your presale",
      completed: false,
    },
  ];

  return (
    <section className="bg-[#1D1C20] rounded-[0.625rem] border border-[#26272B] ">
      {steptitles?.map((item) => (
        <div
          key={item?.id}
          className={`${
            currentStep >= item.tag
              ? "border-b-2 border-b-[#F3CE92] lg:border-l-2 lg:border-l-[#F3CE92] lg:border-b-[#26272B]"
              : ""
          } ${
            currentStep === 1 ? "rounded-t-[0.625rem]" : ""
          } flex items-center gap-2 p-6 border-b border-[#26272B] cursor-pointer`}
          onClick={() => {
            if (tokenAddress === "") {
              setCurrentStep?.(1);
              if (currentStep === 1) {
                setError?.("Token address must be entered");
                console.log(error);
              } else {
                setError?.("");
              }
            } else if (
              currentStep === 2 &&
              !presaleRate &&
              !softcap &&
              !hardcap &&
              !minBuy &&
              !maxBuy &&
              !refundType &&
              !router &&
              !liquidity &&
              !listingRate &&
              !startDate &&
              !endDate &&
              !liquidityLockup &&
              !firstRelease &&
              !vestingPeriod &&
              !presaleToken
            ) {
              console.log(currentStep);
              setError?.("Fill all the required fields");
              setCurrentStep?.(2);
            } else {
              setCurrentStep?.(item.tag);
            }
          }}
        >
          <div
            className={`w-8 h-8 flex items-center justify-center p-[0.625rem] rounded-[3.125rem] ${
              currentStep >= item.tag ? "bg-[#454FDA]" : "bg-[#70707B]"
            }`}
          >
            {item.tag}.
          </div>
          <div className="flex flex-col ">
            <h1 className="tracking-[-0.01rem]">{item?.title}</h1>
            <p className="text-[#D1D1D6] tracking-[-0.00813rem] text-[0.8125rem]">
              {item?.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
