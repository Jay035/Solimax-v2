import Image from "next/image";
import { useState } from "react";

export default function CustomSelect({ options, onSelect }: any) {
  const [selectedOption, setSelectedOption] = useState("BNB");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionClick = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setDropdownOpen(false);
    onSelect(selectedValue);
  };
  return (
    <div className="custom-dropdown">
      <div
        className="dropdown-header flex items-center gap-[0.6rem]"
        id="currency"
        onClick={() => {
          setDropdownOpen((prevState) => !prevState);
          console.log("clciked");
        }}
      >
        <Image width={24} height={24} src="/icons/check.svg" alt="check icon" />
        {selectedOption}
      </div>
      {dropdownOpen && (
        <div className="dropdown-options">
          {options?.map((option: SelectProps) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className="custom-option bg-[#3F3F46] py-2 tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}