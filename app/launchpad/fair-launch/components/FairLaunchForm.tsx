"use client";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { GlobalContext } from "@/context/Context";
import { useEffect } from "react";

export default function FairLaunchForm() {
  const { fairlaunchCurrentStep } = GlobalContext();

  useEffect(() => {
    console.log(fairlaunchCurrentStep)
  }, [fairlaunchCurrentStep])
  
  return (
    <section>
      {/* ------------------------------------- */}
      {/* STEP 1 */}
      {fairlaunchCurrentStep === 1 && <StepOne />}

      {/* ------------------------------------- */}
      {/* STEP 2 */}
      {fairlaunchCurrentStep === 2 && <StepTwo />}

      {/* ------------------------------------- */}
      {/* STEP 3 */}
      {fairlaunchCurrentStep === 3 && <StepThree />}

      {/* ------------------------------------- */}
      {/* STEP 4 */}
      {fairlaunchCurrentStep === 4 && <StepFour />}
    </section>
  );
}
