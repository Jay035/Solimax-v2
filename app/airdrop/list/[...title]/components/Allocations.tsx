import Image from "next/image";

type Props = {};

export default function Allocations({}: Props) {
  return (
    <div className="bg-[#1D1C20] pt-[1.3rem] border border-[#3F3F46] rounded-[0.65rem] px-5 pb-6 text-sm">
      <section className="flex mb-8 items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl tracking-[-0.015rem]">
          Allocations
        </h1>
        <p className="text-[#A4D0F2] text-sm">3 addresses</p>
      </section>
      <p className="pb-2 border-b border-[#3F3F46] text-xs text-[#E4E4E7]">
        0x8Fc6d87464Bf8c6a93eb99d729273eda2905d39c
      </p>
      <p className="py-2 border-b border-[#3F3F46] text-xs text-[#E4E4E7]">
        0x8Fc6d87464Bf8c6a93eb99d729273eda2905d39c
      </p>
      <p className="py-2 border-b border-[#3F3F46] text-xs text-[#E4E4E7]">
        0x8Fc6d87464Bf8c6a93eb99d729273eda2905d39c
      </p>
    </div>
  );
}
