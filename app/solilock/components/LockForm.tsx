import CustomInput from "@/components/CustomInput";
import { GlobalContext } from "@/context/Context";
import VerifyAddress from "@/hooks/VerifyAddress";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LockForm() {
	const {
		solilockAmount,
		solilockLockTime,
		solilockTokenAddress,
		solilockOwner,
		solilockTGEDate,
		solilockTGEPercent,
		solilockCycleDays,
		solilockCycleReleasePercent,
		solilockAnotherUserUsed,
		solilockVestingUsed,
		setSolilockVestingUsed,
		setSolilockAnotherUserUsed,
		setSolilockCycleReleasePercent,
		setSolilockCycleDays,
		setSolilockTGEPercent,
		setSolilockTGEDate,
		setSolilockOwner,
		setSolilockAmount,
		setSolilockLockTime,
		setSolilockTokenAddress,
	} = GlobalContext();
	const [error, setError] = useState<string>("");

	const status = VerifyAddress(solilockTokenAddress!);

	return (
		<form className="flex flex-col gap-6">
			{/* Token or LP Token address */}
			<div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
				<CustomInput
					id="token-address"
					className="flex flex-col gap-[0.62rem]"
					inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
					label="Token or LP Token address"
					type="text"
					placeholder="Enter token or LP address"
					value={solilockTokenAddress}
					onChange={(e) => {
						setSolilockTokenAddress?.(e.target.value);
						setError?.("");
					}}
					onMouseLeave={() => VerifyAddress(solilockTokenAddress!)}
					isRequired={true}
				/>
				<label
					htmlFor="another-user-used"
					className="text-[0.875rem] tracking-[-0.00875rem] mt-3 cursor-pointer flex items-center gap-2"
				>
					{/* <div
						className={`relative flex ${
							!solilockAnotherUserUsed &&
							"bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5"
						} rounded-lg cursor-pointer`}
					>
						<input
							type="checkbox"
							name="another-user-used"
							id="another-user-used"
							className="h-6 w-6 appearance-none bg-[#26272B] checked:bg-white rounded-md"
							checked={solilockAnotherUserUsed}
							onChange={(event: any) => {
								setSolilockAnotherUserUsed?.(
									event.target.checked
								);
							}}
						/>
						<i
							className={`ri-check-line text-xl absolute left-0.5 top-0 ${
								solilockAnotherUserUsed
									? "text-black"
									: "hidden"
							}`}
						></i>
					</div>
					<span className="text-[#F4F4F5]">Use another owner?</span> */}
				</label>
				{solilockAnotherUserUsed && (
					<div className="">
						<CustomInput
							id="owner"
							className="mt-4 flex flex-col gap-[0.62rem]"
							inputClassName="bg-[#26272B] cursor-pointer rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
							label="Owner"
							type="text"
							placeholder="Enter owner address"
							value={solilockOwner}
							onChange={(e) => {
								setSolilockOwner?.(e.target.value);
								setError?.("");
							}}
							isRequired={false}
						/>
						<p className="mt-[0.62rem] text-xs tracking-[-0.0075rem]">
							The address you input here will receive the tokens
							once they are unlocked
						</p>
					</div>
				)}
			</div>
			{/* AMOUNT */}
			<div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
				<CustomInput
					id="amount"
					className="flex flex-col gap-[0.62rem] "
					inputClassName="bg-[#26272B] outline-none tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
					label="Amount"
					type="number"
					placeholder=""
					value={solilockAmount}
					onChange={(e) => {
						setSolilockAmount?.(e.target.value);
						setError?.("");
					}}
					isRequired={true}
				/>
				<label
					htmlFor="vesting-used"
					className="text-[0.875rem] tracking-[-0.00875rem] mt-3 cursor-pointer flex items-center gap-2"
				>
					{/* <div
            className={`relative flex ${
              !solilockVestingUsed &&
              "bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5"
            } rounded-lg cursor-pointer`}
          >
            <input
              type="checkbox"
              name="vesting-used"
              id="vesting-used"
              className="h-6 w-6 appearance-none bg-[#26272B] checked:bg-white rounded-md"
              checked={solilockVestingUsed}
              onChange={(event: any) => {
                setSolilockVestingUsed?.(event.target.checked);
              }}
            />
            <i
              className={`ri-check-line text-xl absolute left-0.5 top-0 ${
                solilockVestingUsed ? "text-black" : "hidden"
              }`}
            ></i>
          </div>
          <span className="text-[#F4F4F5]">Use vesting?</span> */}
				</label>
				{solilockVestingUsed && (
					<div className="mt-[0.94rem] flex flex-col gap-6">
						<section className="grid md:grid-cols-2 gap-6">
							{/* TGE Date (UTC time)) */}
							<CustomInput
								id="TGE-date"
								className="flex flex-col gap-[0.62rem]"
								inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
								label="TGE Date (UTC time)"
								type="date"
								placeholder="0"
								value={solilockTGEDate}
								onChange={(e) => {
									setSolilockTGEDate?.(e.target.value);
									setError?.("");
								}}
								isRequired={true}
							/>
							{/* TGE Percent */}
							<CustomInput
								id="TGE percent"
								className="flex flex-col gap-[0.62rem]"
								inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
								label="TGE Percent"
								type="number"
								placeholder="0"
								value={solilockTGEPercent}
								onChange={(e) => {
									setSolilockTGEPercent?.(e.target.value);
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
								inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
								label="Cycle (days)"
								type="text"
								placeholder="Ex 10"
								value={solilockCycleDays}
								onChange={(e) => {
									setSolilockCycleDays?.(e.target.value);
									setError?.("");
								}}
								isRequired={true}
							/>
							{/* Cycle Release Percent */}
							<CustomInput
								id="cycle-Release-Percent"
								className="flex flex-col gap-[0.62rem]"
								inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
								label="Cycle Release Percent"
								type="text"
								placeholder="Ex 10"
								value={solilockCycleReleasePercent}
								onChange={(e) => {
									setSolilockCycleReleasePercent?.(
										e.target.value
									);
									setError?.("");
								}}
								isRequired={true}
							/>
						</section>
					</div>
				)}
			</div>
			{/* Lock until (UTC time) */}
			<CustomInput
				id="lock-duration"
				className="flex flex-col gap-[0.62rem]"
				inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
				label="Lock until (UTC time)"
				type="date"
				placeholder="Select date"
				value={solilockLockTime}
				onChange={(e) => {
					setSolilockLockTime?.(e.target.value);
					setError?.("");
				}}
				isRequired={true}
			/>
			<div className="mt-2 bg-gradient-to-r from-[#77CDEB] via-[#953DDD] to-[#A56EF4] p-0.5 rounded-[0.62rem]">
				<p className="text-sm text-[#F4F4F5] rounded-[0.625rem] py-[0.88rem] px-[1.19rem] bg-[#1C1C20]">
					Please exclude{" "}
					<span className="text-[#A4D0F2] break-words">
						Solimax Launchpad address
						0x56b153049AE32C6537afEa4B1F075889485c5609
					</span>{" "}
					from fees, rewards, max tx amount to start locking tokens.
					We do not support{" "}
					<span className="text-[#A4D0F2]">rebase tokens</span>
				</p>
			</div>
			<button
				disabled={
					solilockTokenAddress === "" ||
					solilockAmount === null ||
					solilockLockTime === ""
				}
				type="submit"
				onClick={(e: any) => {
					e.preventDefault();
					if (status === true && !solilockVestingUsed) {
						if (solilockVestingUsed) {
							if (
								solilockTGEDate === "" ||
								solilockTGEPercent === null ||
								solilockCycleDays === "" ||
								solilockCycleReleasePercent === ""
							) {
								toast.error("Fill in all required fields");
							} else {
								// handlePresaleNextStep?.(e);
							}
						}
					} else {
						toast.error("Token address is not valid!");
					}
				}}
				className="bg-[#C38CC3] disabled:bg-[#C38CC3]/50 hover:bg-[#C38CC3]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
			>
				Lock
			</button>
		</form>
	);
}
