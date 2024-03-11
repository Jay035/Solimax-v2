'use client'
import { Web3GlobalContext } from "@/app/Web3GlobalProvider";
import { createLockProps } from "@/types";
import LockerContract from "@/web3/LockerContract";
import { useMutation } from "@tanstack/react-query";

export default function useCreatLockerMutation() {
	const { signer, lockerFactoryAddress } = Web3GlobalContext();
	
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
