import CustomInput from "@/components/CustomInput";
import ButtonGroup from "../ButtonGroup";
import CustomSelect from "../CustomSelect";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";

export default function StepTwo() {
  const {
    softcap,
    presaleRate,
    minBuy,
    maxBuy,
    hardcap,
    error,
    refundType,
    router,
    liquidity,
    listingRate,
    startDate,
    endDate,
    liquidityLockup,
    firstRelease,
    presaleToken,
    vestingPeriod,
    totalSellingAmount,
    setTotalSellingAmount,
    setVestingPeriod,
    setPresaleToken,
    setFirstRelease,
    handleNextStep,
    handlePreviousStep,
    setStartDate,
    setEndDate,
    setLiquidityLockup,
    setListingRate,
    setLiquidity,
    setRouter,
    setRefundType,
    setHardcap,
    setMinBuy,
    setMaxBuy,
    setSoftcap,
    setPresaleRate,
    setError,
  } = GlobalContext();

  const routerOptions = [
    {
      value: "Pancakeswap",
      id: 1,
    },
    {
      value: "ApeSwap",
      id: 2,
    },
    {
      value: "MDex",
      id: 3,
    },
  ];

  const [isMaxContributionChecked, setIsMaxContributionChecked] =
    useState(false);
  const [isBuyBackChecked, setIsBuyBackChecked] = useState(false);

  const handleCheckboxChange = (event: any) => {
    // setIsChecked(event.target.checked);
    if (event.target.checked) {
      // Run your function when checkbox is checked
      console.log("Checkbox is checked!");
      // You can replace the console.log with your desired function call
    }
  };
  return (
    <section className="flex flex-col gap-6">
      {/* IST CARD  */}
      <div className="bg-[#1D1C20] pb-[1.19rem] rounded-[0.625rem] px-6 border border-[#26272B] pt-8 text-white">
        <ButtonGroup />
        <div className="mt-4">
          <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
            <span className="text-[#F04438]">(*) </span>is required field
          </p>
          {error && (
            <p className="text-[#F04438] mt-4 text-sm sm:text-base">{error}</p>
          )}
        </div>
        <form className="flex flex-col gap-6 mt-4">
          {/* Presale rate */}
          <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
            <CustomInput
              id="totalSellingAmount"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Total Selling Amount"
              type="number"
              placeholder="0"
              value={totalSellingAmount}
              onChange={(e) => setTotalSellingAmount?.(e.target.value)}
              isRequired={true}
            />
            {/* create pool fee */}
            <span className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              If I spend 1 BNB how many tokens will I receive?
            </span>
          </div>
          {/* WHITELIST */}
          <div className="flex flex-col gap-4" role="fee-options">
            <h3 className="text-base text-[#E4E4E7] tracking-[-0.01rem]">
              Whitelist
            </h3>
            <label
              htmlFor="disable"
              className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
            >
              <input
                className="w-6 h-6 accent-[#A4D0F2]"
                type="radio"
                defaultChecked
                name="whitelist"
                id="disable"
              />
              Disable
            </label>
            <label
              htmlFor="enable"
              className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
            >
              <input
                className="w-6 h-6 accent-[#A4D0F2]"
                type="radio"
                name="whitelist"
                id="enable"
              />
              Enable
            </label>
            <span className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              You can enable/disable whitelist anytime.
            </span>
          </div>
          {/* SOFT CAP */}
          <div className="">
            <CustomInput
              id="soft-cap"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Softcap (BNB)"
              type="number"
              placeholder="0"
              value={softcap}
              onChange={(e) => {
                setSoftcap?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />

            <label className=" text-[0.875rem] tracking-[-0.00875rem] mt-3 flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="setting-max-contribution"
                id="setting-max-contribution"
                className="appearance-none h-6 w-6 bg-[#26272B] border rounded border-[#efefef] checked:bg-[#A4D0F2] checked:border-transparent focus:outline-none"
                checked={isMaxContributionChecked}
                onChange={(event: any) => {
                  setIsMaxContributionChecked(event.target.checked);
                }}
              />
              <span className="text-[#F4F4F5]">Setting max contribution?</span>
            </label>
          </div>

          {/* ROUTER */}
          <div className=" flex flex-col gap-[0.62rem]">
            <h3>
              Router<span className="text-[#F04438]">*</span>
            </h3>
            <CustomSelect
              options={routerOptions}
              header={router}
              setHeader={setRouter}
            />
          </div>
          {/* LIQUIDITY */}
          <div className="">
            <CustomInput
              id="liquidity"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Liquidity (%)"
              type="number"
              placeholder="0"
              value={liquidity}
              onChange={(e) => {
                setLiquidity?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
            {/* <label
              htmlFor="setting-max-contribution"
              className="label-container"
              // className="relative text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] mt-3 flex items-center gap-2"
            >
              <input
                className="input w-6 h-6 accent-[#A4D0F2] rounded-lg invisible"
                type="checkout"
                name="setting-max-contribution"
                id="setting-max-contribution"
                onChange={handleCheckboxChange}
              />
              <span className="checkmark bg-[#26272B] w-6 h-6"></span>
              Enable buyback?
            </label> */}
            <label className="text-[0.875rem] tracking-[-0.00875rem] mt-3 flex items-center gap-2 cursor-pointer">
              <span className="bg-gradient-to-b rounded from-[#51525c] to-[#28282a] p-0.5 w-fit h-fit">
                <input
                  type="checkbox"
                  name="enable-buyback"
                  id="enable-buyback"
                  className="appearance-none h-6 w-6 bg-[#26272B] checked:bg-[#A4D0F2]"
                  checked={isBuyBackChecked}
                  onChange={(event: any) => {
                    setIsBuyBackChecked(event.target.checked);
                  }}
                />
              </span>
              <span className="text-[#F4F4F5]">Enable buyback?</span>
            </label>
            {/* <div className=""></div> */}
          </div>
        </form>
      </div>
      <ul className="list-disc text-[#A4D0F2] text-xs tracking-[-0.0075rem] ml-3 mt-6">
        <li>
          Enter the percentage of raised funds that should be allocated to
          Liquidity on (Min 51%, Max 100%)
        </li>
        <li>
          If I spend 1 ETH on how many tokens will I receive? Usually this
          amount is lower than presale rate to allow for a higher listing price
          on
        </li>
      </ul>
      {/* 2ND CARD */}
      <div className="bg-[#1D1C20] pb-6 rounded-[0.625rem] px-6 border border-[#26272B] pt-8 text-white">
        <form className="flex flex-col gap-6">
          <section className="grid md:grid-cols-2 gap-6">
            {/* Start date (UTC) */}
            <CustomInput
              id="start-date"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Start date (UTC)"
              type="date"
              placeholder="0"
              value={startDate}
              onChange={(e) => {
                setStartDate?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
            {/* End date (UTC) */}
            <CustomInput
              id="end-date"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="End date (UTC)"
              type="date"
              placeholder="0"
              value={endDate}
              onChange={(e) => {
                setEndDate?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
          </section>
          <p className="text-[#E4E4E7] text-xs tracking-[-0.0075rem]">
            The duration between start time and end time must be less than 7
            days
          </p>
          {/* Liquidity lockup */}
          <CustomInput
            id="liquidity-Lockup"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Liquidity lockup (days)"
            type="number"
            placeholder="0"
            value={liquidityLockup}
            onChange={(e) => {
              setLiquidityLockup?.(e.target.value);
              setError?.("");
            }}
            isRequired={true}
          />

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-[1.163rem]">
            <p className="text-[#E4E4E7] text-base tracking-[-0.01rem]">
              Need <span className="text-[#F3CE92]">0 SLM</span> to create
              launchpad.
            </p>
            {/* back and next buttons */}
            <div className="flex gap-2 md:items-center">
              <button
                onClick={(e: any) => {
                  e.preventDefault();
                  handlePreviousStep?.(e);
                }}
                className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
              >
                Back
              </button>
              <button
                disabled={
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
                }
                onClick={(e: any) => {
                  e.preventDefault();
                  handleNextStep?.(e);
                  // if (tokenAddress === "") {
                  //   setError("Token address must be entered");
                  // } else {
                  //   handleNextStep();
                  // }
                }}
                className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
