import Image from "next/image";
import icon from "../../../../../../public/icons/Group-icon.svg";

type Props = {};

export function LockInformation({}: Props) {
  return (
    <div className="bg-[#1D1C20] pt-[1.94rem] border border-[#3F3F46] rounded-[0.65rem] pb-[0.62rem] px-[0.63rem] text-sm">
      <section className="pb-[1.12rem] mb-2 border-b border-[#3F3F46] flex gap-4 items-center">
        <Image className="w-10 lg:w-16" src={icon} alt="icon" />
        <h1 className="text-xl lg:text-2xl text-white">Lock Information</h1>
      </section>
      {/* Current Locked Amount */}
      <section className="pt-[1.94rem] pb-4 px-[1.19rem] mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Current Locked Amount
        </p>
        <p className="tracking-[-0.00875rem]">200,000,000</p>
      </section>
      {/* Current Values Locked */}
      <section className="pt-4 pb-4 px-[1.19rem] mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Current Values Locked
        </p>
        <p className="tracking-[-0.00875rem]">$865</p>
      </section>
      {/* Liquidity ADDRESS */}
      <section className="pb-2 mb-2 flex justify-between gap-4 pt-4 border-b border-[#3F3F46] px-[1.19rem] items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Liquidity Address
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
      {/* Pair name */}
      <section className="pt-4 pb-4 px-[1.19rem] mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Pair Name
        </p>
        <p className="tracking-[-0.00875rem]">FUEL/WETH</p>
      </section>
      {/* Token Symbol */}
      <section className="pt-4 pb-4 px-[1.19rem] mb-2 flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">Dex</p>
        <p className="tracking-[-0.00875rem]">Uniswap</p>
      </section>
    </div>
  );
}
