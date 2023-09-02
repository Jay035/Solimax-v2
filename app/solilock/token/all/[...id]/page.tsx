import Image from "next/image";
import Link from "next/link";
import icon1 from "../../../../../public/icons/icon-2.svg";
import { LockInformation } from "./components/LockInformation";

type Props = {};

export default function page({ params }: { params: { id: number } }) {
  return (
    <section className="text-white pt-6 pb-20 px-8 md:px-[2.37rem] xl:pr-20 xl:border-t xl:border-[#424242]">
      <Link href="/solilock/token/all">
        <svg
          className="cursor-pointer mb-[3.19rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <LockInformation />
    </section>
  );
}
