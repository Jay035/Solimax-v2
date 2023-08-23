"use client";
import CreationSteps from "@/components/launchpad/CreationSteps";
import FairLaunchForm from "@/components/launchpad/fair-launch/FairLaunchForm";
// import { GlobalContext } from "@/context/LaunchpadContext";

export default function CreateFairLaunch() {
  // const { currentStep } = GlobalContext();
  return (
    <main className="mt-[2.5rem] text-white flex flex-col lg:flex-row lg:items-start gap-8">
      {/* LEFT COLUMN */}
      <CreationSteps />
      {/* RIGHT COLUMN */}
      <section>
        <FairLaunchForm />
        <p className="text-[0.875rem] mt-8 text-[#D1D1D6]">
          Disclaimer: Solimax Presale will never endorse or encourage that you
          invest in any of the projects listed and therefore, accept no
          liability for any loss occasioned. It is the user(s) responsibility to
          do their own research and seek financial advice from a professional.
          More information about (DYOR) can be found via{" "}
          <span className="underline">Binance Academy</span>.
        </p>
      </section>
    </main>
  );
}
