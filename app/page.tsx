import HotAirdrops from "@/components/HotAirdrops";
import LatestPools from "@/components/LatestPools";
import NewTokens from "@/components/NewTokens";
import TrendingPools from "@/components/TrendingPools";

export default function Home() {
  return (
    <div className="pt-5 mt-5 mb-20 w-fit pl-[1.06rem] sm:pl-8 overflow-x-hidden">
      <LatestPools />

      {/* HERO CONTENT */}
      <div className="mt-10 text-white text-center xl:text-left pr-[1.06rem] sm:pr-8 ">
        <h1 className="text-5xl mb-3 sm:mb-2 sm:text-[2.5rem] tracking-[-0.075rem] sm:leading-[3.375rem]">
          The{" "}
          <span className="bg-gradient-linear bg-clip-text text-transparent">
            launchpad protocol
          </span>{" "}
          for everyone
        </h1>
        <p className="text-[#D1D1D6] mb-8 tracking-[-0.01125rem] text-lg md:text-xl w-full xl:pr-52">
          Our easy to use platform makes creation of your own tokens and token
          sales seamless. Tokens created on{" "}
          <span className="text-[#C38CC3]">SoliMax</span> will be verified and
          published on explorer websites
        </p>
        <div className="flex justify-center items-center xl:justify-start">
          <button className="mr-8 text-base rounded-[0.625rem] py-5 md:py-[1.3rem] px-[2.44rem] bg-[#454FDA] text-white">
            Create new
          </button>
          <button className="text-base">Learn more</button>
        </div>
      </div>
      {/* ------------------------------ */}
      {/* CARDS */}
      <div className="mt-[3.69rem] mb-[5.19rem] pr-[1.06rem] sm:pr-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.88rem]">
        {/* TOTAL LIQUIDITY RAISED */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL LIQUIDITY RAISED
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              $422.6M
            </h1>
          </div>
        </section>
        {/* TOTAL PROJECTS LAUNCHED */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL PROJECTS LAUNCHED
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              540
            </h1>
          </div>
        </section>
        {/* TOTAL PARTICIPANTS */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL PARTICIPANTS
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              500.2K
            </h1>
          </div>
        </section>
        {/* TOTAL VALUE LOCKED */}
        <section className="w-full text-center xl:text-left md:min-w-[12rem] bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5 rounded-[0.62rem]">
          <div className="bg-[#1D1C20] rounded-[0.625rem] w-full">
            <h3 className="border-b border-[#51525C] px-5 py-[0.69rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              TOTAL VALUE LOCKED
            </h3>
            <h1 className="tracking-[-0.02rem] font-neueHaas text-3xl sm:text-[2rem] font-medium pt-4 pb-5 sm:pt-6 sm:pb-[1.94rem] px-5 sm:leading-[1.375rem] text-white">
              $222.4M
            </h1>
          </div>
        </section>
      </div>
      <TrendingPools />
      <div className="mt-[3.12rem] grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-8 pr-[1.06rem] sm:pr-8">
        <HotAirdrops />
        <NewTokens />
      </div>
    </div>
  );
}
