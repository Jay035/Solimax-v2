import CustomInput from "@/components/CustomInput";
import ButtonGroup from "@/components/ButtonGroup";
import CustomSelect from "@/components/launchpad/CustomSelect";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";
import Checkbox from "@/components/Checkbox";
import AppendPercentToInput from "@/utils/AppendPercentToInput";

export default function StepTwo() {
  const {
    handlePresaleNextStep,
    handlePresalePreviousStep,
    // presaleHardcap,
    // presaleMaxBuy,
    // presaleSoftcap,
    // presaleMinBuy,
    // presaleToken,
    // presaleRate,
    // presaleRouter,
    // presaleRefundType,
    // presaleLiquidity,
    // presaleListingRate,
    // presaleEndDate,
    // presaleStartDate,
    // presaleLiquidityLockup,
    // presaleFirstRelease,
    // presaleVestingPeriod,
    // isPresaleVestingContributionChecked,
    // isPresaleWhitelistDisabled,
    // isPresaleWhitelistEnabled,
    // setPresaleToken,
    // setPresaleRate,
    // setPresaleRefundType,
    // setPresaleListingRate,
    // setPresaleStartDate,
    // setPresaleLiquidityLockup,
    // setPresaleVestingPeriod,
    // setIsPresaleWhitelistDisabled,
    // setIsPresaleWhitelistEnabled,
    // setIsPresaleVestingContributionChecked,
    // setPresaleRouter,
    // setPresaleEndDate,
    // setPresaleFirstRelease,
    // setPresaleLiquidity,
    // setPresaleHardcap,
    // setPresaleMaxBuy,
    // setPresaleMinBuy,
    // setPresaleSoftcap,
  } = GlobalContext();

  const [error, setError] = useState<string>("");
  const [presaleRate, setPresaleRate] = useState(0);
  const [presaleSoftcap, setPresaleSoftcap] = useState(0);
  const [presaleHardcap, setPresaleHardcap] = useState(0);
  const [presaleMinBuy, setPresaleMinBuy] = useState(0);
  const [presaleMaxBuy, setPresaleMaxBuy] = useState(0);
  const [presaleRouter, setPresaleRouter] = useState("Select router exchange");
  const [presaleRefundType, setPresaleRefundType] = useState("Burn");
  const [presaleLiquidity, setPresaleLiquidity] = useState();
  const [presaleListingRate, setPresaleListingRate] = useState();
  const [presaleStartDate, setPresaleStartDate] = useState("");
  const [presaleEndDate, setPresaleEndDate] = useState("");
  const [presaleLiquidityLockup, setPresaleLiquidityLockup] = useState("");
  const [presaleFirstRelease, setPresaleFirstRelease] = useState("");
  const [presaleVestingPeriod, setPresaleVestingPeriod] = useState("");
  const [presaleToken, setPresaleToken] = useState();
  const [isPresaleWhitelistDisabled, setIsPresaleWhitelistDisabled] =
    useState(true);
  const [isPresaleWhitelistEnabled, setIsPresaleWhitelistEnabled] =
    useState(false);
  const [
    isPresaleVestingContributionChecked,
    setIsPresaleVestingContributionChecked,
  ] = useState(false);

  const refundTypeOptions = [
    {
      id: 1,
      value: "Refund",
    },
    {
      id: 2,
      value: "Burn",
    },
  ];

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



  return (
    <section className="flex flex-col gap-6 ">
      <div className="bg-[#1D1C20] pb-[1.19rem] rounded-[0.625rem] px-6 border border-[#26272B] pt-8 text-white">
        {/* IST CARD  */}
        <ButtonGroup />
        <div className="my-4">
          <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
            <span className="text-[#F04438]">(*) </span>is required field
          </p>
          {error && (
            <p className="text-[#F04438] mt-4 text-sm sm:text-base">{error}</p>
          )}
        </div>
        <form className="flex flex-col gap-6">
          {/* Presale rate */}
          <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
            <CustomInput
              id="presale-rate"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Presale rate"
              type="number"
              placeholder="0"
              value={presaleRate}
              onChange={(e) => setPresaleRate?.(e.target.value)}
              isRequired={true}
            />
            {/* create pool fee */}
            <span className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              If I spend 1 BNB how many tokens will I receive?
            </span>
          </div>

          <div className="flex flex-col gap-4" role="fee-options">
            <h3 className="text-base text-[#E4E4E7] tracking-[-0.01rem]">
              Whitelist
            </h3>
            <label
              htmlFor="disable"
              className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
            >
              <div
                className={`rounded-full flex cursor-pointer ${
                  isPresaleWhitelistDisabled
                    ? "border-2 p-0.5 border-[#A4D0F2]"
                    : "border-2 border-white"
                }`}
              >
                <input
                  className={`appearance-none bg-[#26272B] rounded-full ${
                    isPresaleWhitelistDisabled ? "w-5 h-5" : "w-6 h-6"
                  } checked:bg-[#A4D0F2]`}
                  type="radio"
                  checked={isPresaleWhitelistDisabled}
                  onChange={(event: any) => {
                    setIsPresaleWhitelistDisabled?.(event.target.checked);
                    setIsPresaleWhitelistEnabled?.(false);
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
                className={`rounded-full cursor-pointer flex ${
                  isPresaleWhitelistEnabled
                    ? "border-2 p-0.5 border-[#A4D0F2]"
                    : "border-2 border-white"
                }`}
              >
                <input
                  className={`appearance-none bg-[#26272B] rounded-full ${
                    isPresaleWhitelistEnabled ? "w-5 h-5" : "w-6 h-6"
                  } checked:bg-[#A4D0F2]`}
                  type="radio"
                  // defaultChecked
                  checked={isPresaleWhitelistEnabled}
                  onChange={(event: any) => {
                    setIsPresaleWhitelistDisabled?.(false);
                    setIsPresaleWhitelistEnabled?.(event.target.checked);
                  }}
                  name="whitelist"
                  id="enable"
                />
              </div>
              Enable
            </label>
            <span className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              You can enable/disable whitelist anytime.
            </span>
          </div>
          <section className="grid md:grid-cols-2 gap-6">
            <div className="">
              {/* SOFT CAP */}
              <CustomInput
                id="soft-cap"
                className="flex flex-col gap-[0.62rem]"
                inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Softcap (BNB)"
                type="number"
                placeholder="0"
                value={presaleSoftcap}
                onChange={(e) => {
                  setPresaleSoftcap?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
              <span className="mt-[0.62rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6] ">
                Softcap must be {">"}= 25% of Hardcap!
              </span>
            </div>
            {/* HARD CAP */}
            <CustomInput
              id="hard-cap"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Hardcap (BNB)"
              type="number"
              placeholder="0"
              value={presaleHardcap}
              onChange={(e) => {
                setPresaleHardcap?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
          </section>
          <section className="grid md:grid-cols-2 gap-6">
            {/* MINIMIUM BUY */}
            <div className="">
              <CustomInput
                id="min-buy"
                className="flex flex-col gap-[0.62rem]"
                inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Minimium buy"
                type="number"
                placeholder="0"
                value={presaleMinBuy}
                onChange={(e) => {
                  setPresaleMinBuy?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
            </div>
            {/* MAXIMUM BUY */}
            <CustomInput
              id="max-buy"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Maximum buy"
              type="number"
              placeholder="0"
              value={presaleMaxBuy}
              onChange={(e) => {
                setPresaleMaxBuy?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
          </section>
          <section className="grid md:grid-cols-2 gap-6">
            {/* REFUND TYPE */}
            <div className="flex flex-col gap-[0.62rem]">
              <h3>
                Refund type<span className="text-[#F04438]">*</span>
              </h3>
              <CustomSelect
                options={refundTypeOptions}
                header={presaleRefundType}
                setHeader={setPresaleRefundType}
              />
            </div>
            {/* ROUTER */}
            <div className=" flex flex-col gap-[0.62rem]">
              <h3>
                Router<span className="text-[#F04438]">*</span>
              </h3>
              <CustomSelect
                options={routerOptions}
                header={presaleRouter}
                setHeader={setPresaleRouter}
              />
            </div>
          </section>
          <section className="grid md:grid-cols-2 gap-6">
            {/* LIQUIDITY */}
            <div className="">
              <CustomInput
                id="liquidity"
                className="flex flex-col gap-[0.62rem]"
                inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Liquidity (%)"
                type="number"
                placeholder="0"
                value={presaleLiquidity}
                onChange={(e) => {
                  setPresaleLiquidity?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
            </div>
            {/* LISTING RATE */}
            <div className="">
              <CustomInput
                id="listingRate"
                className="flex flex-col gap-[0.62rem]"
                inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Listing rate"
                type="number"
                placeholder="0"
                value={presaleListingRate}
                onChange={(e) => {
                  setPresaleListingRate?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
              <span className="mt-[0.62rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6] ">
                1BNB = 300SLM
              </span>
            </div>
          </section>
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
              value={presaleStartDate}
              onChange={(e) => {
                setPresaleStartDate?.(e.target.value);
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
              value={presaleEndDate}
              onChange={(e) => {
                setPresaleEndDate?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
          </section>
          {/* Liquidity lockup */}
          <CustomInput
            id="liquidity-Lockup"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Liquidity lockup (days)"
            type="number"
            placeholder="0"
            value={presaleLiquidityLockup}
            onChange={(e) => {
              setPresaleLiquidityLockup?.(e.target.value);
              setError?.("");
            }}
            isRequired={true}
          />

          {/* <label
            htmlFor="vesting-contribution"
            className="text-white text-[0.875rem] flex items-center gap-[0.62rem]"
          >
            <div
              className={`relative flex ${
                !isVestingContributionChecked &&
                "bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5"
              } rounded-lg cursor-pointer`}
            >
              <input
                type="checkbox"
                name="vesting-contribution"
                id="vesting-contribution"
                className="h-6 w-6 appearance-none bg-[#26272B] checked:bg-white rounded-md"
                checked={isVestingContributionChecked}
                onChange={(event: any) => {
                  setIsVestingContributionChecked(event.target.checked);
                }}
              />
              <i
                className={`ri-check-line text-xl absolute left-0.5 top-0 ${
                  isVestingContributionChecked ? "text-black" : "hidden"
                }`}
              ></i>
            </div>
            <span>Using vesting contributor?</span>
          </label> */}
          <Checkbox
            text="Using vesting contributor?"
            valueChecked={isPresaleVestingContributionChecked!}
            setValueChecked={setIsPresaleVestingContributionChecked!}
          />
          {isPresaleVestingContributionChecked && (
            <p className="text-[0.875rem] tracking-[-0.00875rem] p-[0.625rem] bg-[#a4d0f2]/[0.05] rounded-[0.625rem]">
              Vesting Contributor does not support rebase tokens.
            </p>
          )}
          {/* Liquidity lockup */}
          <CustomInput
            id="first-release-for-presale"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="First release for presale (%)"
            type="text"
            placeholder="40%"
            value={presaleFirstRelease}
            onChange={(e) => {
              setPresaleFirstRelease?.(e.target.value);
              setError?.("");
            }}
            onMouseLeave={(e) =>
              AppendPercentToInput(presaleFirstRelease, setPresaleFirstRelease)
            }
            isRequired={true}
          />

          <section className="grid md:grid-cols-2 items-center gap-6">
            {/* Vesting period each cycle */}
            <CustomInput
              id="Vesting-period"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Vesting period each cycle (days)"
              type="number"
              placeholder="21"
              value={presaleVestingPeriod}
              onChange={(e) => {
                setPresaleVestingPeriod?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
            {/* Presale token release each cycle (%) */}
            <CustomInput
              id="Presale-token"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Presale token release each cycle (%)"
              type="text"
              placeholder="20%"
              value={presaleToken}
              onChange={(e) => {
                setPresaleToken?.(e.target.value);
                setError?.("");
              }}
              onMouseLeave={(e) =>
                AppendPercentToInput(presaleToken, setPresaleToken)
              }
              isRequired={true}
            />
          </section>

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
                  handlePresalePreviousStep?.(e);
                }}
                className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={
                  presaleRate === null ||
                  presaleSoftcap === null ||
                  presaleHardcap === null ||
                  presaleMinBuy === null ||
                  presaleMaxBuy === null ||
                  presaleRefundType === "" ||
                  presaleRouter === "Select router exchange" ||
                  presaleLiquidity === null ||
                  presaleListingRate === null ||
                  presaleStartDate === "" ||
                  presaleEndDate === "" ||
                  presaleLiquidityLockup === "" ||
                  presaleFirstRelease === "" ||
                  presaleVestingPeriod === "" ||
                  presaleToken === null
                }
                onClick={(e: any) => {
                  e.preventDefault();
                  handlePresaleNextStep?.(e);
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
