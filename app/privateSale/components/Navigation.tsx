import Link from "next/link";
import { useState } from "react";

type Props = {};

export default function Navigation({}: Props) {
  const [tabSelected, setTabSelected] = useState("all-launchpads");
  const links = [
    {
      id: "all-launchpads",
      label: "All private sales",
      route: "/launchpad/list/all",
    },
    {
      id: "my-contributions",
      label: "My contributions",
      route: "/launchpad/list/all",
    },
    {
      id: "favorites",
      label: "Favorites",
      route: "/launchpad/list/all",
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
