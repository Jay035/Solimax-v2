import ButtonGroup from "@/components/ButtonGroup";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";

export default function StepFour() {
  const { handlePresalePreviousStep} = GlobalContext();
  const [error, setError] = useState("");

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
        {/* error */}
        <div className="bg-[#dc6803]/[0.10] border border-[#DC68031A] py-[0.875rem] px-[1.1875rem] rounded-[0.625rem]">
          <h1 className="text-[#F4F4F5] tracking-[-0.00875rem] text-lg">
            Cannot submit until spending is approved
          </h1>
          <p className="text-[#D1D1D6] tracking-[-0.00875rem] text-[0.875rem]">
            Approve spending 145,342 SLM to proceed
          </p>
        </div>
        {/* Your information */}
        <div className="">
          <p className="mb-[0.62rem]">Your information</p>
          <div className="bg-[#26272B] border border-[#D1D1D6] rounded-[0.625rem] flex flex-col gap-[0.62rem] py-[0.875rem] px-[1.1875rem]">
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] tracking-[-0.00875rem] text-[#D1D1D6] ">
                Total token
              </p>
              <p className="text-[#E4E4E7] text-[0.875rem] tracking-[-0.00875rem]">
                145,342 SLM
              </p>
            </div>
          </div>
        </div>
        <p className="py-[0.88rem] px-[1.19rem] border border-[#A4D0F2] rounded-[0.625rem] text-[#F4F4F5] text-[0.875rem] bg-[#14221e]/[0.10]">
          Please exclude{" "}
          <span className="text-[#A4D0F2] break-all">
            Solimax Launchpad address 0x56b153049AE32C6537afEa4B1F075889485c5609{" "}
          </span>
          from fees, rewards, max tx amount to start creating pools
        </p>
        <p className="py-[0.88rem] px-[1.19rem] border border-[#A4D0F2] rounded-[0.625rem] text-[#F4F4F5] text-[0.875rem] bg-[#14221e]/[0.10]">
          For tokens with{" "}
          <span className="text-[#A4D0F2] break-all">
            burns, rebase or other special transfers,{" "}
          </span>
          please ensure that you have a way to whitelist multiple addresses or
          turn off the special transfer events (By setting fees to 0 for example
          for the duration of the presale)
        </p>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-[1.163rem]">
          <label
            htmlFor="disable"
            className="text-[#D1D1D6] text-base tracking-[-0.01rem] flex items-center gap-[0.62rem]"
          >
            <input
              className="w-4 h-4 accent-[#A4D0F2]"
              type="checkbox"
              name="whitelist"
              id="approve-spending"
            />
            <p>
              {" "}
              Approve spending{" "}
              <span className="text-[#F3CE92]">145,342 SLM</span>
            </p>
          </label>
          <div className="flex gap-2 justify-end md:items-center">
            <button
              onClick={(e: any) => {
                e.preventDefault();
                handlePresalePreviousStep?.(e);
              }}
              className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
            >
              Back
            </button>
            <button
              onClick={(e: any) => {
                e.preventDefault();
              }}
              className="bg-[#C38CC3] disabled:bg-[#C38CC3]/50 hover:bg-[#C38CC3]/80 w-[7.375rem] text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
