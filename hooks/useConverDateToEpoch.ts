import React, { useEffect, useState } from "react";
import { GlobalContext } from "@/context/Context";
export default function useConverDateToEpoch(date: any): string {
	const { solilockAmount, solilockLockTime, solilockTokenAddress } =
		GlobalContext();
	const [epochDate, setEpochDate]: any = useState();
	useEffect(() => {
		if (date) {
			const epochTime = new Date(date.toString()).getTime() / 1000; // Convert to second
			setEpochDate(epochTime);
			console.log({ epochTime });
		}
	}, [date, solilockAmount, solilockLockTime, solilockTokenAddress]);

	return epochDate;
}
