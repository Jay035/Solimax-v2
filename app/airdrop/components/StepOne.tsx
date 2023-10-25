import CustomInput from "@/components/CustomInput";
import { GlobalContext } from "@/context/Context";
import VerifyAddress from "@/hooks/VerifyAddress";
import { toast } from "react-toastify";

type Props = {
  setError: (error: string) => void;
};

export default function StepOne({ setError }: Props) {
  const {
    airdropTokenAddress,
    setAirdropTokenAddress,
    airdropCurrentStep,
    setAirdropCurrentStep,
  } = GlobalContext();
  const status = VerifyAddress(airdropTokenAddress!);

  return (
    <form>
      <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
        <CustomInput
          id="token-address"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Token address"
          type="text"
          placeholder="Enter token or LP address"
          value={airdropTokenAddress}
          onChange={(e) => {
            setAirdropTokenAddress?.(e.target.value);
            setError?.("");
          }}
          onMouseLeave={() => VerifyAddress(airdropTokenAddress!)}
          isRequired={true}
        />
        {/* create pool fee */}
        <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
          Create sale fee <span className="text-[#F3CE92]">1BNB</span>
        </p>
      </div>
      <div className="flex mt-8">
        <button
          disabled={airdropTokenAddress === ""}
          type="submit"
          onClick={(e: any) => {
            e.preventDefault();
            if (status) {
              setAirdropCurrentStep?.(airdropCurrentStep + 1);
            } else {
              toast.error("Token address is not valid!");
            }
          }}
          className="bg-[#C38CC3] text-center disabled:bg-[#C38CC3]/50 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
        >
          Next
        </button>
      </div>
    </form>
  );
}
