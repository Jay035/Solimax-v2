import RedirectButton from "@/components/RedirectButton";
import { LockInformation } from "./components/LockInformation";
import { PairInformation } from "./components/PairInformation";

export default function SingleLockRecord({
  params,
}: {
  params: { recordId: number };
}) {
  console.log(params.recordId);

  return (
    <main className="text-white pt-6 pb-20 px-8 md:px-[2.37rem] xl:pr-20 xl:border-t xl:border-[#424242]">
      <RedirectButton route="" />
      <div className="mt-[2.81rem] mb-8 p-[1px] rounded-[0.625rem] bg-gradient-to-r from-[#77cdeb] via-[#953ddd] to-[#a56ef4]">
        <div className="bg-[#1D1C20] rounded-[0.625rem] py-[3.2rem] flex flex-col gap-4 justify-center items-center">
          <p className="text-lg tracking-[-0.01125rem]">Unlocks in</p>
          <section className="bg-[#14221E] flex gap-2 rounded-lg border-[0.5px] border-[#81C8F2] py-4 px-6">
            <p className="tracking-[-0.00875rem] text-sm flex items-center gap-1">
              <span className="text-2xl tracking-[-0.015rem] font-[450] font-neueHaas">
                01
              </span>{" "}
              Hour
            </p>
            <p className="tracking-[-0.00875rem] text-sm flex items-center gap-1">
              <span className="text-2xl tracking-[-0.015rem] font-[450] font-neueHaas">
                25
              </span>{" "}
              Min
            </p>
            <p className="tracking-[-0.00875rem] text-sm flex items-center gap-1">
              <span className="text-2xl tracking-[-0.015rem] font-[450] font-neueHaas">
                45
              </span>{" "}
              Sec
            </p>
          </section>
        </div>
      </div>
      <PairInformation />
      <LockInformation />
      <p className="text-[0.875rem] mt-8 text-[#D1D1D6]">
        Disclaimer: Solimax Presale will never endorse or encourage that you
        invest in any of the projects listed and therefore, accept no liability
        for any loss occasioned. It is the user(s) responsibility to do their
        own research and seek financial advice from a professional. More
        information about (DYOR) can be found via{" "}
        <span className="underline">Binance Academy</span>.
      </p>
    </main>
  );
}
