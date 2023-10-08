import Image from "next/image";

type Props = {};

export default function Details({}: Props) {
  return (
    <div className="bg-[#1D1C20] pt-[1.94rem] border border-[#3F3F46] rounded-[0.65rem] px-5 py-4 text-sm">
      {/* AIRDROP ADDRESS */}
      <section className="pb-2 mb-2 text-[#E4E4E7] border-b border-[#3F3F46] flex justify-between gap-4 items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Airdop Address
        </p>
        <div className="flex gap-[0.12rem] items-start text-right">
          <span className="tracking-[-0.0075rem] max-w-[10rem] md:max-w-none break-words underline text-xs">
            0x8Fc6d87464Bf8c6a93eb99d729273eda2905d39c
          </span>

          <Image
            src="/icons/copy-icon.svg"
            width={18}
            height={18}
            alt="copy icon"
          />
        </div>
      </section>
      {/* TOKEN ADDRESS */}
      <section className="pb-2 mb-2 flex justify-between gap-4 items-center border-b border-[#3F3F46]">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token Address
        </p>
        <div className="flex gap-[0.12rem] items-start">
          <span className="tracking-[-0.0075rem] text-right max-w-[10rem] md:max-w-none break-words underline text-xs">
            0x8Fc6d87464Bf8c6a93eb99d729273eda2905d39c
          </span>

          <Image
            src="/icons/copy-icon.svg"
            width={18}
            height={18}
            alt="copy icon"
          />
        </div>
      </section>
      {/* TOKEN NAME */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token name
        </p>
        <p className="tracking-[-0.00875rem] text-right">ASTRAVA</p>
      </section>
      {/* TOKEN SYMBOL */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token symbol
        </p>
        <p className="tracking-[-0.00875rem] text-right">AST</p>
      </section>
      {/* TOTAL TOKENS */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Total tokens
        </p>
        <p className="tracking-[-0.00875rem] text-right">AST</p>
      </section>
      {/* TGE release percent */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          TGE release percent
        </p>
        <p className="tracking-[-0.00875rem] text-right">10,000,000,000</p>
      </section>
      {/* CYCLE */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">Cycle</p>
        <p className="tracking-[-0.00875rem] text-right">2,000,000,000</p>
      </section>
      {/* CYCLE release percent */}
      <section className="pb-2 mb-2 flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Cycle release percent
        </p>
        <p className="tracking-[-0.00875rem] text-right">2,000,000,000</p>
      </section>
    </div>
  );
}
