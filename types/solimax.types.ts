import { AddressLike } from "ethers";

export type chainAddressConfigType = {
	idoFactoryAddress: string | AddressLike;
	tokenDeployerAddress: string | AddressLike;
	lockerFactoryAddress: string | AddressLike;
	usdtAddress: string | AddressLike;
	weth: string | AddressLike;
};
