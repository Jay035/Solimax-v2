import Image from "next/image";
import chevronDown from "../public/icons/chevron-down.svg";
import { TrendingPoolsData } from "./data";
import { PoolsDataProps } from "@/types";

type Props = {};

export default function TrendingPools({}: Props) {
  return (
    <section data-aos="fade-in" className="text-white pr-[1.06rem] sm:pr-8">
      <div className="mb-[1.88rem] flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Image
            width={24}
            height={24}
            src="/icons/rocket.svg"
            alt="rocket icon"
          />
          <h3 className="text-[#F3CE92] text-2xl tracking-[-0.015rem]">
            Trending pools
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <h3>All pools</h3>
          <Image
            className="-rotate-90 w-[14px]"
            src={chevronDown}
            alt="caret"
          />
        </div>
      </div>
      {/* table */}

      <div className="w-fit md:w-full grid grid-cols-1 overflow-x-auto rounded-[0.625rem] border border-[#51525C] bg-[#1D1C20]">
        <table
          className="w-full border-collapse table pr-[2.31rem]"
          cellPadding={10}
        >
          <thead className="">
            <tr className="whitespace-nowrap text-left border-b border-[#51525C]">
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="project-name"
              >
                &nbsp;
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="project-name"
              >
                PROJECT
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="sale-type"
              >
                SALE TYPE
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="price"
              >
                PRICE
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="min-buy"
              >
                MIN BUY
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="max-buy"
              >
                MAX BUY
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="total-supply"
              >
                TOTAL SUPPLY
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="date-of-completion"
              >
                DATE OF COMPLETION
              </th>
            </tr>
          </thead>
          <tbody className="mt-[1.19rem] text-sm">
            {TrendingPoolsData?.map((data: PoolsDataProps) => (
              <tr key={data?.id} className="whitespace-nowrap">
                <th
                  // id={data?.id}
                  className="bg-[#26272B] border-r border-[#51525C]"
                >
                  {data?.id}.
                </th>
                <td headers={`project ${data?.id}`}>{data?.projectName}</td>
                <td headers={`sale-type ${data?.id}`}>{data?.saleType}</td>
                <td headers={`price ${data?.id}`}>{data?.price}</td>
                <td headers={`min-buy ${data?.id}`}>{data?.minBuy}</td>
                <td headers={`max-buy ${data?.id}`}>{data?.maxBuy}</td>
                <td headers={`total-supply ${data?.id}`}>
                  {data?.totalSupply}
                </td>
                <td headers={`date-of-completion ${data?.id}`}>
                  {data?.dateOfCompletion}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
