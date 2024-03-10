"use client";
import LatestPools from "@/components/LatestPools";
import PrivateSaleForm from "../components/privateSaleForm";
import CreationSteps from "@/components/CreationSteps";
import { GlobalContext } from "@/context/Context";

type Props = {};

export default function CreatePrivateSale({}: Props) {
  const {privateSaleCurrentStep, setPrivateSaleCurrentStep} = GlobalContext();
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
      title: "Private Sale",
      description: "Enter the private sale information",
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
    <div className="overflow-x-hidden pt-5 mb-20 ml-[1.69rem]">
      {/* <LatestPools /> */}
      <main className="mt-[2.5rem] text-white mr-[1.68rem] xl:mr-10 grid lg:grid-cols-[17rem_auto] lg:items-start gap-8">
        {/* LEFT COLUMN */}
        <CreationSteps stepTitles={stepTitles} currentStep={privateSaleCurrentStep} setCurrentStep={setPrivateSaleCurrentStep} />

        {/* RIGHT COLUMN */}
        <section>
          <PrivateSaleForm />
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
