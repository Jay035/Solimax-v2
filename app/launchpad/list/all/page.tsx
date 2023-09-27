"use client";
import Navigation from "../components/Navigation";
import Filter from "../components/Filter";
import { Card } from "../components/Card";
import { cardDetails } from "@/components/data";
import { useState } from "react";
import Newsletter from "@/components/Newsletter";

type Props = {};

export default function LaunchpadList({}: Props) {
  const [email, setEmail] = useState<string>("");

  return (
    <section className="pl-8 pr-10 sm:pr-16 pb-32 xl:border-t xl:border-[#424242]">
      <Navigation />
      <Filter />
      <div className="mb-[6.25rem] grid lg:grid-cols-2 2xl:grid-cols-3 gap-x-[1.59rem] gap-y-8">
        {cardDetails?.map((item: any, index: number) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="p-0.5">
        <Newsletter
          className="py-12 px-16 bg-[#1d1d21] text-white text-center rounded-2xl"
          email={email}
          setEmail={setEmail}
        />
      </div>
    </section>
  );
}
