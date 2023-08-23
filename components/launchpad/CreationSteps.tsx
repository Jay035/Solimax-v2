import { GlobalContext } from "@/context/Context";
import { useCallback, useState } from "react";

// type Props = {
//   currentStep: number;
//   setCurrentStep(stepNumber: number): void; // function to set the step in which we are currently at.
//   tokenAddress: string;
//   error: string;
//   setError: (err: string) => void;
// };

export default function CreationSteps({stepTitles} : any) {
  const {
    currentStep,
    error,
    tokenAddress,
    softcap,
    hardcap,
    minBuy,
    maxBuy,
    router,
    refundType,
    liquidity,
    listingRate,
    presaleRate,
    startDate,
    endDate,
    liquidityLockup,
    firstRelease,
    vestingPeriod,
    presaleToken,
    setCurrentStep,
    setError,
  } = GlobalContext();

  
  const toggleStep = (tag: number) => {
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
      setCurrentStep?.(tag);
      console.log(tag)
    }
  };

  return (
    <section className="bg-[#1D1C20] rounded-[0.625rem] border border-[#26272B] w-full">
      {stepTitles?.map((item : stepTitleProps) => (
        <div
          key={item?.id}
          className={`${
            currentStep >= item.tag
              ? "border-b-2 border-b-[#F3CE92] lg:border-l-2 lg:border-l-[#F3CE92] lg:border-b-[#26272B]"
              : ""
          } ${
            currentStep === 1 ? "rounded-t-[0.625rem]" : ""
          } flex items-center gap-2 p-6 border-b border-[#26272B] cursor-pointer`}
          onClick={() => toggleStep(item?.tag)}
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
