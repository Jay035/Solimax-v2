import LatestPools from "@/components/LatestPools";
import TrendingPools from "@/components/TrendingPools";

export default function Home() {
  return (
    <section className="mt-5 pl-[1.69rem] pr-10 sm:pr-16">
      <LatestPools />
      <div className="mt-8 text-white ">
        <h1 className="text-4xl mb-3 sm:mb-2 sm:text-[2.5rem] tracking-[-0.075rem] sm:leading-[3.375rem]">
          The{" "}
          <span className="bg-gradient-linear bg-clip-text text-transparent">
            launchpad protocol
          </span>{" "}
          for everyone
        </h1>
        <p className="text-[#D1D1D6] mb-8 tracking-[-0.01125rem] md:text-[1.125rem]">
          Our easy to use platform makes creation of your own tokens and token
          sales seamless. Tokens created on SoliMax will be verified and
          published on explorer websites
        </p>
        <div className="">
          <button className="mr-8 text-[0.875rem] rounded-[0.625rem] py-5 px-8 md:py-[1.3125rem] md:px-[2.4375rem] bg-[#454FDA] text-white">
            Create new
          </button>
          <button className="text-[0.875rem]">Learn more</button>
        </div>
      </div>
      {/* CARDS */}
      <div className="mt-[3.69rem] mb-[5.19rem] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[0.88rem]">
        {/* TOTAL LIQUIDITY RAISED */}
        <section>
          <div className="border border-[#51525C] bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL LIQUIDITY RAISED
            </h3>
            <h1 className="tracking-[-0.02rem] text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              $422.6M
            </h1>
          </div>
        </section>
        {/* TOTAL PROJECTS LAUNCHED */}
        <section>
          <div className="border border-[#51525C] bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL PROJECTS LAUNCHED
            </h3>
            <h1 className="tracking-[-0.02rem] text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              540
            </h1>
          </div>
        </section>
        {/* TOTAL PARTICIPANTS */}
        <section>
          <div className="border border-[#51525C] bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL PARTICIPANTS
            </h3>
            <h1 className="tracking-[-0.02rem] text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              500.2K
            </h1>
          </div>
        </section>
        {/* TOTAL VALUE LOCKED */}
        <section>
          <div className="border border-[#51525C] bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL VALUE LOCKED
            </h3>
            <h1 className="tracking-[-0.02rem] text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              $222.4M
            </h1>
          </div>
        </section>
      </div>
      <TrendingPools />
    </section>
  );
}
