'use client'
import { Web3GlobalContext } from "@/app/Web3GlobalProvider";
import LockerContract from "@/web3/LockerContract";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export default function useCreatLockerMutation() {
	const { signer, lockerFactoryAddress } = Web3GlobalContext();
	console.log(signer)
	const tokenLockerContract = new LockerContract(
		lockerFactoryAddress,
		signer
	);
	return useMutation({
		mutationFn: async (createLockerProps: createLockProps) => {
			const { tokenAddress, name, withdrawer, amount, withdrawTime } =
				createLockerProps;
			console.log(createLockerProps);
			return await tokenLockerContract.createLocker
			(
				tokenAddress,
				name,
				amount,
				withdrawer,
				withdrawTime
			);
		},
	});
}
