import Link from "next/link";
import { useState } from "react";

type Props = {};

export default function Navigation({}: Props) {
  const [tabSelected, setTabSelected] = useState("all-airdrops");
  const links = [
    {
      id: "all-airdrops",
      label: "All Airdrops",
      route: "/airdrop/list/all",
    },
    {
      id: "my-airdrops",
      label: "My Airdrops",
      route: "/airdrop/list/all",
    },
    {
      id: "created-by-me",
      label: "Created by me",
      route: "/airdrop/list/all",
    },
  ];
  return (
    <nav className="mt-[0.81rem] text-white flex items-start gap-4 tracking-[-0.01rem]">
      {links?.map((link) => (
        <Link
          key={link?.id}
          href={link?.route}
          onClick={() => setTabSelected(link?.id)}
          className={`${
            link.id === tabSelected && "border-[#F3CE92] border-b-2 pb-1"
          }`}
        >
          {link?.label}
        </Link>
      ))}
    </nav>
  );
}
