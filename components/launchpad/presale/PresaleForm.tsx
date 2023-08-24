"use client";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { GlobalContext } from "@/context/Context";

export default function PresaleForm() {
  const { currentStep } = GlobalContext();

  return (
    <section
    //  className={`${
    //   currentStep === 1
    //     ? "bg-[#1D1C20] border border-[#26272B] pb-[6rem] rounded-[0.625rem] px-6 pt-8"
    //     : ""
    // }  text-white  w-full`}
    >
      {/* ------------------------------------- */}
      {/* START OF STEP 1 */}
      {currentStep === 1 && <StepOne />}
      {/* END OF STEP 1 */}
      {/* ------------------------------------- */}

      {/* ------------------------------------- */}
      {/* START OF STEP 2 */}
      {currentStep === 2 && <StepTwo />}
      {/* END OF STEP 2 */}
      {/* ------------------------------------- */}

      {/* ------------------------------------- */}
      {/* START OF STEP 3 */}
      {currentStep === 3 && <StepThree />}
      {/* END OF STEP 3 */}
      {/* ------------------------------------- */}

      {/* ------------------------------------- */}
      {/* START OF STEP 4 */}
      {currentStep === 4 && <StepFour />}
      {/* END OF STEP 4 */}
      {/* ------------------------------------- */}
    </section>
  );
}
