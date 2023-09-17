import Image from "next/image";
import logoIcon from "/public/icons/bsc-icon.svg";

type Props = {};

export default function Wallet({}: Props) {
  return (
    <section className="flex items-center gap-[0.62rem] justify-end w-full xl:px-20 xl:pt-8 xl:pb-[1.31rem] xl:border-b xl:border-[#424242]">
      <button className="bg-[#28282B] xl:p-[0.625rem] border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
        <Image src={logoIcon} className="w-auto h-auto xl:w-9 xl:h-9" alt="bsc icon" />
        <span className="text-white text-[0.875rem] hidden xl:inline-block">
          BSC Mainnet
        </span>
        <Image
          width={16}
          height={16}
          className="hidden xl:inline-block"
          src="/icons/chevron-down.svg"
          alt="bsc icon"
        />
      </button>
      <button className="rounded-[3.125rem] p-[0.62rem] border-[0.5px] w-[7.38rem] h-12 bg-[#454FDA] text-white border-[#424242]">
        Connect
      </button>
    </section>
  );
}
