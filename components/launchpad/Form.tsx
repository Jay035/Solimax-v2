import { useState } from "react";
import CustomSelect from "./CustomSelect";
import CustomInput from "../CustomInput";
import StepOne from "./presale/StepOne";
import StepTwo from "./presale/StepTwo";

// type FormProps = {
//   currencyOptions: any;
//   currentStep: number;
//   tokenAddress: string;
//   presaleRate: number;
//   softcap?: string;
//   minBuy?: string;
//   refundType?: string;
//   liquidity?: string;
//   selectedCurrency: string;
//   error: string;
//   setSoftcap?: (err: string) => void;
//   setMinBuy?: (err: string) => void;
//   setRefundType?: (err: string) => void;
//   setLiquidity?: (err: string) => void;
//   setError: (err: string) => void;
//   setTokenAddress?: (address: string) => void;
//   setPresaleRate?: (rate: number) => void;
//   setSelectedCurrency?: (address: string) => void;
//   setCurrentStep: (step: number) => void;
// };

export default function Form({
  currentStep,
  currencyOptions,
  tokenAddress,
  setTokenAddress,
  softcap,
  minBuy,
  maxBuy,
  router,
  refundType,
  liquidity,
  presaleRate,
  listingRate,
  tabs,
  selectedTab,
  selectedCurrency,
  error,
  startDate,
  endDate,
  liquidityLockup,
  setStartDate,
  setEndDate,
  setLiquidityLockup,
  setSelectedTab,
  setListingRate,
  setRouter,
  setSoftcap,
  setLiquidity,
  setMaxBuy,
  setMinBuy,
  setRefundType,
  setPresaleRate,
  setSelectedCurrency,
  setCurrentStep,
  setError,
}: FormProps) {
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  return (
    <section>
      {/* {currentStep === 1 && (
        <div className="">
          <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
            <span className="text-[#F04438]">(*) </span>is required field
          </p>
          <p className="text-[#F04438] mt-4 text-sm sm:text-base">
            {error && error}
          </p>
        </div>
      )} */}

      {/* ------------------------------------- */}
      {/* START OF STEP 1 */}
      {currentStep === 1 && (
        <StepOne
          currentStep={currentStep}
          error={error}
          setCurrentStep={setCurrentStep}
          tokenAddress={tokenAddress}
          setError={setError}
          setTokenAddress={setTokenAddress}
          options={currencyOptions}
          handleNextStep={handleNextStep}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
      )}
      {/* END OF STEP 1 */}
      {/* ------------------------------------- */}

      {/* ------------------------------------- */}
      {/* START OF STEP 2 */}
      {currentStep === 2 && (
        <StepTwo
          tabs={tabs}
          minBuy={minBuy}
          maxBuy={maxBuy}
          softcap={softcap}
          presaleRate={presaleRate}
          refundType={refundType}
          currentStep={currentStep}
          startDate={startDate}
          liquidityLockup={liquidityLockup}
          endDate={endDate}
          error={error}
          setEndDate={setEndDate}
          handlePreviousStep={handlePreviousStep}
          handleNextStep={handleNextStep}
          setStartDate={setStartDate}
          setLiquidityLockup={setLiquidityLockup}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setRefundType={setRefundType}
          setSoftcap={setSoftcap}
          setMaxBuy={setMaxBuy}
          setMinBuy={setMinBuy}
          setCurrentStep={setCurrentStep}
          tokenAddress={tokenAddress}
          router={router}
          setRouter={setRouter}
          setError={setError}
          setTokenAddress={setTokenAddress}
          options={currencyOptions}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
      )}
      {/* CTA buttons */}

      {/* <div className="flex gap-[3.16rem] items-center">
        {currentStep > 1 && (
          <button
            onClick={(e: any) => {
              e.preventDefault();
              handlePreviousStep();
            }}
            className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
          >
            Back
          </button>
        )}
        <button
          onClick={(e: any) => {
            e.preventDefault();
            if (tokenAddress === "") {
              setError("Token address must be entered");
            } else {
              handleNextStep();
            }
          }}
          className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
        >
          Next
        </button>
      </div> */}
    </section>
  );
}
