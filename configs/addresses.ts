import { chainAddressConfigType } from "@/types/solimax.types";
let ChainAddress: Map<number, chainAddressConfigType> = new Map();
ChainAddress.set(420, {
	idoFactoryAddress: "",
	tokenDeployerAddress: "",
	lockerFactoryAddress: "0x202E0b96Ee4359c5793e0f3D218E3BB784133814",
	usdtAddress: "",
	weth: "",
});
ChainAddress.set(5, {
	idoFactoryAddress: "",
	tokenDeployerAddress: "",
	lockerFactoryAddress: "",
	usdtAddress: "",
	weth: "",
});
ChainAddress.set(97, {
	idoFactoryAddress: "",
	tokenDeployerAddress: "",
	lockerFactoryAddress: "",
	usdtAddress: "",
	weth: "",
});
export default ChainAddress;
