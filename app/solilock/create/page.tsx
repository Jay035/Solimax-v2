"use client";
import LatestPools from "@/components/LatestPools";
import SolilockForm from "../components/solilockForm";

type Props = {};

export default function CreateSolilock({}: Props) {
  return (
    <div className="overflow-x-hidden pt-5 mb-20 ml-[1.69rem] xl:border-t xl:border-[#424242]">
      <LatestPools />
      <main className="mt-[2.5rem] text-white mr-[1.68rem] xl:mr-10">
        <SolilockForm />
        <p className="mt-8 text-[0.875rem] text-[#D1D1D6] max-w-[44.6rem]">
          Disclaimer: Solimax Presale will never endorse or encourage that you
          invest in any of the projects listed and therefore, accept no
          liability for any loss occasioned. It is the user(s) responsibility to
          do their own research and seek financial advice from a professional.
          More information about (DYOR) can be found via{" "}
          <span className="underline">Binance Academy</span>.
        </p>
      </main>
    </div>
  );
}
