import Image from "next/image";

type Props = {};

export default function TrendingPools({}: Props) {
  return (
    <section className="text-white">
      <div className="mb-[1.88rem] flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Image
            width={24}
            height={24}
            src="/icons/rocket.svg"
            alt="rocket icon"
          />
          <h3 className="text-[#F3CE92] text-2xl tracking-[-0.015rem]">
            Trending pools
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <h3>All pools</h3>
          <Image
            className="-rotate-90"
            width={14}
            height={14}
            src="/icons/chevron-down.svg"
            alt="caret"
          />
        </div>
      </div>
      {/* table */}
      <section className="overflow-x-scroll pr-[2.31rem] rounded-[0.625rem] border border-[#51525C] bg-[#1D1C20] w-full ">
        <div className="whitespace-nowrap py-[0.8rem] border-b border-[#51525C] pl-[3.75rem] pr-[2.31rem] grid grid-cols-7 items-center gap-[6.94rem] w-full">
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            PROJECT
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            SALE TYPE
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            PRICE
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            MIN BUY
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            MAX BUY
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            TOTAL SUPPLY
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            DATE OF SUPPLY
          </h3>
        </div>
        <div className="flex flex-col gap-4 my-[1.19rem]">
          {/* first row */}
          <div className="grid grid-cols-7 whitespace-nowrap pl-[3.75rem] text-[0.875rem] tracking-[-0.00875rem] text-[#EAECF0] items-center gap-[6.94rem] w-full">
            <p className="">Catdashian</p>
            <p>Public</p>
            <p>$0.001</p>
            <p>$100</p>
            <p>$1000</p>
            <p>100,000,000</p>
            <p>17th April, 10:00am UTC +1</p>
          </div>
          {/* second row */}
          <div className="grid grid-cols-7 whitespace-nowrap pl-[3.75rem]  text-[0.875rem] tracking-[-0.00875rem] text-[#EAECF0] items-center gap-[6.94rem] w-full">
            <p>Catdashian</p>
            <p>Public</p>
            <p>$0.001</p>
            <p>$100</p>
            <p>$1000</p>
            <p>100,000,000</p>
            <p>17th April, 10:00am UTC +1</p>
          </div>
          {/* third row */}
          <div className="grid grid-cols-7 whitespace-nowrap pl-[3.75rem] text-[0.875rem] tracking-[-0.00875rem] text-[#EAECF0] items-center gap-[6.94rem] w-full">
            <p>Catdashian</p>
            <p>Public</p>
            <p>$0.001</p>
            <p>$100</p>
            <p>$1000</p>
            <p>100,000,000</p>
            <p>17th April, 10:00am UTC +1</p>
          </div>
          {/* fourth row */}
          <div className="grid grid-cols-7 whitespace-nowrap pl-[3.75rem] text-[0.875rem] tracking-[-0.00875rem] text-[#EAECF0] items-center gap-[6.94rem] w-full">
            <p>Catdashian</p>
            <p>Public</p>
            <p>$0.001</p>
            <p>$100</p>
            <p>$1000</p>
            <p>100,000,000</p>
            <p>17th April, 10:00am UTC +1</p>
          </div>
          {/* fifth row */}
          <div className="grid grid-cols-7 whitespace-nowrap pl-[3.75rem] text-[0.875rem] tracking-[-0.00875rem] text-[#EAECF0] items-center gap-[6.94rem] w-full">
            <p>Catdashian</p>
            <p>Public</p>
            <p>$0.001</p>
            <p>$100</p>
            <p>$1000</p>
            <p>100,000,000</p>
            <p>17th April, 10:00am UTC +1</p>
          </div>
        </div>
      </section>
    </section>
  );
}
