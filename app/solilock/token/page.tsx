"use client";
import { useState } from "react";
import LatestPools from "@/components/LatestPools";
import Navigation from "../components/Navigation";
import TokenTable from "../components/TokenTable";
import ReactPaginate from "react-paginate";
import cornfluxLogo from "../../../public/icons/cornflux.svg";
import fuelNetworkLogo from "../../../public/icons/icon-1.svg";
import Image from "next/image";

type Props = {};

const tokens = [
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
  {
    name: "Cornflux",
    symbol: "CFX",
    amount: "200,000,000 CFX",
    logo: cornfluxLogo,
  },
];

export default function Token({}: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 6;
  const pagesVisited = pageNumber * itemPerPage;
  const pageCount = Math.ceil(tokens.length / itemPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  return (
    <div className="pt-5 pl-8 pr-10 sm:pr-16 pb-32 xl:border-t xl:border-[#424242]">
      <LatestPools />
      <main className="mt-[2.5rem] text-white">
        <Navigation />
        <div className="bg-[#26272B] mt-[2.12rem] mb-8 w-full flex items-center gap-[0.62rem] border border-[#F4F4F5] rounded-[0.625rem] py-[0.88rem] px-[1.19rem]">
          <i className="ri-search-line text-[#E4E4E7]"></i>
          <input
            type="text"
            value={searchInput}
            onChange={(e: any) => setSearchInput(e.target.value)}
            placeholder="Search by token address"
            className="w-full min-w-[10rem] bg-transparent outline-none tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            name="search"
            id="search"
          />
        </div>
        {/* <TokenTable /> */}
        <section className="w-full pt-[1.56rem] pb-[0.88rem] grid grid-cols-1 overflow-x-auto rounded-[0.625rem] border border-[#51525C] bg-[#1D1C20]">
          <div className="flex justify-between px-10 lg:px-[4.12rem] tracking-[-0.01rem] pb-[1.63rem]">
            <h1>Token</h1>
            <h1>Amount</h1>
            <h1>&nbsp;</h1>
          </div>
          <ul role="token">
            {tokens
              ?.slice(pagesVisited, pagesVisited + itemPerPage)
              ?.map((token: any, index: number) => (
                <li
                  key={index}
                  className="flex items-center justify-between px-10 lg:px-[4.12rem] pt-8 pb-5 gap-4 border-t border-[#51525C]"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      className="bg-white rounded-full"
                      width={32}
                      height={32}
                      src={token?.logo}
                      alt="token logo"
                    />
                    <div className="flex flex-col">
                      <span className="text-[#F4F4F5]">{token?.name}</span>
                      <span className="text-[#A0A0AB]">{token?.symbol}</span>
                    </div>
                  </div>
                  <p>200,000,000 CFX</p>
                  <p className="text-[#A4D0F2] text-center tracking-[-0.00875rem] text-sm">
                    View
                  </p>
                </li>
              ))}
          </ul>
        </section>
        <ReactPaginate
          breakLabel="..."
          // previousLabel={"Previous"}
          pageCount={pageCount}
          onPageChange={changePage}
          pageRangeDisplayed={5}
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
