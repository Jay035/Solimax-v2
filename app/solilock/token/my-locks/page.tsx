"use client";
import { useState } from "react";
import LatestPools from "@/components/LatestPools";
import Navigation from "../../components/Navigation";
import TokenTable from "../../components/TokenTable";
import ReactPaginate from "react-paginate";
import cornfluxLogo from "../../../../public/icons/cornflux.svg";
import fuelNetworkLogo from "../../../../public/icons/icon-1.svg";
import Image from "next/image";

type Props = {};

const tokens: any = [
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Fuel Network",
  //   symbol: "FUEL",
  //   amount: "200,000,000 FUEL",
  //   logo: fuelNetworkLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
  // {
  //   name: "Cornflux",
  //   symbol: "CFX",
  //   amount: "200,000,000 CFX",
  //   logo: cornfluxLogo,
  // },
];

export default function AllTokens({}: Props) {
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
      route: "/solilock/token/all",
    },
    {
      id: "my-locks",
      label: "My Locks",
      route: "/solilock/token/my-locks",
    },
  ];

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  return (
    <div className="pt-5 pl-[1.68rem] pb-32">
      <LatestPools />
      <main className="mt-[2.5rem] text-white pr-[1.68rem] xl:pr-10">
        <Navigation
          links={links}
          tabSelected={tabSelected}
          setTabSelected={setTabSelected}
        />
        {tokens.length > 0 ? (
          <div>
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
            <section className="w-full pt-[1.56rem] pb-[0.88rem] grid grid-cols-1 overflow-x-auto rounded-[0.625rem] border border-[#51525C] bg-[#1D1C20]">
              <div className="flex justify-between px-10 lg:px-[4.12rem] tracking-[-0.01rem] pb-[1.63rem]">
                <h1>Token</h1>
                <h1>Amount</h1>
                <h1>&nbsp;&nbsp;</h1>
              </div>
              <ul role="user-locks">
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
                          <span className="text-[#A0A0AB]">
                            {token?.symbol}
                          </span>
                        </div>
                      </div>
                      <p>{token?.amount}</p>
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
          </div>
        ) : (
          <div className="flex flex-col gap-8 justify-center items-center min-h-[90vh]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="224"
              height="225"
              viewBox="0 0 224 225"
              fill="none"
            >
              <circle cx="112" cy="112.5" r="112" fill="#3F3F46" />
              <path
                d="M166.666 97.5H156.333V87.1667C156.334 86.1485 156.135 85.1402 155.746 84.1993C155.357 83.2584 154.786 82.4035 154.066 81.6836C153.346 80.9636 152.491 80.3928 151.55 80.0038C150.609 79.6148 149.601 79.4153 148.583 79.4167H109.187C108.034 79.4169 106.895 79.1596 105.853 78.6635C104.812 78.1674 103.895 77.4451 103.168 76.5492L98.1046 70.3233C97.1394 69.1291 95.9193 68.1659 94.5336 67.5044C93.1479 66.8428 91.6318 66.4996 90.0963 66.5H60.7496C59.7315 66.4986 58.7231 66.6982 57.7822 67.0872C56.8413 67.4762 55.9864 68.047 55.2665 68.7669C54.5466 69.4868 53.9758 70.3417 53.5868 71.2826C53.1978 72.2235 52.9982 73.2319 52.9996 74.25V150.639C52.9943 151.803 53.2224 152.956 53.6706 154.029C54.1188 155.103 54.7778 156.076 55.6088 156.891C56.4233 157.722 57.3963 158.381 58.4702 158.829C59.544 159.277 60.6968 159.505 61.8604 159.5H148.815C150.735 159.499 152.602 158.877 154.139 157.727C155.676 156.577 156.799 154.961 157.34 153.119L171.626 104.113C171.849 103.343 171.89 102.532 171.746 101.744C171.602 100.955 171.276 100.211 170.795 99.5698C170.315 98.9285 169.691 98.4078 168.975 98.0486C168.258 97.6894 167.468 97.5016 166.666 97.5Z"
                fill="#A0A0AB"
              />
              <path
                d="M166.663 97.5H93.2287C91.3115 97.5002 89.446 98.1223 87.9124 99.2728C86.3788 100.423 85.2597 102.04 84.7231 103.881L70.3597 153.123C69.8231 154.963 68.7043 156.579 67.1712 157.729C65.6381 158.878 63.7733 159.5 61.8569 159.5H148.822C150.739 159.5 152.605 158.878 154.139 157.728C155.673 156.577 156.793 154.96 157.329 153.119L171.623 104.113C171.848 103.343 171.89 102.532 171.747 101.742C171.603 100.953 171.278 100.208 170.797 99.5666C170.315 98.9249 169.691 98.4041 168.974 98.0454C168.256 97.6867 167.465 97.5 166.663 97.5Z"
                fill="#D1D1D6"
              />
            </svg>
            <p className="text-[#D1D1D6] text-xl">Nothing yet</p>
          </div>
        )}
      </main>
    </div>
  );
}
