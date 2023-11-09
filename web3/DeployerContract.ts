import {
	Factory,
	Factory__factory,
} from "@/types/contracts";

import { AddressLike, BigNumberish, parseEther } from "ethers";
import { Signer } from "ethers";

export default class DeployerContract {
    contract: Factory;
	constructor(address: string, signer: Signer) {
		this.contract = Factory__factory.connect(
            "0x7e996c1902A20Bd872Fb1be71bdE6395cd4E510F",
            signer
        )
	}
	
    async createToken(
		name: string,
		ticker: string,
		supply: number,
	) {
		//console.log("here jer");

		const tx = await this.contract.deployToken(
			name,
			ticker,
            supply,
	
		);
		
		return tx;
	}
}