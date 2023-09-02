import Image from "next/image";

type Props = {};

export default function TokenTable({}: Props) {
  return (
    <div className="w-full pt-[1.56rem] pb-[0.88rem] grid grid-cols-1 overflow-x-auto rounded-[0.625rem] border border-[#51525C] bg-[#1D1C20]">
      <div className="flex justify-between px-10 lg:px-[4.12rem] tracking-[-0.01rem] pb-[1.63rem]">
        <h1>Token</h1>
        <h1>Amount</h1>
        <h1>&nbsp;</h1>
      </div>
      <li className="flex items-center justify-between px-10 lg:px-[4.12rem] pt-8 pb-5 gap-4 border-t border-[#51525C]">
        <div className="flex items-center gap-2">
          <Image
            className="bg-white rounded-full"
            width={32}
            height={32}
            src="/icons/cornflux.svg"
            alt="icon"
          />
          <div className="flex flex-col">
            <span className="text-[#F4F4F5]">CornFlux</span>
            <span className="text-[#A0A0AB]">CFX</span>
          </div>
        </div>
        <p>200,000,000 CFX</p>
        <p className="text-[#A4D0F2] text-center tracking-[-0.00875rem] text-sm">
          View
        </p>
      </li>
      <li className="flex items-center justify-between px-10 lg:px-[4.12rem] pt-8 pb-5 gap-4 border-t border-[#51525C]">
        <div className="flex items-center gap-2">
          <Image
            className=""
            width={32}
            height={32}
            src="/icons/icon-1.svg"
            alt="icon"
          />
          <div className="flex flex-col">
            <span className="text-[#F4F4F5]">Fuel Network</span>
            <span className="text-[#A0A0AB]">FUEL</span>
          </div>
        </div>
        <p>200,000,000 CFX</p>
        <p className="text-[#A4D0F2] text-center tracking-[-0.00875rem] text-sm">
          View
        </p>
      </li>
      <li className="flex items-center justify-between px-10 lg:px-[4.12rem] pt-8 pb-5 gap-4 border-t border-[#51525C]">
        <div className="flex items-center gap-2">
          <Image
            className=""
            width={32}
            height={32}
            src="/icons/icon-1.svg"
            alt="icon"
          />
          <div className="flex flex-col">
            <span className="text-[#F4F4F5]">Fuel Network</span>
            <span className="text-[#A0A0AB]">FUEL</span>
          </div>
        </div>
        <p>200,000,000 CFX</p>
        <p className="text-[#A4D0F2] text-center tracking-[-0.00875rem] text-sm">
          View
        </p>
      </li>
      <li className="flex items-center justify-between px-10 lg:px-[4.12rem] pt-8 pb-5 gap-4 border-t border-[#51525C]">
        <div className="flex items-center gap-2">
          <Image
            className=""
            width={32}
            height={32}
            src="/icons/icon-1.svg"
            alt="icon"
          />
          <div className="flex flex-col">
            <span className="text-[#F4F4F5]">Fuel Network</span>
            <span className="text-[#A0A0AB]">FUEL</span>
          </div>
        </div>
        <p>200,000,000 CFX</p>
        <p className="text-[#A4D0F2] text-center tracking-[-0.00875rem] text-sm">
          View
        </p>
      </li>
      <li className="flex items-center justify-between px-10 lg:px-[4.12rem] pt-8 pb-5 gap-4 border-t border-[#51525C]">
        <div className="flex items-center gap-2">
          <Image
            className=""
            width={32}
            height={32}
            src="/icons/icon-1.svg"
            alt="icon"
          />
          <div className="flex flex-col">
            <span className="text-[#F4F4F5]">Fuel Network</span>
            <span className="text-[#A0A0AB]">FUEL</span>
          </div>
        </div>
        <p>200,000,000 CFX</p>
        <p className="text-[#A4D0F2] text-center tracking-[-0.00875rem] text-sm">
          View
        </p>
      </li>
      <li className="flex items-center justify-between px-10 lg:px-[4.12rem] pt-8 pb-5 gap-4 border-t border-[#51525C]">
        <div className="flex items-center gap-2">
          <Image
            className=""
            width={32}
            height={32}
            src="/icons/icon-1.svg"
            alt="icon"
          />
          <div className="flex flex-col">
            <span className="text-[#F4F4F5]">Fuel Network</span>
            <span className="text-[#A0A0AB]">FUEL</span>
          </div>
        </div>
        <p>200,000,000 CFX</p>
        <p className="text-[#A4D0F2] text-center tracking-[-0.00875rem] text-sm">
          View
        </p>
      </li>
    </div>
  );
}
