import Image from "next/image";
import React, { useState } from "react";

export const Accordion: React.FC<AccordionProps> = ({
  title,
  titleImg,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="flex tracking-[-0.01rem] items-center gap-[0.75rem]">
          <Image src={titleImg} width={18} height={18} alt="launchpads icon" />
          {title}
        </span>
        {/* <span
          className={`transform text-white ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform`}
        >
          ▼
        </span> */}
        <Image
          className={`${isOpen && "rotate-180"} transform transition-transform`}
          width={16}
          height={16}
          src="/icons/chevron-down.svg"
          alt="chevron-down icon"
        />
      </div>
      {isOpen && (
        <ul className="transition-all duration-100 ease-in-out pl-7 flex flex-col gap-[0.75rem] mt-[0.75rem] text-[0.875rem] text-[#A0A0AB]">
          {children}
        </ul>
      )}
    </div>
  );
};
