"use client";
import Link from "next/link";
import navLogo from "/public/icons/logo-icon.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {};

export default function Navbar({}: Props) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const showOptions = () => {
    setOptionsOpen((prevstate) => !prevstate);
  };
  console.log(pathname);

  // const isActive = pathname.startsWith(link.href)

  return (
    <nav
      className={`py-[2.69rem] font-questrial px-10 w-full border-r border-[#424242]`}
    >
      {/* hamburger and logo group */}
      <section className="flex gap-3 items-center">
        {/* hamburger */}
        <div
          className="z-50 flex flex-col gap-1 items-center cursor-pointer lg:hidden"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
          }}
        >
          <span
            className={`w-7 h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
              menuOpen ? `rotate-[45deg] ` : ``
            }`}
          ></span>
          <span
            className={`w-7 h-[3px] bg-white block rounded-lg transition-all duration-150 ${
              menuOpen ? `hidden` : ``
            }`}
          ></span>
          <span
            className={`w-7 h-[3px] bg-white block rounded-lg transition-all duration-150 delay-75 ${
              menuOpen ? `rotate-[495deg] -translate-y-1.5 ` : ``
            }`}
          ></span>
        </div>
        {/* logo */}
        <div className="flex gap-[0.67rem] items-center">
          <Image
            src={navLogo}
            className="w-[1.42rem] hidden lg:block"
            alt="logo"
          />
          <span className="text-white text-[1.3rem] leading-[-0.04rem]">
            SoliMax Launchpad
          </span>
        </div>
      </section>
      <div
        className={`${
          menuOpen ? "left-0 top-0 px-10 pt-8" : "-left-full"
        } absolute w-full h-full bg-[#1D1C20] lg:bg-transparent  lg:relative lg:left-0 lg:h-fit`}
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
            <li className="cursor-pointer" onClick={showOptions}>
              <div className="flex justify-between">
                <span className="flex tracking-[-0.01rem] items-center gap-[0.75rem]">
                  <Image
                    src="/icons/triangle.svg"
                    width={18}
                    height={18}
                    alt="launchpads icon"
                  />
                  Launchpads
                </span>
                <Image
                  width={16}
                  height={16}
                  src="/icons/chevron-down.svg"
                  alt="chevron-down icon"
                />
              </div>
              {/* launchpads options */}
              {optionsOpen && (
                <ul className="transition-all duration-100 ease-in-out pl-7 flex flex-col gap-[0.75rem] mt-[0.75rem] text-[0.875rem] text-[#A0A0AB]">
                  <li onClick={() => setMenuOpen(prevState => !prevState)} className="tracking-[-0.00875rem] border-b-[0.5px] pb-1 border-[#26272B]">
                    <Link href="/createLaunchpad">Create launchpad</Link>
                  </li>
                  <li onClick={() => setMenuOpen(prevState => !prevState)} className="tracking-[-0.00875rem] border-b-[0.5px] pb-1 border-[#26272B]">
                    <Link href="">Create token</Link>
                  </li>
                  <li onClick={() => setMenuOpen(prevState => !prevState)} className="tracking-[-0.00875rem]">
                    <Link href="">Launchpad list</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Private sale */}
            <li className="cursor-pointer flex items-center justify-between gap-[0.75rem]">
              <span className="flex tracking-[-0.01rem] items-center gap-[0.75rem]">
                <Image
                  src="/icons/shield.svg"
                  width={18}
                  height={18}
                  alt="shield icon"
                />
                Private sale
              </span>
              <Image
                width={16}
                height={16}
                src="/icons/chevron-down.svg"
                alt="chevron-down icon"
              />
            </li>
            {/* solilock */}
            <li className="cursor-pointer flex items-center justify-between gap-[0.75rem]">
              <span className="flex tracking-[-0.01rem] items-center gap-[0.75rem]">
                <Image
                  src="/icons/unlock.svg"
                  width={18}
                  height={18}
                  alt="lock icon"
                />
                Solilock
              </span>
              <Image
                width={16}
                height={16}
                src="/icons/chevron-down.svg"
                alt="chevron-down icon"
              />
            </li>
            {/* airdrop */}
            <li className="cursor-pointer flex items-center justify-between gap-[0.75rem]">
              <span className="flex tracking-[-0.01rem] items-center gap-[0.75rem]">
                <Image
                  src="/icons/airdrop 1.svg"
                  width={18}
                  height={18}
                  alt="airdrop icon"
                />
                Airdrop
              </span>
              <Image
                width={16}
                height={16}
                src="/icons/chevron-down.svg"
                alt="chevron-down icon"
              />
            </li>
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
