"use client";
import LatestPools from "@/components/LatestPools";
import CreationSteps from "@/components/CreationSteps";
import PresaleForm from "../components/PresaleForm";
import { GlobalContext } from "@/context/Context";

export default function CreateLaunchpad() {
  const {presaleCurrentStep, setPresaleCurrentStep} = GlobalContext();
  const stepTitles = [
    {
      id: "verify-your-token",
      tag: 1,
      title: "Verify your token",
      description: "Enter the token address and verify",
      completed: true,
    },
    {
      id: "deFi-launchpad",
      tag: 2,
      title: "DeFi Launchpad",
      description: "Enter the launchpad information",
      completed: false,
    },
    {
      id: "additional-info",
      tag: 3,
      title: "Add Additional Info",
      description: "Let people know who you are",
      completed: false,
    },
    {
      id: "finish",
      tag: 4,
      title: "Finish",
      description: "Review your information and submit your presale",
      completed: false,
    },
  ];

  return (
    <div className="overflow-x-hidden pt-5 mb-20 mx-[1.69rem] xl:mr-16">
      <LatestPools />
      <main className="mt-[2.5rem] text-white grid lg:grid-cols-[17rem_auto] lg:items-start gap-8">
        {/* LEFT COLUMN */}
        <CreationSteps stepTitles={stepTitles} currentStep={presaleCurrentStep} setCurrentStep={setPresaleCurrentStep} />

        {/* RIGHT COLUMN */}
        <section>
          <PresaleForm />
          <p className="mt-8 text-[0.875rem] text-[#D1D1D6]">
            Disclaimer: Solimax Presale will never endorse or encourage that you
            invest in any of the projects listed and therefore, accept no
            liability for any loss occasioned. It is the user(s) responsibility
            to do their own research and seek financial advice from a
            professional. More information about (DYOR) can be found via{" "}
            <span className="underline">Binance Academy</span>.
          </p>
        </section>
      </main>
    </div>
  );
}
