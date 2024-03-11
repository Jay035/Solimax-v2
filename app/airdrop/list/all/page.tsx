"use client";
import Navigation from "../components/Navigation";
import Filter from "../components/Filter";
import { airdropListDetails } from "@/components/data";
import { Card } from "../components/Card";
import { useState } from "react";
import { Newsletter } from "@/components/Newsletter";

type Props = {};

export default function LaunchpadList({}: Props) {
  const [email, setEmail] = useState<string>("");

  return (
    <section className="pl-8 pr-10 sm:pr-16 pb-32 ">
      <div className="mt-[2.81rem] mb-8 p-[1px] rounded-[0.625rem] bg-gradient-to-r from-[#77cdeb] via-[#953ddd] to-[#a56ef4]">
        <div className="bg-[#1D1C20] rounded-[0.625rem] py-8 md:py-[3.2rem] flex justify-center gap-6 flex-col md:flex-row md:items-center">
          <section className="flex flex-col items-center border-b md:border-b-0 md:border-r border-[#3F3F46] pb-4 md:pb-0 md:pr-[6.75rem] gap-4">
            <p className="text-[#E4E4E7]">TOTAL PROJECTS</p>
            <h2 className="text-xl md:text-[2rem] leading-6 font-medium text-white">
              0
            </h2>
          </section>
          <section className="flex flex-col items-center pt-4 md:pt-0 md:pl-[6.75rem] gap-4">
            <p className="text-[#E4E4E7]">TOTAL PARTICIPANTS</p>
            <h2 className="text-xl md:text-[2rem] leading-6 font-medium text-white">
              0
            </h2>
          </section>
        </div>
      </div>
      <Navigation />
      {airdropListDetails?.length > 0 ? (
        <div className="">
          <Filter />
          <div className="mb-[6.25rem] grid lg:grid-cols-3 gap-x-[1.59rem] gap-y-8">
            {airdropListDetails?.map((item: any, index: number) => (
              <Card key={index} item={item} route="/airdrop/list" />
            ))}
          </div>
      <div className="p-0.5">
        <Newsletter
          className="md:py-12 p-6 md:px-16 bg-[#1d1d21] text-white text-center rounded-2xl"
          email={email}
          setEmail={setEmail}
        />
      </div>
        </div>
      ) : (
        <div className="text-lg md:text-xl text-white text-center">No Information yet</div>
      )}
    </section>
  );
}
