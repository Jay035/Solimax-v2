import LatestPools from "@/components/LatestPools";

export default function Home() {
  return (
    <section className="mt-5 pl-[1.69rem] pr-20">
      <LatestPools />
      <div className="mt-8 text-white">
        <h1 className=" text-[2.5rem] tracking-[-0.075rem] leading-[3.375rem]">The <span className="bg-gradient-linear bg-clip-text text-transparent">launchpad protocol</span> for everyone</h1>
        <p className="text-[#D1D1D6] mb-8 tracking-[-0.01125rem] text-[1.125rem]">Our easy to use platform makes creation of your own tokens and token sales seamless. Tokens created on SoliMax will be verified and published on explorer websites</p>
      </div>
    </section>
  );
}
