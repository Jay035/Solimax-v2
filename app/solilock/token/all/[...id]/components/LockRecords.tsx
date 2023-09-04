import React from "react";

type Props = {};

export function LockRecords({}: Props) {
  return (
    <div className="bg-[#1D1C20] mt-[1.56rem] pt-[1.84rem] border border-[#3F3F46] rounded-[0.65rem] pb-[0.62rem] px-[1.88rem] text-sm">
      <h1 className="text-xl lg:text-2xl text-white pb-[1.12rem] border-b border-[#3F3F46]">
        Lock Records
      </h1>
      <div className="w-fit md:w-full grid grid-cols-1 overflow-x-auto rounded-[0.625rem]">
        <table
          className="w-full border-collapse table pr-[2.31rem]"
          cellPadding={16}
        >
          <thead className="">
            <tr className="whitespace-nowrap text-left">
              <td
                className="text-[#D1D1D6] pl-0 tracking-[-0.0075rem]"
                id="wallet-address"
              >
                Wallet
              </td>
              <td className="text-[#D1D1D6] tracking-[-0.0075rem]" id="amount">
                Amount
              </td>
              <td className="text-[#D1D1D6] tracking-[-0.0075rem]" id="cycle">
                Cycle(d)
              </td>
              <td
                className="text-[#D1D1D6] tracking-[-0.0075rem]"
                id="cycle-release"
              >
                Cycle Release(%)
              </td>
              <td className="text-[#D1D1D6] tracking-[-0.0075rem]" id="TGE">
                TGE(%)
              </td>
              <td
                className="text-[#D1D1D6] tracking-[-0.0075rem]"
                id="Unlock-time"
              >
                Unlock time(UTC)
              </td>
              <td
                className="text-[#D1D1D6] tracking-[-0.0075rem]"
                id="date-of-completion"
              >
                &nbsp;
              </td>
            </tr>
          </thead>
          <tbody className="mt-[1.19rem] last:border-b-0">
            <tr className="border-b border-[#26272B]">
              <td
                headers="wallet one"
                className="pl-0 underline text-[#A4D0F2]"
              >
                0x6a9d...0b78
              </td>
              <td headers="amount one">100,000,000</td>
              <td headers="cycle one">-</td>
              <td headers="cycle-release one">-</td>
              <td headers="tge one">-</td>
              <td headers="unlock-time one">2023.08.26 04:58</td>
              <td className="text-[#A4D0F2]">View</td>
            </tr>
            <tr className="border-b border-[#26272B]">
              <td
                headers="wallet one"
                className="pl-0 underline text-[#A4D0F2]"
              >
                0x6a9d...0b78
              </td>
              <td headers="amount one">100,000,000</td>
              <td headers="cycle one">-</td>
              <td headers="cycle-release one">-</td>
              <td headers="tge one">-</td>
              <td headers="unlock-time one">2023.08.26 04:58</td>
              <td className="text-[#A4D0F2]">View</td>
            </tr>
            <tr className="border-b border-[#26272B]">
              <td
                headers="wallet one"
                className="pl-0 underline text-[#A4D0F2]"
              >
                0x6a9d...0b78
              </td>
              <td headers="amount one">100,000,000</td>
              <td headers="cycle one">-</td>
              <td headers="cycle-release one">-</td>
              <td headers="tge one">-</td>
              <td headers="unlock-time one">2023.08.26 04:58</td>
              <td className="text-[#A4D0F2]">View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
