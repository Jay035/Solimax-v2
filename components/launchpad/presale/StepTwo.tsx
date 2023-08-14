import CustomInput from "@/components/CustomInput";
import ButtonGroup from "../ButtonGroup";
import CustomSelect from "../CustomSelect";

export default function StepTwo({
  softcap,
  presaleRate,
  minBuy,
  maxBuy,
  hardcap,
  error,
  refundType,
  router,
  liquidity,
  listingRate,
  tabs,
  selectedTab,
  startDate,
  endDate,
  liquidityLockup,
  handleNextStep,
  handlePreviousStep,
  setStartDate,
  setEndDate,
  setLiquidityLockup,
  setSelectedTab,
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
  const refundTypeOptions = [
    {
      value: "refund",
      label: "Refund",
    },
    {
      value: "burn",
      label: "Burn",
    },
  ];

  const routerOptions = [
    {
      value: "Pancakeswap",
      label: "Pancakeswap",
    },
    {
      value: "ApeSwap",
      label: "ApeSwap",
    },
    {
      value: "MDex",
      label: "MDex",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      {/* IST CARD  */}
      <section className="bg-[#1D1C20] pb-[1.19rem] rounded-[0.625rem] px-6 border border-[#26272B] pt-8 text-white">
        <ButtonGroup
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="">
          <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
            <span className="text-[#F04438]">(*) </span>is required field
          </p>
          <p className="text-[#F04438] mt-4 text-sm sm:text-base">
            {error && error}
          </p>
        </div>
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
              <CustomSelect
                options={refundTypeOptions}
                header={refundType}
                setHeader={setRefundType}
              />
            </div>
            {/* ROUTER */}
            <CustomSelect
              options={routerOptions}
              header={router}
              setHeader={setRouter}
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
            <div className="">
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
              <span className="mt-[0.62rem] text-xs tracking-[-0.0075rem] text-[#D1D1D6] ">
                1BNB = 300SLM
              </span>
            </div>
          </section>
        </form>
      </section>
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
      {/* 2ND CARD */}
      <section className="bg-[#1D1C20] pb-6 rounded-[0.625rem] px-6 border border-[#26272B] pt-8 text-white">
        <form className="flex flex-col gap-6">
          <section className="grid md:grid-cols-2 gap-6">
            {/* Start date (UTC) */}
            <CustomInput
              id="start-date"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Start date (UTC)"
              type="date"
              placeholder="0"
              value={startDate}
              onChange={(e) => {
                setStartDate?.(e.target.value);
                setError("");
              }}
              isRequired={true}
            />
            {/* HARD CAP */}
            <CustomInput
              id="end-date"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="End date (UTC)"
              type="date"
              placeholder="0"
              value={endDate}
              onChange={(e) => {
                setEndDate?.(e.target.value);
                setError("");
              }}
              isRequired={true}
            />
          </section>
          {/* Start date (UTC) */}
          <CustomInput
            id="liquidity-Lockup"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Liquidity lockup (days)"
            type="number"
            placeholder="0"
            value={liquidityLockup}
            onChange={(e) => {
              setLiquidityLockup?.(e.target.value);
              setError("");
            }}
            isRequired={true}
          />

          <label
            htmlFor="disable"
            className="text-white text-[0.875rem] flex items-center gap-[0.62rem]"
          >
            <input
              className="w-6 h-6 accent-[#A4D0F2]"
              type="checkbox"
              name="whitelist"
              id="disable"
            />
            Using vesting contributor?
          </label>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-[1.163rem]">
            <p className="text-[#E4E4E7] text-base tracking-[-0.01rem]">
              Need <span className="text-[#F3CE92]">0 SLM</span> to create
              launchpad.
            </p>
            {/* back and next buttons */}
            <div className="flex gap-2 md:items-center">
              <button
                onClick={(e: any) => {
                  e.preventDefault();
                  handlePreviousStep?.(e);
                }}
                className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
              >
                Back
              </button>
              <button
                onClick={(e: any) => {
                  e.preventDefault();
                  // if (tokenAddress === "") {
                  //   setError("Token address must be entered");
                  // } else {
                  //   handleNextStep();
                  // }
                }}
                className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </section>
      <p className="text-[0.875rem] text-[#D1D1D6]">
        Disclaimer: Solimax Presale will never endorse or encourage that you
        invest in any of the projects listed and therefore, accept no liability
        for any loss occasioned. It is the user(s) responsibility to do their
        own research and seek financial advice from a professional. More
        information about (DYOR) can be found via{" "}
        <span className="underline">Binance Academy</span>.
      </p>
    </div>
  );
}
