import Image from "next/image";

type Props = {};

export default function NewTokens({}: Props) {
  return (
    <section>
      {/* title */}
      <div className="flex items-center gap-2 mb-[1.56rem]">
        <Image width={24} height={24} src="/icons/coin.svg" alt="fire icon" />
        <h1 className="text-[#A594FD] text-2xl tracking-[-0.015rem]">
          New tokens
        </h1>
      </div>
      {/* airdrop list */}
      <ul className="bg-[#1D1C20] border border-[#51525C] rounded-[0.625rem]">
        <li className="flex items-center justify-between py-4 px-4 gap-4 border-b border-[#51525C]">
          <div className="flex items-center gap-2">
            <Image width={32} height={32} src="/icons/fuel.svg" alt="icon" />
            <div className="flex flex-col">
              <h2 className="text-[#D1D1D6] text-base tracking-[-0.01rem]">
                CornFlux
              </h2>
              <span className="text-[#A0A0AB] text-[0.75rem]">CFX</span>
            </div>
          </div>
          <p className="text-[#D0D5DD] tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
            Binance Smart Chain
          </p>
        </li>
        <li className="flex items-center justify-between py-4 px-4 gap-4 border-b border-[#51525C]">
          <div className="flex items-center gap-2">
            <Image width={32} height={32} src="/icons/fuel.svg" alt="icon" />
            <div className="flex flex-col">
              <h2 className="text-[#D1D1D6] text-base tracking-[-0.01rem]">
                CornFlux
              </h2>
              <span className="text-[#A0A0AB] text-[0.75rem]">CFX</span>
            </div>
          </div>
          <p className="text-[#D0D5DD] tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
            Optimism
          </p>
        </li>
        <li className="flex items-center justify-between py-4 px-4 gap-4 border-b border-[#51525C]">
          <div className="flex items-center gap-2">
            <Image width={32} height={32} src="/icons/fuel.svg" alt="icon" />
            <div className="flex flex-col">
              <h2 className="text-[#D1D1D6] text-base tracking-[-0.01rem]">
                CornFlux
              </h2>
              <span className="text-[#A0A0AB] text-[0.75rem]">CFX</span>
            </div>
          </div>
          <p className="text-[#D0D5DD] tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
            Fantom
          </p>
        </li>
        <li className="flex items-center justify-between py-4 px-4 gap-4">
          <div className="flex items-center gap-2">
            <Image width={32} height={32} src="/icons/fuel.svg" alt="icon" />
            <div className="flex flex-col">
              <h2 className="text-[#D1D1D6] text-base tracking-[-0.01rem]">
                CornFlux
              </h2>
              <span className="text-[#A0A0AB] text-[0.75rem]">CFX</span>
            </div>
          </div>
          <p className="text-[#D0D5DD] tracking-[-0.00875rem] text-[0.875rem] rounded-[3.125rem] py-1 px-[0.63rem] bg-[#28282B]">
            Fantom
          </p>
        </li>
      </ul>
    </section>
  );
}
