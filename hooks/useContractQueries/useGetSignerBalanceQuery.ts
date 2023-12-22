import { Web3GlobalContext } from "@/app/Web3GlobalProvider";
import { GlobalContext } from "@/context/Context";
import Erc20Contract from "@/web3/Erc20Contract";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { isAddress } from "ethers";

export default function useGetSignerBalanceQuery() {
	const [balance, setBalance]: any = useState({ balance: null });
	const { solilockTokenAddress } = GlobalContext();
	const { signer } = Web3GlobalContext();

	useEffect(() => {
		if (isAddress(solilockTokenAddress)) {
			const erc20TokenContract: Erc20Contract = new Erc20Contract(
				solilockTokenAddress!,
				signer
			);
			erc20TokenContract.getUserBalanceOf().then((res) => {
				setBalance(res);
			});
		}
	}, [balance, solilockTokenAddress, signer]);

	return balance;
}
