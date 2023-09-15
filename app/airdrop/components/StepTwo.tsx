import CustomInput from "@/components/CustomInput";
import { useState } from "react";

type Props = {
  currentStep: number;
  setError: (error: string) => void;
  setCurrentStep: (step: number) => void;
};

export default function StepTwo({currentStep, setError, setCurrentStep}: Props) {
  const [title, setTitle] = useState<string>("");
  const [TGEDate, setTGEDate] = useState<string>("");
  const [TGEPercent, setTGEPercent] = useState<number>();
  const [tokenAddress, setTokenAddress] = useState<string>("");
  const [cycleDays, setCycleDays] = useState<string>("");
  const [cycleReleasePercent, setCycleReleasePercent] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [lockDuration, setLockDuration] = useState<string>("");
  const [owner, setOwner] = useState<string>("");
  const [anotherUserUsed, setAnotherUserUsed] = useState<boolean>(false);
  const [vestingUsed, setVestingUsed] = useState<boolean>(false);

  return (
    <form className="flex flex-col gap-6">
      {/* Token or LP Token address */}
      <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
        <CustomInput
          id="token-address"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Token or LP Token address"
          type="text"
          placeholder="Enter token or LP address"
          value={tokenAddress}
          onChange={(e) => {
            setTokenAddress?.(e.target.value);
            setError?.("");
          }}
          isRequired={true}
        />
        <label
          htmlFor="another-user-used"
          className="text-[0.875rem] tracking-[-0.00875rem] mt-3 cursor-pointer flex items-center gap-2"
        >
          <div
            className={`relative flex ${
              !anotherUserUsed &&
              "bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5"
            } rounded-lg cursor-pointer`}
          >
            <input
              type="checkbox"
              name="another-user-used"
              id="another-user-used"
              className="h-6 w-6 appearance-none bg-[#26272B] checked:bg-white rounded-md"
              checked={anotherUserUsed}
              onChange={(event: any) => {
                setAnotherUserUsed(event.target.checked);
              }}
            />
            <i
              className={`ri-check-line text-xl absolute left-0.5 top-0 ${
                anotherUserUsed ? "text-black" : "hidden"
              }`}
            ></i>
          </div>
          <span className="text-[#F4F4F5]">Use another owner?</span>
        </label>
        {anotherUserUsed && (
          <div className="">
            <CustomInput
              id="max-contribution"
              className="mt-4 flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] cursor-pointer border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Owner"
              type="text"
              placeholder="Enter owner address"
              value={owner}
              onChange={(e) => {
                setOwner?.(e.target.value);
                setError?.("");
              }}
              isRequired={false}
            />
            <p className="mt-[0.62rem] text-xs tracking-[-0.0075rem]">
              The address you input here will receive the tokens once they are
              unlocked
            </p>
          </div>
        )}
      </div>
      {/* TITLE */}
      <CustomInput
        id="title"
        className="flex flex-col gap-[0.62rem] "
        inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
        label="Title"
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => {
          setTitle?.(e.target.value);
          setError?.("");
        }}
        isRequired={false}
      />
      {/* AMOUNT */}
      <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
        <CustomInput
          id="amount"
          className="flex flex-col gap-[0.62rem] "
          inputClassName="bg-[#26272B] outline-none tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Amount"
          type="number"
          placeholder=""
          value={amount}
          onChange={(e) => {
            setAmount?.(e.target.value);
            setError?.("");
          }}
          isRequired={true}
        />
        <label
          htmlFor="vesting-used"
          className="text-[0.875rem] tracking-[-0.00875rem] mt-3 cursor-pointer flex items-center gap-2"
        >
          <div
            className={`relative flex ${
              !vestingUsed &&
              "bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5"
            } rounded-lg cursor-pointer`}
          >
            <input
              type="checkbox"
              name="vesting-used"
              id="vesting-used"
              className="h-6 w-6 appearance-none bg-[#26272B] checked:bg-white rounded-md"
              checked={vestingUsed}
              onChange={(event: any) => {
                setVestingUsed(event.target.checked);
              }}
            />
            <i
              className={`ri-check-line text-xl absolute left-0.5 top-0 ${
                vestingUsed ? "text-black" : "hidden"
              }`}
            ></i>
          </div>
          <span className="text-[#F4F4F5]">Use vesting?</span>
        </label>
        {vestingUsed && (
          <div className="mt-[0.94rem] flex flex-col gap-6">
            <section className="grid md:grid-cols-2 gap-6">
              {/* TGE Date (UTC time)) */}
              <CustomInput
                id="TGE-date"
                className="flex flex-col gap-[0.62rem]"
                inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="TGE Date (UTC time)"
                type="date"
                placeholder="0"
                value={TGEDate}
                onChange={(e) => {
                  setTGEDate?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
              {/* TGE Percent */}
              <CustomInput
                id="TGE percent"
                className="flex flex-col gap-[0.62rem]"
                inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="TGE Percent"
                type="number"
                placeholder="0"
                value={TGEPercent}
                onChange={(e) => {
                  setTGEPercent?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
            </section>
            <section className="grid md:grid-cols-2 gap-6">
              {/* Cycle (days) */}
              <CustomInput
                id="Cycle (days)"
                className="flex flex-col gap-[0.62rem]"
                inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Cycle (days)"
                type="text"
                placeholder="Ex 10"
                value={cycleDays}
                onChange={(e) => {
                  setCycleDays?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
              {/* Cycle Release Percent */}
              <CustomInput
                id="cycle-Release-Percent"
                className="flex flex-col gap-[0.62rem]"
                inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                label="Cycle Release Percent"
                type="text"
                placeholder="Ex 10"
                value={cycleReleasePercent}
                onChange={(e) => {
                  setCycleReleasePercent?.(e.target.value);
                  setError?.("");
                }}
                isRequired={true}
              />
            </section>
          </div>
        )}
      </div>
      {/* Lock until (UTC time) */}
      {/* <CustomInput
        id="lock-duration"
        className="flex flex-col gap-[0.62rem]"
        inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
        label="Lock until (UTC time)"
        type="date"
        placeholder="Select date"
        value={lockDuration}
        onChange={(e) => {
          setLockDuration?.(e.target.value);
          setError?.("");
        }}
        isRequired={true}
      /> */}
      <div className="mt-2 bg-gradient-to-r from-[#77CDEB] via-[#953DDD] to-[#A56EF4] p-0.5 rounded-[0.62rem]">
        <p className="text-sm text-[#F4F4F5] rounded-[0.625rem] py-[0.88rem] px-[1.19rem] bg-[#1C1C20]">
          Please exclude{" "}
          <span className="text-[#A4D0F2]">
            Solimax Launchpad address 0x56b153049AE32C6537afEa4B1F075889485c5609
          </span>{" "}
          from fees, rewards, max tx amount to start locking tokens. We do not
          support <span className="text-[#A4D0F2]">rebase tokens</span>
        </p>
      </div>
      <button
        type="submit"
        onClick={(e: any) => {
          e.preventDefault();
          setCurrentStep?.(currentStep + 1);
        }}
        className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
      >
        Lock
      </button>
    </form>
  );
}
