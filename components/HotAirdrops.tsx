import Image from "next/image";

type Props = {};

export default function HotAirdrops({}: Props) {
  return (
    <section>
      {/* title */}
      <div className="flex items-center gap-2 mb-[1.56rem]">
        <Image width={24} height={24} src="/icons/fire.svg" alt="fire icon" />
        <h1 className="text-[#A594FD] text-2xl tracking-[-0.015rem]">
          Hot airdrops
        </h1>
      </div>
      {/* airdrop list */}
      <ul className="bg-[#1D1C20] border border-[#51525C] rounded-[0.625rem]">
        <li className="flex items-center justify-between pt-3 pb-[0.8rem] px-4 gap-4 border-b border-[#51525C]">
          <div className="flex items-center gap-2">
            <Image
              width={32}
              height={32}
              src="/icons/fi_3940417.svg"
              alt="icon"
            />
            <span className="text-[#D1D1D6]">New 4D Twin Maps Airdrop</span>
          </div>
          <button className="text-[#D0D5DD] tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
            View airdrop
          </button>
        </li>
        <li className="flex items-center justify-between pt-3 pb-[0.8rem] px-4 gap-4 border-b border-[#51525C]">
          <div className="flex items-center gap-2">
            <Image
              width={32}
              height={32}
              src="/icons/fi_3940417.svg"
              alt="icon"
            />
            <span className="text-[#D1D1D6]">New 4D Twin Maps Airdrop</span>
          </div>
          <button className="text-[#D0D5DD] tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
            View airdrop
          </button>
        </li>
        <li className="flex items-center justify-between pt-3 pb-[0.8rem] px-4 gap-4 border-b border-[#51525C]">
          <div className="flex items-center gap-2">
            <Image
              width={32}
              height={32}
              src="/icons/fi_3940417.svg"
              alt="icon"
            />
            <span className="text-[#D1D1D6]">New 4D Twin Maps Airdrop</span>
          </div>
          <button className="text-[#D0D5DD] tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
            View airdrop
          </button>
        </li>
        <li className="flex items-center justify-between pt-3 pb-[0.8rem] px-4 gap-4 border-b border-[#51525C]">
          <div className="flex items-center gap-2">
            <Image
              width={32}
              height={32}
              src="/icons/fi_3940417.svg"
              alt="icon"
            />
            <span className="text-[#D1D1D6]">New 4D Twin Maps Airdrop</span>
          </div>
          <button className="text-[#D0D5DD] tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
            View airdrop
          </button>
        </li>
        <li className="flex items-center justify-between pt-3 pb-[0.8rem] px-4 gap-4">
          <div className="flex items-center gap-2">
            <Image
              width={32}
              height={32}
              src="/icons/fi_3940417.svg"
              alt="icon"
            />
            <span className="text-[#D1D1D6]">New 4D Twin Maps Airdrop</span>
          </div>
          <button className="text-[#D0D5DD] tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
            View airdrop
          </button>
        </li>
      </ul>
    </section>
  );
}
