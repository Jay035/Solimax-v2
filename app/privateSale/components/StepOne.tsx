import CustomInput from "@/components/CustomInput";
import ButtonGroup from "@/components/ButtonGroup";
import CustomSelect from "@/components/launchpad/CustomSelect";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";

export default function StepOne() {
  const { currencyOptions, handleNextStep } = GlobalContext();
  const [selectedCurrency, setSelectedCurrency] = useState("BNB");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isFeeOptionOneChecked, setIsFeeOptionOneChecked] =
    useState<boolean>(true);
  const [isFeeOptionTwoChecked, setIsFeeOptionTwoChecked] =
    useState<boolean>(false);

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
          value={name}
          onChange={(e) => {
            setName?.(e.target.value);
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
          header={selectedCurrency}
          setHeader={setSelectedCurrency}
        />
        {/* create pool fee */}
        <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
          Users will pay with {selectedCurrency} for your token
        </p>
      </div>
      <button
        onClick={(e: any) => {
          e.preventDefault();
          // if (name === "") {
          //   setError?.("Name must be entered");
          // } else {
          //   handleNextStep?.(e);
          // }
          handleNextStep?.(e);
        }}
        className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
      >
        Next
      </button>
    </form>
  );
}
