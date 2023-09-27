"use client";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { GlobalContext } from "@/context/Context";

export default function PresaleForm() {
  const { presaleCurrentStep } = GlobalContext();

  return (
    <section>
      {/* ------------------------------------- */}
      {/* STEP 1 */}
      {presaleCurrentStep === 1 && <StepOne />}

      {/* ------------------------------------- */}
      {/* STEP 2 */}
      {presaleCurrentStep === 2 && <StepTwo />}

      {/* ------------------------------------- */}
      {/* STEP 3 */}
      {presaleCurrentStep === 3 && <StepThree />}

      {/* ------------------------------------- */}
      {/* STEP 4 */}
      {presaleCurrentStep === 4 && <StepFour />}
    </section>
  );
}
