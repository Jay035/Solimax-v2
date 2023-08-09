import Image from "next/image";

type Props = {};

export default function Wallet({}: Props) {
  return (
    <section className="flex items-center gap-[0.62rem] justify-end pr-20 pt-8 pb-[1.31rem] border-b border-[#424242]">
      <button className="bg-[#28282B] p-[0.625rem] border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]">
        <Image
          width={36}
          height={36}
          src="/icons/bsc-icon.svg"
          alt="bsc icon"
        />
        <span className="text-white text-[0.875rem]">BSC Mainnet</span>
        <Image
          width={16}
          height={16}
          src="/icons/chevron-down.svg"
          alt="bsc icon"
        />
      </button>
      <button className="rounded-[3.125rem] p-[0.62rem] border-[0.5px] w-28 bg-[#454FDA] text-white border-[#424242]">
        Connect
      </button>
    </section>
  );
}
