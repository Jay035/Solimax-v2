import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function CustomSelect({ options, header, setHeader }: any) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    <div className="custom-dropdown" ref={dropdownRef}>
      <div
        className="dropdown-header flex items-center gap-[0.6rem]"
        id="currency"
        onClick={() => {
          setDropdownOpen((prevState) => !prevState);
        }}
      >
        <Image width={24} height={24} src="/icons/check.svg" alt="check icon" />
        {header}
      </div>
      {dropdownOpen && (
        <div className="dropdown-options flex flex-col gap-2">
          {options?.map((option: SelectProps, index: number) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option.value)}
              className="custom-option last:border-b-0 bg-[#3F3F46] py-2 tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
