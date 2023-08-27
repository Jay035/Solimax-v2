"use client"
import React from "react";
import Navigation from "./components/Navigation";
import Filter from "./components/Filter";

type Props = {};

export default function LaunchpadList({}: Props) {
  return (
    <section className="pl-[1.69rem] pr-10 sm:pr-16">
      <Navigation />
      <Filter />
    </section>
  );
}
