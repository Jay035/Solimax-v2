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
      <article className="bg-[#1d1c20] w-full rounded-[0.72294rem] p-[1.74rem] pb-[1.69rem] pr-[1.53rem]">
        <header className="mb-[1.45rem] flex items-center gap-12 justify-between">
          <Image className="w-12 2xl:w-[4.04rem]" src={img1} alt="icon" />
          <div className="flex items-center gap-2 text-white">
            <Image
              width={44}
              height={44}
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
            {/* <div className="bg-gradient-to-r p-0.5 rounded-[0.72294rem] from-[#81c8f2] via-[#acd44d] to-[#d9d9d9]"> */}
            <p className="p-[0.72294rem] rounded-[0.72294rem] bg-[#a4d0f2]/[0.05]">
              {item?.status}
            </p>
            {/* </div> */}
          </div>
        </header>
        <section className="text-white">
          {/* name */}
          <h1
            className="text-[1.74rem] tracking-[-0.0174rem] cursor-pointer"
            onClick={() => {
              router.push(`/airdrop/list/${item?.title}`);
            }}
          >
            {item?.title}
          </h1>
          <div className="py-6 flex flex-col gap-2 border-b border-[#26272B]">
            {/* token type */}
            <div className="flex justify-between">
              <p className="text-[#a0a0ab] text-[0.87rem] tracking-[-0.0087rem] mb-[0.29rem]">
                Token Type
              </p>
              <h3 className="text-[1.16rem] tracking-[-0.012rem] text-[#f4f4f5]">
                {item?.tokenType}
              </h3>
            </div>
            {/* Amount of token */}
            <div className="flex justify-between">
              <p className="text-[#a0a0ab] text-[0.87rem] tracking-[-0.0087rem] mb-[0.29rem]">
                Amount of token
              </p>
              <h3 className="text-[1.16rem] tracking-[-0.012rem] text-[#f4f4f5]">
                {item?.amountOfToken}
              </h3>
            </div>
            {/* Participants */}
            <div className="flex justify-between">
              <p className="text-[#a0a0ab] text-[0.87rem] tracking-[-0.0087rem] mb-[0.29rem]">
                Participants
              </p>
              <h3 className="text-[1.16rem] tracking-[-0.012rem] text-[#f4f4f5]">
                {item?.participants}
              </h3>
            </div>
          </div>
        </section>
        <p className="text-white mt-[1.44rem]">
          Sale starts in{" "}
          <span className="text-[#c38cc3] text-[0.87rem] tracking-[-0.0087rem]">
            00: 24: 16
          </span>
        </p>
      </article>
    </div>
  );
}
