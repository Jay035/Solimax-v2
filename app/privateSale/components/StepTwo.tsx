import CustomInput from "@/components/CustomInput";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";

export default function StepTwo() {
  const {
    handlePrivateSaleNextStep,
    handlePrivateSalePreviousStep,
    privateSaleSoftcap,
    privateSaleHardcap,
    privateSaleMinBuy,
    privateSaleMaxBuy,
    privateSaleStartDate,
    privateSaleEndDate,
    privateSaleFirstRelease,
    privateSalePresaleToken,
    privateSaleFundVesting,
    isPrivateSaleWhitelistDisabled,
    isPrivateSaleWhitelistEnabled,
    setIsPrivateSaleWhitelistEnabled,
    setIsPrivateSaleWhitelistDisabled,
    setPrivateSaleFundVesting,
    setPrivateSalePresaleToken,
    setPrivateSaleFirstRelease,
    setPrivateSaleEndDate,
    setPrivateSaleStartDate,
    setPrivateSaleMaxBuy,
    setPrivateSaleMinBuy,
    setPrivateSaleHardcap,
    setPrivateSaleSoftcap,
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
              isPrivateSaleWhitelistDisabled
                ? "border-2 p-0.5 border-[#A4D0F2]"
                : "border-2 border-white"
            }`}
          >
            <input
              className={`appearance-none bg-[#26272B] rounded-full ${
                isPrivateSaleWhitelistDisabled ? "w-5 h-5" : "w-6 h-6"
              } checked:bg-[#A4D0F2] cursor-pointer`}
              type="radio"
              defaultChecked
              checked={isPrivateSaleWhitelistDisabled}
              onChange={(event: any) => {
                setIsPrivateSaleWhitelistDisabled?.(event.target.checked);
                setIsPrivateSaleWhitelistEnabled?.(false);
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
              isPrivateSaleWhitelistEnabled
                ? "border-2 p-0.5 border-[#A4D0F2]"
                : "border-2 border-white"
            }`}
          >
            <input
              className={`appearance-none bg-[#26272B] rounded-full ${
                isPrivateSaleWhitelistEnabled ? "w-5 h-5" : "w-6 h-6"
              } checked:bg-[#A4D0F2] cursor-pointer`}
              type="radio"
              // defaultChecked
              checked={isPrivateSaleWhitelistEnabled}
              onChange={(event: any) => {
                setIsPrivateSaleWhitelistDisabled?.(false);
                setIsPrivateSaleWhitelistEnabled?.(event.target.checked);
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

      <section className="grid md:grid-cols-2 gap-6">
        <div className="">
          {/* SOFT CAP */}
          <CustomInput
            id="soft-cap"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Softcap (BNB)"
            type="number"
            placeholder="0"
            value={privateSaleSoftcap}
            onChange={(e) => {
              setPrivateSaleSoftcap?.(e.target.value);
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
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Hardcap (BNB)"
          type="number"
          placeholder="0"
          value={privateSaleHardcap}
          onChange={(e) => {
            setPrivateSaleHardcap?.(e.target.value);
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
            inputClassName="bg-[#26272B] .rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Minimium buy"
            type="number"
            placeholder="0"
            value={privateSaleMinBuy}
            onChange={(e) => {
              setPrivateSaleMinBuy?.(e.target.value);
              setError?.("");
            }}
            isRequired={true}
          />
        </div>
        {/* MAXIMUM BUY */}
        <CustomInput
          id="max-buy"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Maximum buy"
          type="number"
          placeholder="0"
          value={privateSaleMaxBuy}
          onChange={(e) => {
            setPrivateSaleMaxBuy?.(e.target.value);
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
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Start date (UTC)"
          type="date"
          placeholder="0"
          value={privateSaleStartDate}
          onChange={(e) => {
            setPrivateSaleStartDate?.(e.target.value);
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
          value={privateSaleEndDate}
          onChange={(e) => {
            setPrivateSaleEndDate?.(e.target.value);
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
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="First release for presale (%)"
          type="number"
          placeholder="Ex 40"
          value={privateSaleFirstRelease}
          onChange={(e) => {
            setPrivateSaleFirstRelease?.(e.target.value);
            setError?.("");
          }}
          isRequired={true}
        />
        {/* Presale token release each cycle (%) */}
        <CustomInput
          id="Presale-token"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Presale token release each cycle (%)"
          type="text"
          placeholder="Ex 20"
          value={privateSalePresaleToken}
          onChange={(e) => {
            setPrivateSalePresaleToken?.(e.target.value);
            setError?.("");
          }}
          isRequired={true}
        />
      </section>
      {/* Fund Vesting Period Each Cycle (days) */}
      <CustomInput
        id="fundVesting"
        className="flex flex-col gap-[0.62rem]"
        inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
        label="Fund Vesting Period Each Cycle (days)"
        type="text"
        placeholder="Ex 3"
        value={privateSaleFundVesting}
        onChange={(e) => {
          setPrivateSaleFundVesting?.(e.target.value);
          setError?.("");
        }}
        isRequired={true}
      />

      {/* back and next buttons */}
      <div className="flex gap-2 w-fit md:items-center mt-2 ml-auto">
        <button
          onClick={(e: any) => {
            e.preventDefault();
            handlePrivateSalePreviousStep?.(e);
          }}
          className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
        >
          Back
        </button>
        <button
          disabled={
            privateSaleSoftcap === 0 ||
            privateSaleHardcap === 0 ||
            privateSaleMinBuy === 0 ||
            privateSaleMaxBuy === 0 ||
            privateSaleStartDate === "" ||
            privateSaleEndDate === "" ||
            privateSaleFirstRelease === "" ||
            privateSalePresaleToken === "" ||
            privateSaleFundVesting === ""
          }
          onClick={(e: any) => {
            e.preventDefault();
            handlePrivateSaleNextStep?.(e);
          }}
          className="bg-[#C38CC3] disabled:bg-[#C38CC3]/50 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
        >
          Next
        </button>
      </div>
    </form>
  );
}
