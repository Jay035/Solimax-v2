import img1 from "../../../../public/icons/gamer 1.svg";
import img2 from "../../../../public/icons/icon-2.svg";
import img3 from "../../../../public/icons/deer 1.svg";
import img4 from "../../../../public/icons/icon-1.svg";
import img5 from "../../../../public/icons/delivery-drone 1.svg";
import img6 from "../../../../public/icons/icon-3.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

export function Card({ item }: any) {
  const router = useRouter();
  const [isAddedToFavorites, setIsAddedToFavorites] = useState<boolean>(false);
  return (
    <div className="p-[0.07rem] bg-gradient-to-b from-[#51525C] to-[#414149] rounded-[0.72294rem]">
      <article className="bg-[#1d1c20] w-full rounded-[0.72294rem] p-[1.74rem] pb-[0.86rem] xl:p-4">
        <header className="mb-[1.45rem] flex items-center gap-12 justify-between">
          <Image className="w-10 2xl:w-16" src={img1} alt="icon" />
          <div className="flex items-center gap-2 text-white">
            <Image
              width={40}
              height={40}
              className="cursor-pointer outline-none"
              onClick={() => setIsAddedToFavorites((prevState) => !prevState)}
              src={`${
                isAddedToFavorites
                  ? "/icons/heart-filled.svg"
                  : "/icons/heart-no-fill.svg"
              }`}
              alt="heart icon"
            />
            {/* status */}
            <p className="p-2 text-sm rounded-[0.72294rem] bg-[#a4d0f2]/[0.05]">
              {item?.status}
            </p>
          </div>
        </header>
        <section className="text-white mb-4">
          {/* title */}
          <h1
            className="text-2xl cursor-pointer tracking-[-0.0174rem]"
            onClick={() => {
              router.push(`/launchpad/list/${item?.title}`);
            }}
          >
            {item?.title}
          </h1>
          <div className="my-3 flex items-center gap-[2.99rem]">
            {/* Type */}
            <div className="">
              <p className="text-[#a0a0ab] text-[0.87rem] tracking-[-0.0087rem] mb-[0.29rem]">
                Type
              </p>
              <h3 className="text-lg tracking-[-0.012rem] text-[#f4f4f5]">
                {item?.type}
              </h3>
            </div>
            {/* max buy */}
            <div className="">
              <p className="text-[#a0a0ab] text-[0.87rem] tracking-[-0.0087rem] mb-[0.29rem]">
                Max buy
              </p>
              <h3 className="text-lg tracking-[-0.012rem] text-[#f4f4f5]">
                {item?.maxBuy}
              </h3>
            </div>
          </div>
          {/* Soft/Hard cap  */}
          <div className="">
            <p className="text-[#a0a0ab] mb-[0.29rem] text-[0.87rem] tracking-[-0.0087rem]">
              Soft/Hard cap
            </p>
            <h1 className="tracking-[-0.013rem] bg-clip-text text-transparent bg-gradient-to-r from-[#81C8F2] via-[#ACD44D] to-[#d9d9d9] text-[1.3rem]">
              {item?.softCap}/{item?.hardCap} BNB
            </h1>
          </div>
          {/* progress */}
          <div className="mt-[1.13rem]">
            <div className="flex justify-between items-center text-[#e4e4e7] text-[0.72rem]">
              <p className="tracking-[-0.0073rem]">Progress</p>
              <p className="tracking-[-0.0073rem]">{item?.progress}%</p>
            </div>
            {/* progress bar */}
            <div className="bg-[#70707b] w-full h-[0.434rem] rounded-[0.58rem] my-[0.29rem]"></div>
            <div className="flex justify-between items-center text-[#e4e4e7] text-[0.72rem]">
              <p className="tracking-[-0.0073rem]">0 BNB</p>
              <p className="tracking-[-0.0073rem] text-[#f3ce92]">1000 BNB</p>
            </div>
          </div>
        </section>
        <section className="px-[1.74rem] py-[0.58rem] flex items-center justify-between bg-[#181818] rounded-[0.73rem]">
          {/* liquidity */}
          <div className="">
            <p className="tracking-[-0.0073rem] text-[#e4e4e7] text-[0.72rem]">
              Liquidity(%)
            </p>
            <h2 className="text-[#f4f4f5] text-[1.01rem] tracking-[-0.010rem]">
              {item?.liquidity}%
            </h2>
          </div>
          <div className="">
            <p className="tracking-[-0.0073rem] text-[#e4e4e7] text-[0.72rem]">
              Lock time
            </p>
            <h2 className="text-[#f4f4f5] text-[1.01rem] tracking-[-0.010rem]">
              {item?.lockTime} days
            </h2>
          </div>
        </section>
        <p className="text-white mt-[0.56rem] text-[0.87rem]">
          Sale starts in{" "}
          <span className="text-[#c38cc3] tracking-[-0.0087rem]">
            00: 24: 16
          </span>
        </p>
      </article>
    </div>
  );
}
