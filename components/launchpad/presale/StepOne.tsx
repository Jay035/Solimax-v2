import CustomInput from "@/components/CustomInput";
import CustomSelect from "../CustomSelect";

// type Props = {
//   tokenAddress: string;
//   options: string;
//   selectedCurrency: string;
//   setSelectedCurrency: (currency: string) => void;
//   setTokenAddress: (address: string) => void;
//   setError: (err: string) => void;
// };

export default function StepOne({
  tokenAddress,
  options,
  selectedCurrency,
  setSelectedCurrency,
  setTokenAddress,
  setError,
}: FormProps) {
  return (
    <form className="flex flex-col gap-6 mt-4">
      <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
        <CustomInput
          id="token-address"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Token Address"
          type="text"
          placeholder="0x..."
          value={tokenAddress}
          onChange={(e) => {
            setTokenAddress?.(e.target.value);
            setError("");
          }}
          isRequired={true}
        />
        {/* create pool fee */}
        <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
          Create pool fee <span className="text-[#F3CE92]">15BNB</span>
        </p>
      </div>
      <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
        <label htmlFor="currency">Select Currency</label>
        <CustomSelect
          options={options}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
        {/* create pool fee */}
        <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
          Users will pay with {selectedCurrency} for your token
        </p>
      </div>
      <div className="flex flex-col gap-4" role="fee-options">
        <h3 className="text-base text-[#E4E4E7] tracking-[-0.01rem]">
          Fee Options
        </h3>

        <label
          htmlFor="fee-option-(%-BNB-raised)"
          className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
        >
          <input
            className="w-6 h-6 accent-[#A4D0F2]"
            type="radio"
            name="fee-options"
            id="fee-option-(%-BNB-raised)"
          />
          % BNB raised only{" "}
          <span className="text-[#F3CE92]"> (Recommended)</span>
        </label>
        <label
          htmlFor="fee-option-(1.5%-BNB-raised + 1.5%-token-raised)"
          className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
        >
          <input
            className="w-6 h-6 accent-[#A4D0F2]"
            type="radio"
            name="fee-options"
            id="fee-option-(1.5%-BNB-raised + 1.5%-token-raised)"
          />
          1.5% BNB raised + 1.5% token raised
        </label>
      </div>
      <div className="mb-8 text-[0.875rem] tracking-[-0.00875rem] p-[0.625rem] bg-[#a4d0f2]/[0.05] rounded-[0.625rem]">
        Make sure the token has &apos;Exclude transfer fee&apos; function if it
        has transfer fees.
      </div>
    </form>
  );
}
