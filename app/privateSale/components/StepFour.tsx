import ButtonGroup from "@/components/ButtonGroup";
import { GlobalContext } from "@/context/Context";
import { useState } from "react";

export default function StepFour() {
  const { handlePreviousStep, setIsModalShowing } = GlobalContext();
  const [error, setError] = useState("");

  return (
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
        For tokens with{" "}
        <span className="text-[#A4D0F2] break-all">
          burns, rebase or other special transfers,{" "}
        </span>
        please ensure that you have a way to whitelist multiple addresses or
        turn off the special transfer events (By setting fees to 0 for example
        for the duration of the presale)
      </p>
        {/* buttons */}
        <div className="flex gap-2 md:items-center w-fit ml-auto">
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
            onClick={(e: any) => {
              e.preventDefault();
              // window.scrollTo(0, 0);
              // setIsModalShowing?.(true);
              // if (typeof window != "undefined" && window.document) {
              //   document.body.style.overflow = "hidden";
              // }
            }}
            className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
          >
            Submit
          </button>
        </div>
    </form>
  );
}
