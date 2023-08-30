import CustomInput from "@/components/CustomInput";
import ButtonGroup from "@/components/ButtonGroup";
import CustomSelect from "@/components/launchpad/CustomSelect";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";

export default function StepTwo() {
  const { handleNextStep, handlePreviousStep } = GlobalContext();
  const [softcap, setSoftcap] = useState(0);
  const [hardcap, setHardcap] = useState(0);
  const [minBuy, setMinBuy] = useState(0);
  const [maxBuy, setMaxBuy] = useState(0);
  const [router, setRouter] = useState("Select router exchange");
  const [refundType, setRefundType] = useState("Burn");
  const [liquidity, setLiquidity] = useState(0);
  const [listingRate, setListingRate] = useState(0);
  const [presaleRate, setPresaleRate] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [liquidityLockup, setLiquidityLockup] = useState("");
  const [firstRelease, setFirstRelease] = useState("");
  const [vestingPeriod, setVestingPeriod] = useState("");
  const [presaleToken, setPresaleToken] = useState("");
  const [fundVesting, setFundVesting] = useState("");
  const [error, setError] = useState("");
  const [totalSellingAmount, setTotalSellingAmount] = useState("");

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

  const [buybackPercent, setBuybackPercent] = useState<string>("");
  const [maxContribution, setMaxContribution] = useState<string>("");
  const [isMaxContributionChecked, setIsMaxContributionChecked] =
    useState<boolean>(false);
  const [isBuyBackChecked, setIsBuyBackChecked] = useState<boolean>(false);
  const [isWhitelistDisabled, setIsWhitelistDisabled] = useState<boolean>(true);
  const [isWhitelistEnabled, setIsWhitelistEnabled] = useState<boolean>(false);

  const handleCheckboxChange = (event: any) => {
    // setIsChecked(event.target.checked);
    if (event.target.checked) {
      // Run your function when checkbox is checked
      console.log("Checkbox is checked!");
      // You can replace the console.log with your desired function call
    }
  };
  return (
    <form className="flex flex-col gap-6">
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
              isWhitelistDisabled
                ? "border-2 p-0.5 border-[#A4D0F2]"
                : "border-2 border-white"
            }`}
          >
            <input
              className={`appearance-none bg-[#26272B] rounded-full ${
                isWhitelistDisabled ? "w-5 h-5" : "w-6 h-6"
              } checked:bg-[#A4D0F2] cursor-pointer`}
              type="radio"
              defaultChecked
              checked={isWhitelistDisabled}
              onChange={(event: any) => {
                setIsWhitelistDisabled(event.target.checked);
                setIsWhitelistEnabled(false);
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
              isWhitelistEnabled
                ? "border-2 p-0.5 border-[#A4D0F2]"
                : "border-2 border-white"
            }`}
          >
            <input
              className={`appearance-none bg-[#26272B] rounded-full ${
                isWhitelistEnabled ? "w-5 h-5" : "w-6 h-6"
              } checked:bg-[#A4D0F2] cursor-pointer`}
              type="radio"
              // defaultChecked
              checked={isWhitelistEnabled}
              onChange={(event: any) => {
                setIsWhitelistDisabled(false);
                setIsWhitelistEnabled(event.target.checked);
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
      {/* <section>
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

          <label
            htmlFor="setting-max-contribution"
            className="text-[0.875rem] tracking-[-0.00875rem] mt-3 cursor-pointer flex items-center gap-2"
          >
            <div
              className={`relative flex ${
                !isMaxContributionChecked &&
                "bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5"
              } rounded-lg cursor-pointer`}
            >
              <input
                type="checkbox"
                name="setting-max-contribution"
                id="setting-max-contribution"
                className="h-6 w-6 appearance-none bg-[#26272B] checked:bg-white rounded-md"
                checked={isMaxContributionChecked}
                onChange={(event: any) => {
                  setIsMaxContributionChecked(event.target.checked);
                }}
              />
              <i
                className={`ri-check-line text-xl absolute left-0.5 top-0 ${
                  isMaxContributionChecked ? "text-black" : "hidden"
                }`}
              ></i>
            </div>
            <span className="text-[#F4F4F5]">Setting max contribution?</span>
          </label>
          {isMaxContributionChecked && (
            <CustomInput
              id="max-contribution"
              className="mt-4 flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] cursor-pointer border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Max Contribution (BNB)"
              type="number"
              placeholder="0"
              value={maxContribution}
              onChange={(e) => {
                setMaxContribution?.(e.target.value);
                setError?.("");
              }}
              isRequired={true}
            />
          )}
        </div>
      </section> */}

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
            value={softcap}
            onChange={(e) => {
              setSoftcap?.(e.target.value);
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
          value={hardcap}
          onChange={(e) => {
            setHardcap?.(e.target.value);
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
            value={minBuy}
            onChange={(e) => {
              setMinBuy?.(e.target.value);
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
          value={maxBuy}
          onChange={(e) => {
            setMaxBuy?.(e.target.value);
            setError?.("");
          }}
          isRequired={true}
        />
      </section>
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
      <section className="grid md:grid-cols-2 items-center gap-6">
        {/* First release for presale (%) */}
        <CustomInput
          id="First-release-for-presale"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="First release for presale (%)"
          type="number"
          placeholder="Ex 40"
          value={firstRelease}
          onChange={(e) => {
            setFirstRelease?.(e.target.value);
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
          placeholder="Ex 20"
          value={presaleToken}
          onChange={(e) => {
            setPresaleToken?.(e.target.value);
            setError?.("");
          }}
          isRequired={true}
        />
      </section>
      {/* Fund Vesting Period Each Cycle (days) */}
      <CustomInput
        id="fundVesting"
        className="flex flex-col gap-[0.62rem]"
        inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
        label="Fund Vesting Period Each Cycle (days)"
        type="text"
        placeholder="Ex 3"
        value={fundVesting}
        onChange={(e) => {
          setFundVesting?.(e.target.value);
          setError?.("");
        }}
        isRequired={true}
      />

      {/* back and next buttons */}
      <div className="flex gap-2 w-fit md:items-center mt-2 ml-auto">
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
    </form>
  );
}
