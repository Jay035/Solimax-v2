'use client'
import { Web3GlobalContext } from "@/app/Web3GlobalProvider";
import { Factory__factory } from "@/types/contracts";
import Factory from "@/web3/DeployerContract";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export default function useCreatDeployMutation() {
	const { signer, lockerFactoryAddress, tokenDeployerAddress } = Web3GlobalContext();
	console.log(signer)
	const factory = new Factory(
		tokenDeployerAddress,
		signer
	);
	return useMutation({
		mutationFn: async (createLockerProps: any) => {
			const {  name, ticker ,supply } =
				createLockerProps;
			console.log(createLockerProps);
			return await factory.createToken
			(
				name,
				ticker,
				supply,
			);
		},
	});
}
