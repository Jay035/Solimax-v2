import CustomInput from "@/components/CustomInput";

export default function StepTwo({
  softcap,
  presaleRate,
  minBuy,
  maxBuy,
  hardcap,
  refundType,
  router,
  liquidity,
  listingRate,
  setListingRate,
  setLiquidity,
  setRouter,
  setRefundType,
  setHardcap,
  setMinBuy,
  setMaxBuy,
  setSoftcap,
  setPresaleRate,
  setError,
}: FormProps) {
  return (
    <div className="">
      <form className="flex flex-col gap-6">
        <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
          <CustomInput
            id="presale-rate"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Presale rate"
            type="number"
            placeholder="0"
            value={presaleRate}
            onChange={(e) => setPresaleRate?.(e.target.value)}
            isRequired={true}
          />
          {/* create pool fee */}
          <span className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
            If I spend 1 BNB how many tokens will I receive?
          </span>
        </div>

        <div className="flex flex-col gap-4" role="fee-options">
          <h3 className="text-base text-[#E4E4E7] tracking-[-0.01rem]">
            Whitelist
          </h3>
          <label
            htmlFor="disable"
            className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
          >
            <input
              className="w-6 h-6 accent-[#A4D0F2]"
              type="radio"
              defaultChecked
              name="whitelist"
              id="disable"
            />
            Disable
          </label>
          <label
            htmlFor="enable"
            className="text-[#F4F4F5] text-[0.875rem] tracking-[-0.00875rem] flex items-center gap-[0.62rem]"
          >
            <input
              className="w-6 h-6 accent-[#A4D0F2]"
              type="radio"
              name="whitelist"
              id="enable"
            />
            Enable
          </label>
          <span className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
            You can enable/disable whitelist anytime.
          </span>
        </div>
        <section className="grid md:grid-cols-2 gap-6">
          <div className="">
            {/* SOFT CAP */}
            <CustomInput
              id="soft-cap"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Softcap (BNB)"
              type="number"
              placeholder="0"
              value={softcap}
              onChange={(e) => {
                setSoftcap?.(e.target.value);
                setError("");
              }}
              isRequired={true}
            />
            <span className="mt-[0.62rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6] ">
              Softcap must be {">"}= 25% of Hardcap!
            </span>
          </div>
          {/* HARD CAP */}
          <CustomInput
            id="hard-cap"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Hardcap (BNB)"
            type="number"
            placeholder="0"
            value={hardcap}
            onChange={(e) => {
              setHardcap?.(e.target.value);
              setError("");
            }}
            isRequired={true}
          />
        </section>
        <section className="grid md:grid-cols-2 gap-6">
          {/* MINIMIUM BUY */}
          <div className="">
            <CustomInput
              id="min-buy"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Minimium buy"
              type="number"
              placeholder="0"
              value={minBuy}
              onChange={(e) => {
                setMinBuy?.(e.target.value);
                setError("");
              }}
              isRequired={true}
            />
          </div>
          {/* MAXIMUM BUY */}
          <CustomInput
            id="max-buy"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Maximum buy"
            type="number"
            placeholder="0"
            value={maxBuy}
            onChange={(e) => {
              setMaxBuy?.(e.target.value);
              setError("");
            }}
            isRequired={true}
          />
        </section>
        <section className="grid md:grid-cols-2 gap-6">
          {/* REFUND TYPE */}
          <div className="">
            <CustomInput
              id="refund-type"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Refund type"
              type="text"
              placeholder="0"
              value={refundType}
              onChange={(e) => {
                setRefundType?.(e.target.value);
                setError("");
              }}
              isRequired={true}
            />
          </div>
          {/* ROUTER */}
          <CustomInput
            id="router"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Router"
            type="text"
            placeholder="0"
            value={router}
            onChange={(e) => {
              setRouter?.(e.target.value);
              setError("");
            }}
            isRequired={true}
          />
        </section>
        <section className="grid md:grid-cols-2 gap-6">
          {/* LIQUIDITY */}
          <div className="">
            <CustomInput
              id="liquidity"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Liquidity (%)"
              type="number"
              placeholder="0"
              value={liquidity}
              onChange={(e) => {
                setLiquidity?.(e.target.value);
                setError("");
              }}
              isRequired={true}
            />
          </div>
          {/* LISTING RATE */}
          <CustomInput
            id="listingRate"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Listing rate"
            type="number"
            placeholder="0"
            value={listingRate}
            onChange={(e) => {
              setListingRate?.(e.target.value);
              setError("");
            }}
            isRequired={true}
          />
        </section>
      </form>
      <ul className="list-disc text-[#A4D0F2] text-xs tracking-[-0.0075rem] ml-3 mt-6">
        <li>
          Enter the percentage of raised funds that should be allocated to
          Liquidity on (Min 51%, Max 100%)
        </li>
        <li>
          If I spend 1 ETH on how many tokens will I receive? Usually this
          amount is lower than presale rate to allow for a higher listing price
          on
        </li>
      </ul>
      <form></form>
    </div>
  );
}
