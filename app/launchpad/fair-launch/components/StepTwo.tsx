import CustomInput from "@/components/CustomInput";
import ButtonGroup from "@/components/ButtonGroup";
import CustomSelect from "@/components/launchpad/CustomSelect";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";
import { toast } from "react-toastify";
import Checkbox from "@/components/Checkbox";

export default function StepTwo() {
  const {
    handleFairlaunchNextStep,
    handleFairlaunchPreviousStep,
    fairlaunchTotalSellingAmount,
    fairlaunchSoftcap,
    fairlaunchRouter,
    fairlaunchLiquidity,
    fairlaunchLiquidityLockup,
    fairlaunchStartDate,
    fairlaunchEndDate,
    fairlaunchMaxContribution,
    isFairlaunchWhitelistDisabled,
    isFairlaunchWhitelistEnabled,
    fairlaunchBuyBackPercent,
    isFairlaunchMaxContributionChecked,
    isFairlaunchBuyBackChecked,
    setIsFairlaunchBuyBackChecked,
    setIsFairlaunchMaxContributionChecked,
    setFairlaunchBuyBackPercent,
    setIsFairlaunchWhitelistEnabled,
    setIsFairlaunchWhitelistDisabled,
    setFairlaunchMaxContribution,
    setFairlaunchEndDate,
    setFairlaunchStartDate,
    setFairlaunchLiquidityLockup,
    setFairlaunchLiquidity,
    setFairlaunchSoftcap,
    setFairlaunchRouter,
    setFairlaunchTotalSellingAmount,
  } = GlobalContext();

  const [error, setError] = useState("");
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

  const handleCheckboxChange = (event: any) => {
    if (event.target.checked) {
      console.log("Checkbox is checked!");
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
              inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Total selling amount"
              type="number"
              placeholder="0"
              value={fairlaunchTotalSellingAmount}
              onChange={(e) =>
                setFairlaunchTotalSellingAmount?.(e.target.value)
              }
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
              <div
                className={`rounded-full flex ${
                  isFairlaunchWhitelistDisabled
                    ? "border-2 p-0.5 border-[#A4D0F2]"
                    : "border-2 border-white"
                }`}
              >
                <input
                  className={`appearance-none bg-[#26272B] rounded-full ${
                    isFairlaunchWhitelistDisabled ? "w-5 h-5" : "w-6 h-6"
                  } checked:bg-[#A4D0F2] cursor-pointer`}
                  type="radio"
                  checked={isFairlaunchWhitelistDisabled}
                  onChange={(event: any) => {
                    setIsFairlaunchWhitelistDisabled?.(event.target.checked);
                    setIsFairlaunchWhitelistEnabled?.(false);
                  }}
                  name="whitelist"
                  id="disable"
                />
              </div>
              Disable
            </label>
            <label
              htmlFor="enable"
              className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
            >
              <div
                className={`rounded-full flex ${
                  isFairlaunchWhitelistEnabled
                    ? "border-2 p-0.5 border-[#A4D0F2]"
                    : "border-2 border-white"
                }`}
              >
                <input
                  className={`appearance-none bg-[#26272B] rounded-full ${
                    isFairlaunchWhitelistEnabled ? "w-5 h-5" : "w-6 h-6"
                  } checked:bg-[#A4D0F2] cursor-pointer`}
                  type="radio"
                  // defaultChecked
                  checked={isFairlaunchWhitelistEnabled}
                  onChange={(event: any) => {
                    setIsFairlaunchWhitelistDisabled?.(false);
                    setIsFairlaunchWhitelistEnabled?.(event.target.checked);
                  }}
                  name="whitelist"
                  id="disable"
                />
              </div>
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
              inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Softcap (BNB)"
              type="number"
              placeholder="0"
              value={fairlaunchSoftcap}
              onChange={(e) => {
                setFairlaunchSoftcap?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />

            <Checkbox
              text="Setting max contribution?"
              valueChecked={isFairlaunchMaxContributionChecked!}
              setValueChecked={setIsFairlaunchMaxContributionChecked!}
            />

            {isFairlaunchMaxContributionChecked && (
              <CustomInput
                id="max-contribution"
                className="mt-4 flex flex-col gap-[0.62rem]"
                inputClassName="bg-[#26272B] cursor-pointer rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Max Contribution (BNB)"
                type="number"
                placeholder="0"
                value={fairlaunchMaxContribution}
                onChange={(e) => {
                  setFairlaunchMaxContribution?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
            )}
          </div>

          {/* ROUTER */}
          <div className=" flex flex-col gap-[0.62rem]">
            <h3>
              Router<span className="text-[#F04438]">*</span>
            </h3>
            <CustomSelect
              options={routerOptions}
              header={fairlaunchRouter}
              setHeader={setFairlaunchRouter}
            />
          </div>
          {/* LIQUIDITY */}
          <div className="">
            <CustomInput
              id="liquidity"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Liquidity (%)"
              type="number"
              placeholder="0"
              value={fairlaunchLiquidity}
              onChange={(e) => {
                setFairlaunchLiquidity?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
            <Checkbox
              text="Enable buyback?"
              valueChecked={isFairlaunchBuyBackChecked!}
              setValueChecked={setIsFairlaunchBuyBackChecked!}
            />
            {isFairlaunchBuyBackChecked && (
              <div className="">
                <CustomInput
                  id="buy-back-percent"
                  className="mt-4 flex flex-col gap-[0.62rem]"
                  inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                  label="Buyback percent (%)"
                  type="number"
                  placeholder="0"
                  value={fairlaunchBuyBackPercent}
                  onChange={(e) => {
                    setFairlaunchBuyBackPercent?.(e.target.value);
                    setError?.("");
                  }}
                  isRequired={true}
                />
                <div className="p-[0.07rem] w-full group bg-gradient-to-b mt-[0.6rem] from-[#51525C] to-[#414149] hover:bg-[#F4F4F5] rounded-[0.625rem]">
                  <div className="bg-[#18181B] px-6 py-[0.875rem] rounded-[0.6rem]">
                    <div className="text-sm text-[#F4F4F5] flex items-center justify-between border-b border-[#26272B] pb-[0.62rem]">
                      <p className="">Amount Per Buyback</p>
                      <p>1BNB</p>
                    </div>
                    <div className="text-sm text-[#F4F4F5] flex items-center justify-between border-b border-[#26272B] py-[0.62rem]">
                      <p className="">Min Buyback Delay</p>
                      <p>5 mins</p>
                    </div>
                    <div className="text-sm text-[#F4F4F5] flex items-center justify-between pt-[0.62rem]">
                      <p className="">Max Buyback Delay</p>
                      <p>2 days</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
              inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Start date (UTC)"
              type="date"
              placeholder="0"
              value={fairlaunchStartDate}
              onChange={(e) => {
                setFairlaunchStartDate?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
            {/* End date (UTC) */}
            <CustomInput
              id="end-date"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="End date (UTC)"
              type="date"
              placeholder="0"
              value={fairlaunchEndDate}
              onChange={(e) => {
                setFairlaunchEndDate?.(e.target.value);
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
            inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Liquidity lockup (days)"
            type="number"
            placeholder="0"
            value={fairlaunchLiquidityLockup}
            onChange={(e) => {
              setFairlaunchLiquidityLockup?.(e.target.value);
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
            <div className="flex gap-2 justify-end md:items-center">
              <button
                onClick={(e: any) => {
                  e.preventDefault();
                  handleFairlaunchPreviousStep?.(e);
                }}
                className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
              >
                Back
              </button>
              <button
                disabled={
                  fairlaunchTotalSellingAmount === 0 ||
                  fairlaunchSoftcap === 0 ||
                  fairlaunchRouter === "Select router exchange" ||
                  fairlaunchLiquidity === 0 ||
                  fairlaunchStartDate === "" ||
                  fairlaunchEndDate === "" ||
                  fairlaunchLiquidityLockup === 0
                }
                onClick={(e: any) => {
                  e.preventDefault();
                  if (
                    isFairlaunchMaxContributionChecked ||
                    isFairlaunchBuyBackChecked
                  ) {
                    if (
                      fairlaunchMaxContribution === 0 ||
                      fairlaunchBuyBackPercent === 0
                    ) {
                      toast.error("Fill all required fields!");
                    } else {
                      handleFairlaunchNextStep?.(e);
                    }
                  } else {
                    handleFairlaunchNextStep?.(e);
                  }
                }}
                className="bg-[#C38CC3] disabled:bg-[#C38CC3]/50 hover:bg-[#C38CC3]/80 w-[7.375rem] text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
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
