"use client";
import Link from "next/link";
import navLogo from "/public/icons/logo-icon.svg";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "@/context/Context";
import Wallet from "./Wallet";
import { Accordion } from "./Accordion";
import triangle from "../public/icons/triangle.svg";
import shieldIcon from "../public/icons/shield.svg";
import unlockIcon from "../public/icons/unlock.svg";
import airdropIcon from "../public/icons/airdrop 1.svg";

export default function Navbar() {
  const { isModalShowing, setIsModalShowing } = GlobalContext();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeRoute = (route: string) => {
    router?.push(route);
  };

  const showCreateTokenModal = (e: any) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setIsModalShowing?.(true);
    setMenuOpen((prevState) => !prevState);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  // DROPDOWN OPTIONS FOR LAUNCHPAD TAB
  const launchpadNavDropdownOptions = [
    {
      title: "Create launchpad",
      route: "/launchpad/presale/create",
      className:
        "tracking-[-0.00875rem] cursor-pointer border-b-[0.5px] pb-1 border-[#26272B]",
    },
    {
      title: "Create fair launch",
      route: "/launchpad/fair-launch/create",
      className:
        "tracking-[-0.00875rem] cursor-pointer border-b-[0.5px] pb-1 border-[#26272B]",
    },
    {
      title: "Create token",
      className:
        "tracking-[-0.00875rem] cursor-pointer border-b-[0.5px] pb-1 border-[#26272B]",
    },
    {
      title: "Launchpad list",
      route: "/launchpad/list/all",
      className: "tracking-[-0.00875rem] cursor-pointer",
    },
  ];

  // DROPDOWN OPTIONS FOR PRIVATE SALE TAB
  const privateSaleNavDropdownOptions = [
    {
      title: "Create private sale",
      route: "/privateSale/create",
      className:
        "tracking-[-0.00875rem] cursor-pointer border-b-[0.5px] pb-1 border-[#26272B]",
    },
    {
      title: "Private sale list",
      route: "/privateSale/list/all",
      className: "tracking-[-0.00875rem] cursor-pointer",
    },
  ];

  // DROPDOWN OPTIONS FOR SOLILOCK TAB
  const solilockNavDropdownOptions = [
    {
      title: "Create lock",
      route: "/solilock/create",
      className:
        "tracking-[-0.00875rem] cursor-pointer border-b-[0.5px] pb-1 border-[#26272B]",
    },
    {
      title: "Token",
      route: "/solilock/token/all",
      className:
        "tracking-[-0.00875rem] cursor-pointer border-b-[0.5px] pb-1 border-[#26272B]",
    },
    {
      title: "Liquidity lock",
      route: "/solilock/liquidityLock/all",
      className: "tracking-[-0.00875rem] cursor-pointer",
    },
  ];
  // DROPDOWN OPTIONS FOR AIRDROP TAB
  const airdropNavDropdownOptions = [
    {
      title: "Create airdrop",
      route: "/airdrop/create",
      className:
        "tracking-[-0.00875rem] cursor-pointer border-b-[0.5px] pb-1 border-[#26272B]",
    },
    {
      title: "Airdrop list",
      route: "/airdrop/list/all",
      className: "tracking-[-0.00875rem] cursor-pointer",
    },
  ];

  return (
    <nav
      className={`pt-6 xl:pt-[2.69rem] z-50 flex justify-between items-center overflow-auto xl:block font-questrial px-[1.06rem] sm:px-7  w-full border-r border-[#424242]`}
    >
      {/* hamburger and logo group */}
      <section className="flex gap-3 items-center">
        {/* hamburger */}
        <div
          className="z-50 flex flex-col gap-1 items-center cursor-pointer xl:hidden"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
          }}
        >
          <span
            className={`w-[1.6rem] h-[3px] bg-[#D1D1D6] block rounded-lg transition-all duration-150 delay-75 ${
              menuOpen ? `rotate-[45deg] ` : ``
            }`}
          ></span>
          <span
            className={`w-[1.6rem] h-[3px] bg-[#D1D1D6] block rounded-lg transition-all duration-150 ${
              menuOpen ? `hidden` : ``
            }`}
          ></span>
          <span
            className={`w-[1.6rem] h-[3px] bg-[#D1D1D6] block rounded-lg transition-all duration-150 delay-75 ${
              menuOpen ? `rotate-[495deg] -translate-y-1.5 ` : ``
            }`}
          ></span>
        </div>
        {/* logo */}
        <Link
          data-aos="fade-in"
          href="/"
          className="gap-[0.67rem] items-center cursor-pointer hidden xl:flex"
        >
          <Image src={navLogo} className="w-[1.42rem]" alt="logo" />
          <span className="text-white text-[1.3rem] leading-[-0.04rem] whitespace-nowrap">
            SoliMax Launchpad
          </span>
        </Link>
      </section>
      <div className="xl:hidden overflow-hidden">
        <Wallet containerClassName="flex items-center gap-[0.62rem] justify-end w-full xl:px-20 xl:pt-8 xl:pb-[1.31rem] xl:border-b xl:border-[#424242]" className="rounded-[3.125rem] p-[0.42rem] border-[0.5px] w-[9.38rem] h-10 bg-[#454FDA] text-white border-[#424242]" />
      </div>
      {/* menu */}
      <div
        // data-aos="fade-right"
        className={`${
          menuOpen
            ? "left-0 top-0 px-10 pt-8 xl:px-0 xl:pt-0"
            : "-left-full xl:left-0"
        } absolute z-40 w-full h-full bg-[#1D1C20] xl:bg-transparent xl:relative xl:left-0 xl:h-fit`}
      >
        {/* GENERAL SECTION */}
        <section className="mt-[3.56rem]">
          <h2 className="mb-[0.75rem] text-[#F3CE92] text-[0.625rem] tracking-[0.0625rem]">
            GENERAL
          </h2>
          <ul className="text-white flex flex-col gap-5">
            {/* home */}
            <li
              className={`flex items-center gap-[0.75rem] tracking-[-0.01rem] cursor-pointer ${
                pathname === "/" && "text-[#A4D0F2]"
              }`}
              onClick={() => {
                changeRoute("/");
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <Image
                src="/icons/home-icon.svg"
                width={18}
                height={18}
                alt="home icon"
              />
              Home
            </li>
            {/* launchpads */}
            <Accordion title="Launchpads" titleImg={triangle}>
              {/* launchpads options */}
              {launchpadNavDropdownOptions?.map((nav: any) => (
                <li
                  key={nav?.title}
                  // style={pathname === nav?.route ? "#A4D0F2" : ""}
                  onClick={(e) => {
                    if (nav.title === "Create token") {
                      console.log("Create token");
                      showCreateTokenModal(e);
                    } else {
                      changeRoute(nav?.route);
                    }
                    setMenuOpen((prevState) => !prevState);
                  }}
                  className={`${nav.className} ${
                    // pathname.includes("/launchpad/list/") ||
                    pathname === nav?.route ||
                    (nav?.title === "Create token" && isModalShowing)
                      ? "text-[#A4D0F2]"
                      : ""
                  }`}
                >
                  {nav?.title}
                </li>
              ))}
            </Accordion>
            {/* Private sale */}
            <Accordion title="Private sale" titleImg={shieldIcon}>
              {/* private sale options */}
              {privateSaleNavDropdownOptions?.map((nav: any) => (
                <li
                  key={nav?.title}
                  onClick={(e) => {
                    changeRoute(nav?.route);
                    setMenuOpen((prevState) => !prevState);
                  }}
                  className={`${nav.className} ${
                    pathname === nav?.route ? "text-[#A4D0F2]" : ""
                  }`}
                >
                  {nav?.title}
                </li>
              ))}
            </Accordion>
            {/* Solilock */}
            <Accordion title="Solilock" titleImg={unlockIcon}>
              {solilockNavDropdownOptions?.map((nav: any) => (
                <li
                  key={nav?.title}
                  onClick={(e) => {
                    changeRoute(nav?.route);
                    setMenuOpen((prevState) => !prevState);
                  }}
                  className={`${nav.className} ${
                    pathname === nav?.route ? "text-[#A4D0F2]" : ""
                  }`}
                >
                  {nav?.title}
                </li>
              ))}
            </Accordion>
            {/* airdrop */}
            <Accordion title="Airdrop" titleImg={airdropIcon}>
              {airdropNavDropdownOptions?.map((nav: any) => (
                <li
                  key={nav?.title}
                  onClick={(e) => {
                    changeRoute(nav?.route);
                    setMenuOpen((prevState) => !prevState);
                  }}
                  className={`${nav.className} ${
                    pathname === nav?.route ? "text-[#A4D0F2]" : ""
                  }`}
                >
                  {nav?.title}
                </li>
              ))}
            </Accordion>

            {/* Leaderboard */}
            {/* <li
              className="flex items-center gap-[0.75rem] tracking-[-0.01rem] cursor-pointer"
              onClick={() => {
                // changeRoute("/");
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <Image
                src="/icons/keyboard-open.svg"
                width={18}
                height={18}
                alt="home icon"
              />
              Leaderboard
            </li> */}
            {/* Pools alert */}
            <li
              className="flex items-center gap-[0.75rem] tracking-[-0.01rem] cursor-pointer"
              onClick={() => {
                // changeRoute("/");
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <Image
                src="/icons/keyboard-open.svg"
                width={18}
                height={18}
                alt="keyboard icon"
              />
              Pools alert
            </li>
            {/* KYC & audit */}
            <li
              className="flex items-center gap-[0.75rem] tracking-[-0.01rem] cursor-pointer"
              onClick={() => {
                // changeRoute("/");
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <Image
                src="/icons/android.svg"
                width={18}
                height={18}
                alt="android icon"
              />
              KYC & Audit
            </li>
            {/* Docs */}
            <li
              className="flex items-center gap-[0.75rem] tracking-[-0.01rem] cursor-pointer"
              onClick={() => {
                // changeRoute("/");
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <Image
                src="/icons/document.svg"
                width={18}
                height={18}
                alt="document icon"
              />
              Docs
            </li>
            {/* Bridge */}
            {/* <li
             className={`flex items-center gap-[0.75rem] tracking-[-0.01rem] cursor-pointer
             ${
              pathname === "/bridge" && "text-[#A4D0F2]"
            }`}
              onClick={() => {
                changeRoute("/bridge");
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <Image
                src="/icons/arrow-swap-horizontal.svg"
                width={18}
                height={18}
                alt="document icon"
              />
              Bridge
            </li> */}
          </ul>
        </section>
        {/* SOCIAL SECTION */}
        <section className="mt-8">
          <h2 className="mb-[0.75rem] text-[#F3CE92] text-[0.625rem] tracking-[0.0625rem]">
            SOCIAL
          </h2>
          <ul className="text-white flex flex-col gap-5">
            {/* twitter */}
            <li
              className="flex items-center gap-[0.75rem] tracking-[-0.01rem] cursor-pointer"
              onClick={() => {
                // changeRoute("/");
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <Image
                src="/icons/twitter.svg"
                width={18}
                height={18}
                alt="home icon"
              />
              Twitter
            </li>
            {/* telegram */}
            <li
              className="flex items-center gap-[0.75rem] tracking-[-0.01rem] cursor-pointer"
              onClick={() => {
                // changeRoute("/");
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <Image
                src="/icons/telegram.svg"
                width={18}
                height={18}
                alt="home icon"
              />
              Telegram
            </li>
            {/* discord */}
            <li
              className="flex items-center gap-[0.75rem] tracking-[-0.01rem] cursor-pointer"
              onClick={() => {
                // changeRoute("/");
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <Image
                src="/icons/discord.svg"
                width={18}
                height={18}
                alt="home icon"
              />
              Discord
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
}
