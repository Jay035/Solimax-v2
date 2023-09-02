import React from "react";

type Props = {};

export function LockRecords({}: Props) {
  return (
    <div className="bg-[#1D1C20] mt-[1.56rem] pt-[1.84rem] border border-[#3F3F46] rounded-[0.65rem] pb-[0.62rem] px-[1.88rem] text-sm">
      <h1 className="text-xl lg:text-2xl text-white mb-[1.12rem]">
        Lock Information
      </h1>
      <div className=" overflow-auto ">
        <div className="whitespace-nowrap grid grid-cols-7 w-full gap-[2.38rem] pt-[1.44rem] text-[#D1D1D6] border-t border-[#3F3F46] tracking-[-0.01rem] pb-[1.63rem]">
          <h1>Wallet</h1>
          <h1>Amount</h1>
          <h1>Cycle(d)</h1>
          <h1>Cycle Release(%)</h1>
          <h1>TGE(%)</h1>
          <h1>Unlock time(UTC)</h1>
          <h1>&nbsp;&nbsp;</h1>
        </div>
        <ul role="lock-records">
          <li className="whitespace-nowrap grid grid-cols-7 w-full gap-[2.38rem]">
            <span>0x6a9d...0b78</span>
            <span>100,000,000</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>2023.08.26 04:58</span>
            <span>View</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
