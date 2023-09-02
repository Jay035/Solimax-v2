import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  links: any[];
  tabSelected: string;
  setTabSelected: (e: string) => void;
};

export default function Navigation({
  links,
  tabSelected,
  setTabSelected,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setTabSelected?.(pathname);
  },[]);
  return (
    <nav className="mt-[0.81rem] text-white flex items-start gap-4 tracking-[-0.01rem]">
      {links?.map((link) => (
        <Link
          key={link?.id}
          href={link?.route}
          onClick={() => setTabSelected(link?.id)}
          className={`${
            link.route === pathname && "border-[#F3CE92] border-b-2 pb-1"
          } px-1`}
        >
          {link?.label}
        </Link>
      ))}
    </nav>
  );
}
