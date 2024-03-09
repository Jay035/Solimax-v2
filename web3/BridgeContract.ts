import ethers, {
	Provider,
	Signer,
	parseEther,
	MaxUint256,
	Contract,
} from "ethers";
import BridgeAbi from "./abis/Bridge.json";
import { Bridge } from "@/types/contracts";
import { BridgeConfigurations } from "./config";
import { BridgeInterface } from "@/types/contracts/Bridge";

export type BridgeContractProps = {
	nlu: string;
	bridge: string;
	signer: Signer;
	provider: Provider;
};
export class BridgeContract {
	props: BridgeContractProps;
	contract: Contract;
	contractWithProvider: any;
	constructor(props: BridgeContractProps) {
		this.props = props;
		this.contract = new Contract(
			this.props.bridge,
			BridgeAbi,
			props.signer
		);
		this.contractWithProvider = new Contract(
			this.props.bridge,
			BridgeAbi,
			props.provider
		);
	}

	async LockToken(amount: string, toChain: string) {
		const parseAmount = parseEther(amount);
		const tx = await this.contract.lockTokens(parseAmount, toChain);
		return tx;
	}

	async approve() {
		const abi = [
			"function approve(address spender, uint256 amount) returns (bool)",
		];
		const contract = new Contract(this.props.nlu, abi, this.props.signer);
		const tx = await contract.approve(this.props.bridge, MaxUint256);
		const receipt = await tx.wait();
		console.log("receipt", receipt);
	}
}

export default BridgeContract;
