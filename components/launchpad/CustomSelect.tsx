"use client";
import { SelectProps } from "@/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function CustomSelect({
  options,
  header,
  setHeader,
  currency,
}: any) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: any) => {
    setHeader(value);
    setDropdownOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="p-[0.07rem] w-full bg-gradient-to-b from-[#51525C] to-[#414149] rounded-[0.625rem]">
      <div
        className="custom-dropdown"
        onClick={() => {
          setDropdownOpen((prevState) => !prevState);
        }}
        ref={dropdownRef}
      >
        <div
          className={`dropdown-header flex items-center gap-1 ${
            pathname === "/bridge" && "gap-2"
          } ${header === "Select router exchange" && "text-[#A0A0AB]"}`}
          id="currency"
        >
          {pathname !== "/bridge" &&
            header !== "Select" &&
            header !== "Select router exchange" && (
              <Image
                width={20}
                height={20}
                src="/icons/check.svg"
                alt="check icon"
              />
            )}
          {pathname === "/bridge" && header === "SLM" && (
            <Image
              width="0"
              height="0"
              className="w-[2.125rem] h-[2.125rem]"
              src="/icons/logo-frame.svg"
              alt="check icon"
            />
          )}
          {pathname === "/bridge" && header === "BSC Chain" && (
            <Image
              width="0"
              height="0"
              className="w-[2.125rem] h-[2.125rem]"
              src="/icons/bsc-chain.svg"
              alt="check icon"
            />
          )}
          {pathname === "/bridge" && header === "Fantom" && (
            <Image
              width="0"
              height="0"
              className="w-[2.125rem] h-[2.125rem]"
              src="/icons/fantom.svg"
              alt="check icon"
            />
          )}
          <p className="truncate">{header}</p>
        </div>
        {dropdownOpen && (
          <div className="dropdown-options flex flex-col gap-2">
            {options?.map((option: SelectProps, index: number) => (
              <div
                key={index}
                onClick={() => {
                  handleOptionClick(option.value);
                  setDropdownOpen((prevState) => !prevState);
                }}
                className="custom-option last:border-b-0 bg-[#3F3F46] py-2 tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              >
                {option.value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
