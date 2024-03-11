import { chainAddressConfigType } from "@/types/solimax.types";
let ChainAddress: Map<number, chainAddressConfigType> = new Map();
ChainAddress.set(420, {
	idoFactoryAddress: "",
	tokenDeployerAddress: "0x7e996c1902A20Bd872Fb1be71bdE6395cd4E510F",
	lockerFactoryAddress: "0x202E0b96Ee4359c5793e0f3D218E3BB784133814",
	usdtAddress: "0xe3bacaA390bB3E80A497592E420c5C5dDCb94a3a",
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
