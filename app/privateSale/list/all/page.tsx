"use client";
import { cardDetails } from "@/components/data";
import Navigation from "../../components/Navigation";
import Filter from "../../components/Filter";
import Card from "../../components/Card";

type Props = {};

export default function PrivateSaleList({}: Props) {
  return (
    <section className="pl-8 pr-10 sm:pr-16 pb-32 xl:border-t xl:border-[#424242]">
      <Navigation />
      <Filter />
      <div className="mb-[6.25rem] grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-[1.59rem] gap-y-8">
        {cardDetails?.map((item: any, index: number) => (
          <Card key={index} item={item} />
        ))}
      </div>
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
    </section>
  );
}
