import Image from "next/image";
import icon1 from "../../../../../../../../public/icons/icon-2.svg";

type Props = {
  id: number;
};

export function TokenInformation() {
  return (
    <div className="bg-[#1D1C20] mb-8 pt-[1.94rem] border border-[#3F3F46] rounded-[0.65rem] pb-[0.62rem] px-[0.63rem] text-sm">
      <section className="pb-[1.12rem] mb-2 border-b border-[#3F3F46] flex gap-4 items-center">
        <Image className="w-10 lg:w-16" src={icon1} alt="icon" />
        <h1 className="text-xl lg:text-2xl text-white">Token Information</h1>
      </section>
     
      {/* TOKEN ADDRESS */}
      <section className="pb-2 mb-2 flex justify-between gap-4 pt-4 border-b border-[#3F3F46] px-[1.19rem] items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token Address
        </p>
        <div className="flex gap-[0.12rem] items-start text-right">
          <span className="tracking-[-0.0075rem] text-[#A4D0F2] underline text-xs">
            0x8Fc6d87464Bf8c6a93eb99d729273eda2905d39c
          </span>
          <Image
            src="/icons/copy-icon.svg"
            width={18}
            height={18}
            alt="copy icon"
          />
        </div>
      </section>
      {/* Token name */}
      <section className="pt-4 pb-4 px-[1.19rem] mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token Name
        </p>
        <p className="tracking-[-0.00875rem]">CORNFLUX</p>
      </section>
      {/* Token Symbol */}
      <section className="pt-4 pb-4 px-[1.19rem] mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token Symbol
        </p>
        <p className="tracking-[-0.00875rem]">CFX</p>
      </section>
      {/* Token Decimals */}
      <section className="pt-4 pb-4 px-[1.19rem] mb-2 flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token Decimals
        </p>
        <p className="tracking-[-0.00875rem]">18</p>
      </section>
    </div>
  );
}

export const LockRecordsData = [
  {
    recordId: 1,
    wallet: "0x6a9d...0b78",
    amount: "100,000,000",
    unlockTime: "2023.08.26 04:58",
    cycle: "",
    cycleRelease: "",
    tge: "",
  },
  {
    recordId: 2,
    wallet: "0x6a9d...0b78",
    amount: "100,000,000",
    unlockTime: "2023.08.26 04:58",
    cycle: "",
    cycleRelease: "",
    tge: "",
  },
  {
    recordId: 3,
    wallet: "0x6a9d...0b78",
    amount: "100,000,000",
    unlockTime: "2023.08.26 04:58",
    cycle: "",
    cycleRelease: "",
    tge: "",
  },
];
