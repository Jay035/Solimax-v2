"use client";
import Link from "next/link";
import navLogo from "/public/icons/logo-icon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "@/context/Context";
import Wallet from "./Wallet";
import { Accordion } from "./Accordion";
import triangle from "../public/icons/triangle.svg";
import shieldIcon from "../public/icons/shield.svg";
import unlockIcon from "../public/icons/unlock.svg";
import airdropIcon from "../public/icons/airdrop 1.svg";

type Props = {};

export default function Navbar({}: Props) {
  const { setIsModalShowing } = GlobalContext();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const showOptions = () => {
    setOptionsOpen((prevstate) => !prevstate);
  };

  // const changeRoute = (route: string) => {
  //   router?.push(`${route}`);
  // };

  // const launchpadNavDropdownOptions = [
  //   {
  //     title: "Create launchpad",
  //     route: "/launchpad/presale/create",
  //     // routeRedirect: changeRoute("/launchpad/presale/create"),
  //   },
  //   {
  //     title: "Create fair launch",
  //     route: "/launchpad/fair-launch/create",
  //     // routeRedirect: changeRoute("/launchpad/fairLaunch/create"),
  //   },
  //   {
  //     title: "Create token",
  //     route: "/launchpad/fair-launch/create",
  //     // routeRedirect: changeRoute("/launchpad/fairLaunch/create"),
  //   },
  //   {
  //     title: "Launchpad list",
  //     route: "/launchpad/list",
  //     // routeRedirect: changeRoute("/launchpad/fairLaunch/create"),
  //   },
  // ];

  // const isActive = pathname.startsWith(link.href)

  return (
    <nav
      className={`pt-6 xl:pt-[2.69rem] flex justify-between items-center overflow-auto xl:block font-questrial px-[1.06rem] sm:px-7 xl:px-10 w-full border-r border-[#424242]`}
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
          href="/"
          className="gap-[0.67rem] items-center cursor-pointer hidden xl:flex"
        >
          <Image src={navLogo} className="w-[1.42rem]" alt="logo" />
          <span className="text-white text-[1.3rem] leading-[-0.04rem]">
            SoliMax Launchpad
          </span>
        </Link>
      </section>
      <div className="xl:hidden">
        <Wallet />
      </div>
      {/* menu */}
      <div
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
            <li className="flex items-center gap-[0.75rem] tracking-[-0.01rem]">
              <Image
                src="/icons/home-icon.svg"
                width={18}
                height={18}
                alt="home icon"
              />
              <Link href="/">Home</Link>
            </li>
            {/* launchpads */}
            <Accordion title="Launchpads" titleImg={triangle}>
              {/* launchpads options */}
              <li
                onClick={() => setMenuOpen((prevState) => !prevState)}
                className="tracking-[-0.00875rem] border-b-[0.5px] pb-1 border-[#26272B]"
              >
                <Link href="/launchpad/presale/create">Create launchpad</Link>
              </li>
              <li
                onClick={() => setMenuOpen((prevState) => !prevState)}
                className="tracking-[-0.00875rem] border-b-[0.5px] pb-1 border-[#26272B]"
              >
                <Link href="/launchpad/fair-launch/create">
                  Create fair launch
                </Link>
              </li>
              <li
                onClick={(e: any) => {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                  setIsModalShowing?.(true);
                  setMenuOpen((prevState) => !prevState);
                  if (typeof window != "undefined" && window.document) {
                    document.body.style.overflow = "hidden";
                  }
                }}
                className="tracking-[-0.00875rem] cursor-pointer border-b-[0.5px] pb-1 border-[#26272B]"
              >
                Create token
              </li>
              <li
                onClick={() => setMenuOpen((prevState) => !prevState)}
                className="tracking-[-0.00875rem]"
              >
                <Link href="/launchpad/list">Launchpad list</Link>
              </li>
            </Accordion>
            {/* Private sale */}
            <Accordion title="Private sale" titleImg={shieldIcon}>
              {/* private sale options */}
              <li
                onClick={() => setMenuOpen((prevState) => !prevState)}
                className="tracking-[-0.00875rem] border-b-[0.5px] pb-1 border-[#26272B]"
              >
                <Link href="/privateSale/create">Create private sale</Link>
              </li>
              <li
                onClick={() => setMenuOpen((prevState) => !prevState)}
                className="tracking-[-0.00875rem] "
              >
                <Link href="/privateSale/list">Private sale list</Link>
              </li>
            </Accordion>
            {/* Solilock */}
            <Accordion title="Solilock" titleImg={unlockIcon}>
              <li
                onClick={() => setMenuOpen((prevState) => !prevState)}
                className="tracking-[-0.00875rem] border-b-[0.5px] pb-1 border-[#26272B]"
              >
                <Link href="/solilock/create">Create lock</Link>
              </li>
              <li
                onClick={() => setMenuOpen((prevState) => !prevState)}
                className="tracking-[-0.00875rem] border-b-[0.5px] pb-1 border-[#26272B]"
              >
                <Link href="/solilock/token">Token</Link>
              </li>
              <li
                onClick={() => setMenuOpen((prevState) => !prevState)}
                className="tracking-[-0.00875rem]"
              >
                <Link href="/solilock/liquidityLock">Liquidity lock</Link>
              </li>
            </Accordion>
            {/* airdrop */}
            <Accordion title="Airdrop" titleImg={airdropIcon}>
              <p>Content of Airdrop goes here.</p>
            </Accordion>

            {/* Leaderboard */}
            <li className="flex items-center gap-[0.75rem]">
              <Image
                src="/icons/keyboard-open.svg"
                width={18}
                height={18}
                alt="home icon"
              />
              <Link href="/" className="tracking-[-0.01rem]">
                Leaderboard
              </Link>
            </li>
            {/* Pools alert */}
            <li className="flex items-center gap-[0.75rem]">
              <Image
                src="/icons/keyboard-open.svg"
                width={18}
                height={18}
                alt="keyboard icon"
              />
              <Link href="/" className="tracking-[-0.01rem]">
                Pools alert
              </Link>
            </li>
            {/* KYC & audit */}
            <li className="flex items-center gap-[0.75rem]">
              <Image
                src="/icons/android.svg"
                width={18}
                height={18}
                alt="android icon"
              />
              <Link href="/" className="tracking-[-0.01rem]">
                KYC & Audit
              </Link>
            </li>
            {/* Docs */}
            <li className="flex items-center gap-[0.75rem]">
              <Image
                src="/icons/document.svg"
                width={18}
                height={18}
                alt="document icon"
              />
              <Link href="/" className="tracking-[-0.01rem]">
                Docs
              </Link>
            </li>
          </ul>
        </section>
        {/* SOCIAL SECTION */}
        <section className="mt-8">
          <h2 className="mb-[0.75rem] text-[#F3CE92] text-[0.625rem] tracking-[0.0625rem]">
            SOCIAL
          </h2>
          <ul className="text-white flex flex-col gap-5">
            {/* twitter */}
            <li className="flex items-center gap-[0.75rem]">
              <Image
                src="/icons/twitter.svg"
                width={18}
                height={18}
                alt="home icon"
              />
              <Link href="/">Twitter</Link>
            </li>
            {/* telegram */}
            <li className="flex items-center gap-[0.75rem]">
              <Image
                src="/icons/telegram.svg"
                width={18}
                height={18}
                alt="home icon"
              />
              <Link href="/">Telegram</Link>
            </li>
            {/* discord */}
            <li className="flex items-center gap-[0.75rem]">
              <Image
                src="/icons/discord.svg"
                width={18}
                height={18}
                alt="home icon"
              />
              <Link href="/">Discord</Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
}
