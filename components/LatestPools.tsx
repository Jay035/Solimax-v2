import Image from "next/image";

type Props = {};

export default function LatestPools({}: Props) {
  return (
    <section className="w-full text-white flex gap-2 items-center ">
      <div className="flex items-center gap-2 z-40 whitespace-nowrap w-[150px] bg-[#353644] py-1 px-2 rounded-[0.625rem]">
        <Image width={24} height={24} src="/icons/new.svg" alt="new icon" />
        <span className="text-[0.75rem] tracking-[-0.0075rem] ">
          LATEST POOLS
        </span>
      </div>
      <div className="overflow-hidden w-[45vw] lg:w-full">
        <ul
          id="scroll-text-group"
          className=" whitespace-nowrap flex gap-2 items-center"
        >
          <li className="text-[0.75rem] tracking-[-0.0075rem]">
            <span>#1 </span>
            <span className="underline text-[#A4D0F2]">xAIBOT</span>
          </li>
          <li className="text-[0.75rem] tracking-[-0.0075rem]">
            <span>#2 </span>
            <span className="underline text-[#A4D0F2]">YourPlace</span>
          </li>
          <li className="text-[0.75rem] tracking-[-0.0075rem]">
            <span>#3 </span>
            <span className="underline text-[#A4D0F2]">xAIBOT</span>
          </li>
          <li className="text-[0.75rem] tracking-[-0.0075rem]">
            <span>#4 </span>
            <span className="underline text-[#A4D0F2]">xAIBOT</span>
          </li>
          <li className="text-[0.75rem] tracking-[-0.0075rem]">
            <span>#5 </span>
            <span className="underline text-[#A4D0F2]">xAIBOT</span>
          </li>
          <li className="text-[0.75rem] tracking-[-0.0075rem]">
            <span>#6 </span>
            <span className="underline text-[#A4D0F2]">xAIBOT</span>
          </li>
          <li className="text-[0.75rem] tracking-[-0.0075rem]">
            <span>#7 </span>
            <span className="underline text-[#A4D0F2]">xAIBOT</span>
          </li>
          <li className="text-[0.75rem] tracking-[-0.0075rem]">
            <span>#8 </span>
            <span className="underline text-[#A4D0F2]">xAIBOT</span>
          </li>
          <li className="text-[0.75rem] tracking-[-0.0075rem]">
            <span>#9 </span>
            <span className="underline text-[#A4D0F2]">xAIBOT</span>
          </li>
          <li className="text-[0.75rem] tracking-[-0.0075rem]">
            <span>#10 </span>
            <span className="underline text-[#A4D0F2]">xAIBOT</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
