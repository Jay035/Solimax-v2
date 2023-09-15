"use client";
import Navigation from "../components/Navigation";
import Filter from "../components/Filter";
import { Card } from "../components/Card";
import { airdropListDetails } from "@/components/data";

type Props = {};

export default function LaunchpadList({}: Props) {
  return (
    <section className="pl-8 pr-10 sm:pr-16 pb-32 xl:border-t xl:border-[#424242]">
      <div className="mt-[2.81rem] mb-8 p-[1px] rounded-[0.625rem] bg-gradient-to-r from-[#77cdeb] via-[#953ddd] to-[#a56ef4]">
        <div className="bg-[#1D1C20] rounded-[0.625rem] py-[3.2rem] flex justify-center items-center">
          <section className="flex flex-col items-center border-r border-[#3F3F46] pr-[6.75rem] gap-4">
            <p className="text-[#E4E4E7]">TOTAL PROJECTS</p>
            <h2 className="text-[2rem] leading-6 text-white">32</h2>
          </section>
          <section className="flex flex-col items-center pl-[6.75rem] gap-4">
            <p className="text-[#E4E4E7]">TOTAL PARTICIPANTS</p>
            <h2 className="text-[2rem] leading-6 text-white">1002</h2>
          </section>
        </div>
      </div>
      <Navigation />
      <Filter />
      <div className="mb-[6.25rem] grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-[1.59rem] gap-y-8">
        {airdropListDetails?.map((item: any, index: number) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="p-0.5">
        <div className="py-12 px-16 bg-[#1d1d21] text-white text-center rounded-2xl">
          <h1 className="text-[#fcfcfd] tracking-[-0.045rem] text-2xl md:text-4xl">
            Stay in the loop about all projects
          </h1>
          <p className="mt-5 mb-8 text-[#e4e4e7] text-base md:text-xl">
            Sign up our mailing list to receive our new presales, features, tips
            and reviews for next 100X projects.
          </p>
          <div className="max-w-[30.6rem] mx-auto">
            <form className="flex gap-4 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-[0.87rem] py-3 rounded-lg bg-[#26272B] border border-[#A0A0AB] shadow-[0px_1px_2px_0px] shadow-[#101828]/[0.05] bg-transparent outline-none tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                name=""
                id=""
              />
              <button
                className="rounded-lg border border-[#454fda] bg-[#454fda] px-5 py-3"
                onClick={(e: any) => {
                  e.preventDefault();
                }}
              >
                Subscribe
              </button>
            </form>
            <p className="mt-[0.38rem] text-left text-[#d1d1d6]">
              We care about your data in our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
