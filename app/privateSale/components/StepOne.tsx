import CustomInput from "@/components/CustomInput";
import ButtonGroup from "@/components/ButtonGroup";
import CustomSelect from "@/components/launchpad/CustomSelect";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";
import { toast } from "react-toastify";

export default function StepOne() {
  const {
    currencyOptions,
    handlePrivateSaleNextStep,
    privateSaleName,
    setPrivateSaleName,
    privateSaleSelectedCurrency,
    setPrivateSaleSelectedCurrency,
  } = GlobalContext();
  const [error, setError] = useState("");

  return (
    <form className="flex flex-col gap-6">
      <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
        <CustomInput
          id="name"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Name"
          type="text"
          placeholder="Enter sale title"
          value={privateSaleName}
          onChange={(e) => {
            setPrivateSaleName?.(e.target.value);
            setError?.("");
          }}
          isRequired={true}
        />
        {/* create pool fee */}
        <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
          Create sale fee <span className="text-[#F3CE92]">1BNB</span>
        </p>
      </div>
      <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
        <p>Select Currency</p>
        <CustomSelect
          options={currencyOptions}
          header={privateSaleSelectedCurrency}
          setHeader={setPrivateSaleSelectedCurrency}
        />
        {/* create pool fee */}
        <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
          Users will pay with {privateSaleSelectedCurrency} for your token
        </p>
      </div>
      <button
        disabled={privateSaleName === ""}
        onClick={(e: any) => {
          e.preventDefault();
          handlePrivateSaleNextStep?.(e);
        }}
        className="bg-[#C38CC3] disabled:bg-[#C38CC3]/50 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
      >
        Next
      </button>
    </form>
  );
}
