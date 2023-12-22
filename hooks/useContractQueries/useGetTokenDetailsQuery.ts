import { Web3GlobalContext } from "@/app/Web3GlobalProvider";
import { GlobalContext } from "@/context/Context";
import Erc20Contract from "@/web3/Erc20Contract";
import { useQuery } from "@tanstack/react-query";
import { ErrorDescription, isAddress } from "ethers";
import Error from "next/error";
import React, { useEffect, useState } from "react";

export default function useGetTokenDetailsQuery() {
	const [data, setData]: any = useState({
		decimals: null,
		totalSupply: null,
		symbol: null,
	});
	const { solilockTokenAddress } = GlobalContext();
	const { signer, queryEnabled, setQueryEnabled } = Web3GlobalContext();
	useEffect(() => {
		if (isAddress(solilockTokenAddress)) {
			const erc20TokenContract: Erc20Contract = new Erc20Contract(
				solilockTokenAddress!,
				signer
			);

			erc20TokenContract.getFullTokenDetails().then((res) => {
				console.log({ res });
				setData({
					decimals: res.decimals,
					totalSupply: res.totalSupply,
					symbol: res.symbol,
				});
			});
		}
	}, [signer, solilockTokenAddress]);

	return { data };
}
