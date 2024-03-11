import {
	Factory,
	Factory__factory,
} from "@/types/contracts";

import { AddressLike, BigNumberish, parseEther } from "ethers";
import { Signer } from "ethers";



export default class DeployerContract {
    contract: Factory
	constructor(address: string, signer: Signer) {
		this.contract = Factory__factory.connect(
            address,
            signer
        )
	}
	
    async createToken(
		name: string,
		ticker: string,
		supply: BigNumberish,
	) {
		//console.log("here jer");

		const tx = await this.contract.deployToken(
			name,
			ticker,
            supply,
	
		);
		console.log(tx)
		return tx;
	}
}