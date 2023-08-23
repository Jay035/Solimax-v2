"use client";
import CreationSteps from "@/components/launchpad/CreationSteps";
// import ButtonGroup from "@/components/launchpad/ButtonGroup";
import PresaleForm from "@/components/launchpad/presale/PresaleForm";
// import { GlobalContext } from "@/context/LaunchpadContext";

export default function CreateLaunchpad() {
  // const { currentStep } = GlobalContext();

  return (
    <main className="mt-[2.5rem] text-white grid lg:grid-cols-[17rem_auto] lg:items-start gap-8">
      {/* LEFT COLUMN */}
      <CreationSteps />

      {/* RIGHT COLUMN */}
      <section>
        <PresaleForm />
        <p className="mt-8 text-[0.875rem] text-[#D1D1D6]">
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
