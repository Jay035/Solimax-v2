import Image from "next/image";
import chevronDown from "../public/icons/chevron-down.svg";

type Props = {};

export default function TrendingPools({}: Props) {
  return (
    <section className="text-white">
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
      <section className="hidden overflow-x-scroll pr-[2.31rem] rounded-[0.625rem] border border-[#51525C] bg-[#1D1C20] w-fit">
        <div className="whitespace-nowrap py-[0.8rem] border-b border-[#51525C] pl-[3.75rem] pr-[2.31rem] grid grid-cols-7 items-center gap-[6.94rem] w-full">
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            PROJECT
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            SALE TYPE
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            PRICE
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            MIN BUY
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            MAX BUY
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            TOTAL SUPPLY
          </h3>
          <h3 className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]">
            DATE OF SUPPLY
          </h3>
        </div>
        <div className="flex flex-col gap-4 my-[1.19rem]">
          {/* first row */}
          <div className="grid grid-cols-7 whitespace-nowrap pl-[3.75rem] text-[0.875rem] tracking-[-0.00875rem] text-[#EAECF0] items-center gap-[6.94rem] w-full">
            <p className="">Catdashian</p>
            <p>Public</p>
            <p>$0.001</p>
            <p>$100</p>
            <p>$1000</p>
            <p>100,000,000</p>
            <p>17th April, 10:00am UTC +1</p>
          </div>
          {/* second row */}
          <div className="grid grid-cols-7 whitespace-nowrap pl-[3.75rem]  text-[0.875rem] tracking-[-0.00875rem] text-[#EAECF0] items-center gap-[6.94rem] w-full">
            <p>Catdashian</p>
            <p>Public</p>
            <p>$0.001</p>
            <p>$100</p>
            <p>$1000</p>
            <p>100,000,000</p>
            <p>17th April, 10:00am UTC +1</p>
          </div>
          {/* third row */}
          <div className="grid grid-cols-7 whitespace-nowrap pl-[3.75rem] text-[0.875rem] tracking-[-0.00875rem] text-[#EAECF0] items-center gap-[6.94rem] w-full">
            <p>Catdashian</p>
            <p>Public</p>
            <p>$0.001</p>
            <p>$100</p>
            <p>$1000</p>
            <p>100,000,000</p>
            <p>17th April, 10:00am UTC +1</p>
          </div>
          {/* fourth row */}
          <div className="grid grid-cols-7 whitespace-nowrap pl-[3.75rem] text-[0.875rem] tracking-[-0.00875rem] text-[#EAECF0] items-center gap-[6.94rem] w-full">
            <p>Catdashian</p>
            <p>Public</p>
            <p>$0.001</p>
            <p>$100</p>
            <p>$1000</p>
            <p>100,000,000</p>
            <p>17th April, 10:00am UTC +1</p>
          </div>
          {/* fifth row */}
          <div className="grid grid-cols-7 whitespace-nowrap pl-[3.75rem] text-[0.875rem] tracking-[-0.00875rem] text-[#EAECF0] items-center gap-[6.94rem] w-full">
            <p>Catdashian</p>
            <p>Public</p>
            <p>$0.001</p>
            <p>$100</p>
            <p>$1000</p>
            <p>100,000,000</p>
            <p>17th April, 10:00am UTC +1</p>
          </div>
        </div>
      </section>
      <div className="w-fit grid grid-cols-1 overflow-x-auto rounded-[0.625rem] border border-[#51525C] bg-[#1D1C20]">
        <table
          className="w-full border-collapse table pr-[2.31rem]"
          cellPadding={16}
        >
          <thead className="">
            <tr className="whitespace-nowrap border-b border-[#51525C]">
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
          <tbody className="mt-[1.19rem] ">
            <tr>
              <th id="one" className="bg-[#26272B] border-r border-[#51525C]">
                1.
              </th>
              <td headers="project one">Cardashian</td>
              <td headers="sale-type one">Public</td>
              <td headers="price one">$10</td>
              <td headers="min-buy one">$100</td>
              <td headers="max-buy one">$1000</td>
              <td headers="total-supply one">$1000000</td>
              <td headers="date one">17th April, 10:00am UTC +1</td>
            </tr>
            <tr>
              <th id="one" className="bg-[#26272B] border-r border-[#51525C]">
                1.
              </th>
              <td headers="project one">Cardashian</td>
              <td headers="sale-type one">Public</td>
              <td headers="price one">$10</td>
              <td headers="min-buy one">$100</td>
              <td headers="max-buy one">$1000</td>
              <td headers="total-supply one">$1000000</td>
              <td headers="date one">17th April, 10:00am UTC +1</td>
            </tr>
            <tr>
              <th id="one" className="bg-[#26272B] border-r border-[#51525C]">
                1.
              </th>
              <td headers="project one">Cardashian</td>
              <td headers="sale-type one">Public</td>
              <td headers="price one">$10</td>
              <td headers="min-buy one">$100</td>
              <td headers="max-buy one">$1000</td>
              <td headers="total-supply one">$1000000</td>
              <td headers="date one">17th April, 10:00am UTC +1</td>
            </tr>
            <tr>
              <th id="one" className="bg-[#26272B] border-r border-[#51525C]">
                1.
              </th>
              <td headers="project one">Cardashian</td>
              <td headers="sale-type one">Public</td>
              <td headers="price one">$10</td>
              <td headers="min-buy one">$100</td>
              <td headers="max-buy one">$1000</td>
              <td headers="total-supply one">$1000000</td>
              <td headers="date one">17th April, 10:00am UTC +1</td>
            </tr>
            <tr>
              <th id="one" className="bg-[#26272B] border-r border-[#51525C]">
                1.
              </th>
              <td headers="project one">Cardashian</td>
              <td headers="sale-type one">Public</td>
              <td headers="price one">$10</td>
              <td headers="min-buy one">$100</td>
              <td headers="max-buy one">$1000</td>
              <td headers="total-supply one">$1000000</td>
              <td headers="date one">17th April, 10:00am UTC +1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
