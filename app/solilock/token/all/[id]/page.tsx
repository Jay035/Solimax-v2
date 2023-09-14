"use client";
import { LockInformation } from "./components/LockInformation";
import { LockRecords } from "./components/LockRecords";
import { useRouter } from "next/navigation";

type Props = {};

export default function TokenPage({ params }: { params: { id: number } }) {
  const router = useRouter();

  return (
    <section className="text-white pt-6 pb-20 px-8 md:px-[2.37rem] xl:pr-20 xl:border-t xl:border-[#424242]">
      <button
        onClick={() => router.push("/solilock/token/all")}
        className="w-fit cursor-pointer mb-[3.19rem]"
      >
        <svg
          className=""
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
      </button>

      <LockInformation />
      <LockRecords id={params?.id} />
      <p className="text-[0.875rem] mt-8 text-[#D1D1D6]">
        Disclaimer: Solimax Presale will never endorse or encourage that you
        invest in any of the projects listed and therefore, accept no liability
        for any loss occasioned. It is the user(s) responsibility to do their
        own research and seek financial advice from a professional. More
        information about (DYOR) can be found via{" "}
        <span className="underline">Binance Academy</span>.
      </p>
    </section>
  );
}
