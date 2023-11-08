'use client'
import { useMutation } from "@tanstack/react-query";
import { Web3GlobalContext } from "@/app/Web3GlobalProvider";
import Erc20Contract from '@/web3/Erc20Contract'

export default  function useTokenApprovalMutation() {
    const { signer, usdtAddress} = Web3GlobalContext()

	const tokenContract = new Erc20Contract(
		usdtAddress,
		signer
	)

return useMutation({
	mutationFn: async (approveProps:any) => {
		const { SpenderAddress, amount } =
				approveProps;
			;
		return await tokenContract.getContactApprove(
			SpenderAddress,
			amount
		)
	}
})
}