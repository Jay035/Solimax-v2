import {
	TokenLockerFactory,
	TokenLockerFactory__factory,
} from "@/types/contracts";
import { AddressLike, parseEther } from "ethers";
import { Signer } from "ethers";

export default class LockerContract {
	contract: TokenLockerFactory;
	constructor(address: string, signer: Signer) {
		this.contract = TokenLockerFactory__factory.connect(address, signer);
	}
	async createLocker(
		tokenAddress: string,
		name: string,
		amount: string,
		withdrawer: string,
		withdrawTime: string
	) {
		//console.log("here jer");

		const tx = await this.contract.createLocker(
			tokenAddress,
			name,
			amount,
			withdrawer,
			withdrawTime,
			{ value: parseEther("1") }
		);
		return tx;
	}
}
