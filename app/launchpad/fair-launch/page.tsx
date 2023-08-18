"use client";
import ButtonGroup from "@/components/launchpad/ButtonGroup";
import CreationSteps from "@/components/launchpad/CreationSteps";
import FairLaunchForm from "@/components/launchpad/fair-launch/FairLaunchForm";
import { GlobalContext } from "@/context/LaunchpadContext";

export default function CreateFairLaunch() {
  const { currentStep } = GlobalContext();
  return (
    <main className="mt-[2.5rem] text-white flex flex-col lg:flex-row lg:items-start gap-8">
      {/* LEFT COLUMN */}
      <CreationSteps />
      {/* RIGHT COLUMN */}
      <section
        className={`${
          currentStep === 1
            ? "bg-[#1D1C20] border border-[#26272B] pb-[6rem] rounded-[0.625rem] px-6 pt-8"
            : ""
        }  text-white  w-full`}
      >
        {currentStep === 1 && <ButtonGroup />}

        <FairLaunchForm />
      </section>
    </main>
  );
}
