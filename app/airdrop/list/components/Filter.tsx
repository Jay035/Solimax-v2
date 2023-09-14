import CustomSelect from "@/components/launchpad/CustomSelect";
import { useState } from "react";

type Props = {};

export default function Filter({}: Props) {
  const [statusSelected, setStatusSelected] = useState("Select");
  const [poolTypeSelected, setPoolTypeSelected] = useState("Select");
  const [sortOptionSelected, setSortOptionSelected] = useState("Select");
  const [chainOptionSelected, setChainOptionSelected] = useState("Select");
  const statusOptions = [
    {
      id: "no-filter",
      value: "No filter",
    },
    {
      id: "upcoming",
      value: "Upcoming",
    },
    {
      id: "in-progress",
      value: "In progress",
    },
    {
      id: "filled",
      value: "Filled",
    },
    {
      id: "ended",
      value: "Ended",
    },
    {
      id: "cancelled",
      value: "Cancelled",
    },
    {
      id: "whitelist",
      value: "Whitelist",
    },
  ];
  const poolTypeOptions = [
    {
      id: "no-filter",
      value: "No filter",
    },
    {
      id: "fair-launch",
      value: "Fair launch",
    },
    {
      id: "presale",
      value: "Presale",
    },
  ];
  const sortOptions = [
    {
      id: "no-filter",
      value: "No filter",
    },
    {
      id: "hardcap",
      value: "Hard cap",
    },
    {
      id: "softcap",
      value: "Soft cap",
    },
  ];
  const chainOptions = [
    {
      id: "no-filter",
      value: "No filter",
    },
    {
      id: "bsc",
      value: "BSC",
    },
    {
      id: "optimism",
      value: "Optimism",
    },
    {
      id: "ethereum",
      value: "Ethereum",
    },
    {
      id: "avalanche",
      value: "Avalanche",
    },
    {
      id: "polygon",
      value: "Polygon",
    },
    {
      id: "fantom",
      value: "Fantom",
    },
    {
      id: "chronos",
      value: "Chronos",
    },
  ];

  return (
    <section id="filter" className="mt-10 mb-[3.31rem] flex items-end gap-4 w-full">
      <div className="bg-[#26272B] w-full flex items-center gap-[0.62rem] border border-[#F4F4F5] rounded-[0.625rem] py-[0.88rem] px-[1.19rem]">
        <i className="ri-search-line text-[#E4E4E7]"></i>
        <input
          type="text"
          placeholder="Search by token address"
          className="w-full min-w-[12rem] bg-transparent outline-none tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          name=""
          id=""
        />
      </div>
      {/* <div className="flex items-center gap-2 w-full">
        <div className="w-full min-w-[7.3rem] max-w-[7.3rem] text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
          <p>Status</p>
          <CustomSelect
            options={statusOptions}
            header={statusSelected}
            setHeader={setStatusSelected}
          />
        </div>
        <div className="w-full min-w-[7.3rem] max-w-[7.3rem] text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
          <p>Pool type</p>
          <CustomSelect
            options={poolTypeOptions}
            header={poolTypeSelected}
            setHeader={setPoolTypeSelected}
          />
        </div>
        <div className="w-full min-w-[7.3rem] max-w-[7.3rem] text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
          <p>Sort by</p>
          <CustomSelect
            options={sortOptions}
            header={sortOptionSelected}
            setHeader={setSortOptionSelected}
          />
        </div>
        <div className="w-full min-w-[7.3rem] max-w-[7.3rem] text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
          <p>Chain</p>
          <CustomSelect
            options={chainOptions}
            header={chainOptionSelected}
            setHeader={setChainOptionSelected}
          />
        </div>
      </div> */}
    </section>
  );
}
