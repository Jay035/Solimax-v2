import CustomInput from "@/components/CustomInput";
import ButtonGroup from "@/components/ButtonGroup";
import CustomSelect from "@/components/launchpad/CustomSelect";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";
import { toast } from "react-toastify";
import VerifyAddress from "@/hooks/VerifyAddress";

export default function StepOne() {
  const [error, setError] = useState<string>("");
  const {
    currencyOptions,
    presaleTokenAddress,
    presaleSelectedCurrency,
    isPresaleFeeOptionOneChecked,
    isPresaleFeeOptionTwoChecked,
    handlePresaleNextStep,
    setPresaleTokenAddress,
    setPresaleSelectedCurrency,
    setIsPresaleFeeOptionTwoChecked,
    setIsPresaleFeeOptionOneChecked,
  } = GlobalContext();
  const status = VerifyAddress(presaleTokenAddress!);

  return (
    <section className="flex flex-col gap-6 bg-[#1D1C20] pb-[1.19rem] rounded-[0.625rem] px-6 border border-[#26272B] pt-8 text-white">
      <ButtonGroup />
      <div className="">
        <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
          <span className="text-[#F04438]">(*) </span>is required field
        </p>
        {error && (
          <p className="text-[#F04438] mt-4 text-sm sm:text-base">{error}</p>
        )}
      </div>
      <form className="flex flex-col gap-6">
        <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
          <CustomInput
            id="token-address"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Token Address"
            type="text"
            placeholder="0x..."
            value={presaleTokenAddress}
            onChange={(e) => {
              setPresaleTokenAddress?.(e.target.value);
              setError?.("");
            }}
            onMouseLeave={() => VerifyAddress(presaleTokenAddress!)}
            isRequired={true}
          />
          {/* create pool fee */}
          <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
            Create pool fee <span className="text-[#F3CE92]">15BNB</span>
          </p>
          {status && (
            <div className="p-[0.07rem] w-full group bg-gradient-to-b from-[#51525C] to-[#414149] hover:bg-[#F4F4F5] rounded-[0.625rem]">
              <div className="bg-[#26272B] rounded-[0.625rem] py-[0.89rem] px-[1.19rem] flex flex-col gap-[0.62rem]">
                {/* Token name */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Token name
                  </p>
                  <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                    SoliMax launchpad
                  </p>
                </section>
                {/* Token symbol */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Token symbol
                  </p>
                  <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                    SLM
                  </p>
                </section>
                {/* Token decimals */}
                <section className="flex justify-between items-center">
                  <p className="text-sm tracking-[-0.00875rem] text-[#D1D1D6]">
                    Token decimals
                  </p>
                  <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                    SLM
                  </p>
                </section>
              </div>
            </div>
          )}
        </div>
        <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
          <p>Select Currency</p>
          <CustomSelect
            options={currencyOptions}
            header={presaleSelectedCurrency}
            setHeader={setPresaleSelectedCurrency}
          />
          <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
            Users will pay with {presaleSelectedCurrency} for your token
          </p>
        </div>
        <div className="flex flex-col gap-4" role="fee-options">
          <h3 className="text-base text-[#E4E4E7] tracking-[-0.01rem]">
            Fee Options
          </h3>

          <label
            htmlFor="option-1"
            className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
          >
            <div
              className={`rounded-full flex cursor-pointer border-2 ${
                isPresaleFeeOptionOneChecked
                  ? " p-0.5 border-[#A4D0F2]"
                  : " border-white"
              }`}
            >
              <input
                className={`appearance-none bg-[#26272B] rounded-full ${
                  isPresaleFeeOptionOneChecked ? "w-5 h-5" : "w-6 h-6"
                } checked:bg-[#A4D0F2]`}
                type="radio"
                checked={isPresaleFeeOptionOneChecked}
                onChange={(event: any) => {
                  setIsPresaleFeeOptionOneChecked?.(event.target.checked);
                  setIsPresaleFeeOptionTwoChecked?.(false);
                  localStorage.setItem(
                    "presaleFeeOptionTwoChecked",
                    String(false)
                  );
                }}
                name="fee-option"
                id="option-1"
              />
            </div>
            % BNB raised only{" "}
            <span className="text-[#F3CE92]"> (Recommended)</span>
          </label>
          <label
            htmlFor="option-2"
            className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
          >
            <div
              className={`rounded-full cursor-pointer flex border-2 ${
                isPresaleFeeOptionTwoChecked
                  ? "p-0.5 border-[#A4D0F2]"
                  : "border-white"
              }`}
            >
              <input
                className={`appearance-none bg-[#26272B] rounded-full ${
                  isPresaleFeeOptionTwoChecked ? "w-5 h-5" : "w-6 h-6"
                } checked:bg-[#A4D0F2]`}
                type="radio"
                checked={isPresaleFeeOptionTwoChecked}
                onChange={(event: any) => {
                  setIsPresaleFeeOptionOneChecked?.(false);
                  setIsPresaleFeeOptionTwoChecked?.(event.target.checked);
                  localStorage.setItem(
                    "presaleFeeOptionOneChecked",
                    String(false)
                  );
                }}
                name="fee-option"
                id="option-2"
              />
            </div>
            1.5% BNB raised + 1.5% token raised
          </label>
        </div>
        <p className="mb-8 text-[0.875rem] tracking-[-0.00875rem] p-[0.625rem] bg-[#a4d0f2]/[0.05] rounded-[0.625rem]">
          Make sure the token has &apos;Exclude transfer fee&apos; function if
          it has transfer fees.
        </p>
        <button
          disabled={presaleTokenAddress === ""}
          onClick={(e: any) => {
            e.preventDefault();

            // setIsAddressVerified(status);
            if (status === true) {
              handlePresaleNextStep?.(e);
            } else {
              toast.error("Token address is not valid!");
            }
          }}
          className="bg-[#C38CC3] disabled:bg-[#C38CC3]/50 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
        >
          Next
        </button>
      </form>
    </section>
  );
}
