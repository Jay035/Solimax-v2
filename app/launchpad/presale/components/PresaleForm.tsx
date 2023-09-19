"use client";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { GlobalContext } from "@/context/Context";

export default function PresaleForm() {
  const { currentStep } = GlobalContext();

  return (
    <section>
      {/* ------------------------------------- */}
      {/* STEP 1 */}
      {currentStep === 1 && <StepOne />}

      {/* ------------------------------------- */}
      {/* STEP 2 */}
      {currentStep === 2 && <StepTwo />}

      {/* ------------------------------------- */}
      {/* STEP 3 */}
      {currentStep === 3 && <StepThree />}

      {/* ------------------------------------- */}
      {/* STEP 4 */}
      {currentStep === 4 && <StepFour />}
    </section>
  );
}
