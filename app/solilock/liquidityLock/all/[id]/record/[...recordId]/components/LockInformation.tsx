import Image from "next/image";
import icon1 from "../../../../../../../../public/icons/icon-2.svg";

type Props = {};

export function LockInformation({}: Props) {
  return (
    <div className="bg-[#1D1C20] pt-[1.94rem] border border-[#3F3F46] rounded-[0.65rem] pb-[0.62rem] px-[0.63rem] text-sm">
      <section className="pb-[1.12rem] mb-2 border-b border-[#3F3F46] flex gap-4 items-center">
        <Image
          className="bg-white rounded-full w-14 h-14"
          src={icon1}
          alt="token logo"
        />
        <h1 className="text-xl lg:text-2xl text-white">Pair Information</h1>
      </section>
      {/* Total Amount Locked */}
      <section className="pt-4 pb-4 px-[1.19rem] mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Total Amount Locked
        </p>
        <p className="tracking-[-0.00875rem]">200,000 CFX</p>
      </section>
      {/* Total Value Locked */}
      <section className="pt-4 pb-4 px-[1.19rem] mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Total Value Locked
        </p>
        <p className="tracking-[-0.00875rem]">$865</p>
      </section>
      {/* OWNER */}
      <section className="pb-2 mb-2 flex justify-between gap-4 pt-4 border-b border-[#3F3F46] px-[1.19rem] items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">Owner</p>
        <p className="tracking-[-0.0075rem] text-[#A4D0F2] underline text-xs">
          0x8Fc6d87464Bf8c6a93eb99d729273eda2905d39c
        </p>
      </section>
      {/* Lock Date */}
      <section className="pt-4 pb-4 px-[1.19rem] mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Lock Date
        </p>
        <p className="tracking-[-0.00875rem]">2023.08.20 04:58 UTC</p>
      </section>
      {/* Unlock Date */}
      <section className="pt-4 pb-4 px-[1.19rem] mb-2 flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Unlock Date
        </p>
        <p className="tracking-[-0.00875rem]">
          2023.08.26 04:58 UTC (in 6 days)
        </p>
      </section>
    </div>
  );
}
