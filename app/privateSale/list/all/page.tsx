"use client";
import Navigation from "../../components/Navigation";
import Filter from "../../components/Filter";
import { cardDetails } from "@/components/data";
import { useState } from "react";
import { Card } from "@/components/Card";
import { Newsletter } from "@/components/Newsletter";

type Props = {};

export default function LaunchpadList({}: Props) {
  const [email, setEmail] = useState<string>("");

  return (
    <section className="pl-[1.69rem] pr-[1.69rem] pt-6 xl:pr-10 pb-32">
      {cardDetails?.length > 0 ? (
        <div className="">
          <Navigation />
          <Filter />
          <div className="mb-[6.25rem] grid md:grid-cols-2 xl:grid-cols-3 gap-x-[1.59rem] gap-y-8">
            {cardDetails?.map((item: any, index: number) => (
              <Card key={index} item={item} route="/privateSale/list" />
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
        <div className="text-lg mt-6 md:text-xl text-white text-center">
          No Information yet
        </div>
      )}
    </section>
  );
}
