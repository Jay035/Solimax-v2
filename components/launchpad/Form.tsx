import { useState } from "react";
import CustomSelect from "./CustomSelect";
import CustomInput from "../CustomInput";
import StepOne from "./presale/StepOne";
import StepTwo from "./presale/StepTwo";

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
  firstRelease,
  presaleToken,
  vestingPeriod,
  setVestingPeriod,
  setPresaleToken,
  setFirstRelease,
  setStartDate,
  setEndDate,
  setLiquidityLockup,
  setSelectedTab,
  setListingRate,
  setRouter,
  setSoftcap,
  setHardcap,
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
          firstRelease={firstRelease}
          presaleToken={presaleToken}
          vestingPeriod={vestingPeriod}
          listingRate={listingRate}
          liquidity={liquidity}
          setPresaleRate={setPresaleRate}
          setHardcap={setHardcap}
          setLiquidity={setLiquidity}
          setVestingPeriod={setVestingPeriod}
          setPresaleToken={setPresaleToken}
          setFirstRelease={setFirstRelease}
          setEndDate={setEndDate}
          setListingRate={setListingRate}
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
    </section>
  );
}
