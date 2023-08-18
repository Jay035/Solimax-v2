"use client";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { GlobalContext } from "@/context/LaunchpadContext";

export default function PresaleForm() {
  const { currentStep } = GlobalContext();

  return (
    <section>
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
