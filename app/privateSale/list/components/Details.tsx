import Image from "next/image";

type Props = {};

export default function Details({}: Props) {
  return (
    <div className="bg-[#1D1C20] pt-[1.94rem] border border-[#3F3F46] rounded-[0.65rem] px-5 py-4 text-sm">
      {/* PRESALE ADDRESS */}
      <section className="pb-2 mb-2 text-[#E4E4E7] border-b border-[#3F3F46] flex justify-between gap-4 items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Presale Address
        </p>
        <div className="flex gap-[0.12rem] items-start text-right">
          <div className="flex flex-col">
            <span className="tracking-[-0.0075rem] max-w-[10rem] md:max-w-none break-words underline text-xs">
              0x8Fc6d87464Bf8c6a93eb99d729273eda2905d39c
            </span>
            <span className="text-[#A4D0F2] text-[0.625rem]">
              Do not send BNB to this address
            </span>
          </div>
          <Image
            src="/icons/copy-icon.svg"
            width={18}
            height={18}
            alt="copy icon"
          />
        </div>
      </section>
      {/* TOKEN ADDRESS */}
      <section className="pb-2 mb-2 flex justify-between gap-4 items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token Address
        </p>
        <div className="flex gap-[0.12rem] items-start">
          <div className="flex flex-col text-right">
            <span className="tracking-[-0.0075rem] underline text-xs">
              0x8Fc6d87464Bf8c6a93eb99d729273eda2905d39c
            </span>
            <span className="text-[#A4D0F2] text-[0.625rem]">
              Do not send BNB to this address
            </span>
          </div>
          <Image
            src="/icons/copy-icon.svg"
            width={18}
            height={18}
            alt="copy icon"
          />
        </div>
      </section>
      {/* TOKEN TYPE */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token type
        </p>
        <p className="tracking-[-0.00875rem] text-[#F3CE92]">Fair launch</p>
      </section>
      {/* TOKEN NAME */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token name
        </p>
        <p className="tracking-[-0.00875rem]">ASTRAVA</p>
      </section>
      {/* TOKEN SYMBOL */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token symbol
        </p>
        <p className="tracking-[-0.00875rem]">AST</p>
      </section>
      {/* TOKEN DECIMAL */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Token decimal
        </p>
        <p className="tracking-[-0.00875rem]">AST</p>
      </section>
      {/* TOTAL SUPPLY */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Total supply
        </p>
        <p className="tracking-[-0.00875rem]">10,000,000,000</p>
      </section>
      {/* TOTAL FOR PRESALE */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Tokens for presale
        </p>
        <p className="tracking-[-0.00875rem]">2,000,000,000</p>
      </section>
      {/* TOTAL FOR LIQUIDITY */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex gap-4 justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Tokens for liquidity
        </p>
        <p className="tracking-[-0.00875rem]">900,000,000</p>
      </section>
      {/* PRESALE RATE */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Presale rate
        </p>
        <p className="tracking-[-0.00875rem]">1 BNB = 10000 AST</p>
      </section>
      {/* LISTING RATE */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Listing rate
        </p>
        <p className="tracking-[-0.00875rem]">1 BNB = 80000 AST</p>
      </section>
      {/* SOFT CAP */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Soft cap
        </p>
        <p className="tracking-[-0.00875rem]">7000 BNB</p>
      </section>
      {/* HARD CAP */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Hard cap
        </p>
        <p className="tracking-[-0.00875rem]">5000 BNB</p>
      </section>
      {/* Unsold tokens */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Unsold tokens
        </p>
        <p className="tracking-[-0.00875rem]">Refund</p>
      </section>
      {/* Presale start time */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Presale start time
        </p>
        <p className="tracking-[-0.00875rem]">2023.08.11 17:00 (UTC)</p>
      </section>
      {/* Presale end time */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Presale end time
        </p>
        <p className="tracking-[-0.00875rem]">2023.08.11 17:00 (UTC)</p>
      </section>
      {/* listing on */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Listing on
        </p>
        <p className="tracking-[-0.00875rem] text-[#C38CC3]">PancakeSwap</p>
      </section>
      {/* Liquidity (%) */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Liquidity (%)
        </p>
        <p className="tracking-[-0.00875rem]">1 BNB = 10000 AST</p>
      </section>
      {/* Liquidity lock up time */}
      <section className="pb-2 mb-2 border-b border-[#3F3F46] flex justify-between items-center">
        <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
          Liquidity lock up time
        </p>
        <p className="tracking-[-0.00875rem] ">365 days after pool ends</p>
      </section>
    </div>
  );
}
