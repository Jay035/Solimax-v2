"use client";
import { useState } from "react";
import LatestPools from "@/components/LatestPools";
import Navigation from "../../components/Navigation";
import ReactPaginate from "react-paginate";
import groupIcon from "../../../../public/icons/Group-icon.svg";
import cornfluxLogo from "../../../../public/icons/cornflux.svg";
import fuelNetworkLogo from "../../../../public/icons/icon-1.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const tokens = [
  {
    name: "Fuel/Wrapped Ether",
    symbol: "FUEL/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
  {
    name: "Cornflux",
    symbol: "FUEL/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
  {
    name: "Fuel/Wrapped Ether",
    symbol: "FUEL/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
  {
    name: "Cornflux",
    symbol: "FUEL/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
  {
    name: "Fuel/Wrapped Ether",
    symbol: "FUEL/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
  {
    name: "Cornflux",
    symbol: "FUEL/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
  {
    name: "Fuel/Wrapped Ether",
    symbol: "FUEL/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
  {
    name: "Fuel/Wrapped Ether",
    symbol: "FUEL/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
  {
    name: "CornFlux/Wrapped Ether",
    symbol: "CFX/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
  {
    name: "Fuel/Wrapped Ether",
    symbol: "FUEL/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
  {
    name: "CornFlux/Wrapped Ether",
    symbol: "CFX/WETH",
    amount: "200,000,000",
    logo: groupIcon,
  },
];

export default function AllLiquidityLocks({}: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [tabSelected, setTabSelected] = useState("all");
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 6;
  const pagesVisited = pageNumber * itemPerPage;
  const pageCount = Math.ceil(tokens.length / itemPerPage);
  const links = [
    {
      id: "all",
      label: "All",
      route: "/solilock/liquidityLock/all",
    },
    {
      id: "my-locks",
      label: "My Locks",
      route: "/solilock/liquidityLock/my-locks",
    },
  ];

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  return (
    <div className="pt-5 pl-[1.68rem] pb-32 xl:border-t xl:border-[#424242]">
      <LatestPools />
      <main className="mt-[2.5rem] text-white pr-[1.68rem] xl:pr-10">
        <Navigation
          links={links}
          tabSelected={tabSelected}
          setTabSelected={setTabSelected}
        />
        <div className="bg-[#26272B] mt-[2.12rem] mb-8 w-full flex items-center gap-[0.62rem] border border-[#F4F4F5] rounded-[0.625rem] py-[0.88rem] px-[1.19rem]">
          <i className="ri-search-line text-[#E4E4E7]"></i>
          <input
            type="text"
            value={searchInput}
            onChange={(e: any) => setSearchInput(e.target.value)}
            placeholder="Search by LP token address or token address"
            className="w-full min-w-[10rem] bg-transparent outline-none tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            name="search"
            id="search"
          />
        </div>
        {/* <TokenTable /> */}
        <section className="w-full pt-[1.56rem] pb-[0.88rem] grid grid-cols-1 overflow-x-auto rounded-[0.625rem] border border-[#51525C] bg-[#1D1C20]">
          <div className="grid grid-cols-2 w-full px-4 md:px-[4.12rem] tracking-[-0.01rem] pb-[1.63rem]">
            <h1>Token</h1>
            <h1 className="pl-8">Amount</h1>
          </div>
          <ul role="token">
            {tokens
              ?.slice(pagesVisited, pagesVisited + itemPerPage)
              ?.map((token: any, index: number) => (
                <li
                  key={index}
                  className="grid grid-cols-2 px-4 w-full md:px-[4.12rem] pt-8 pb-5 gap-16 lg:gap-4 border-t border-[#51525C]"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      className="bg-white rounded-full"
                      width={32}
                      height={32}
                      src={token?.logo}
                      alt="token logo"
                    />
                    <div className="flex flex-col ">
                      <span className="text-[#F4F4F5]">{token?.name}</span>
                      <span className="text-[#A0A0AB] text-xs md:text-base">
                        {token?.symbol}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-12">
                    <p>{token?.amount}</p>
                    <Link
                      href={`/solilock/token/all/${index}`}
                      className="text-[#A4D0F2] text-center tracking-[-0.00875rem] text-sm"
                    >
                      View
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
        </section>
        <ReactPaginate
          breakLabel="..."
          // previousLabel={"Previous"}
          pageCount={pageCount}
          onPageChange={changePage}
          pageRangeDisplayed={3}
          previousLabel="< Previous"
          nextLabel={"Next >"}
          renderOnZeroPageCount={null}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </main>
    </div>
  );
}
