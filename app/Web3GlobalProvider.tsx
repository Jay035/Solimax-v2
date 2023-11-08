"use client";
import React, { useContext, useEffect, useState } from "react";
import { Web3Context } from "@/context/Web3Context";
import { useAccount, useBlockNumber } from "wagmi";
import { useEthersSigner, useEthersProvider } from "@/web3/adapters";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChainAddress from "@/configs/addresses";
import { chainAddressConfigType } from "@/types/solimax.types";
import LockerContract from "@/web3/LockerContract";
import { ethers, Provider } from "ethers";

const queryClient = new QueryClient();
export function  Web3GlobalProvider({ children }: any) {

	const signer = useEthersSigner();
	const optGoerli: chainAddressConfigType = ChainAddress.get(420)!;
	const [queryEnabled, setQueryEnabled] = useState(false);
	const { tokenDeployerAddress, usdtAddress, lockerFactoryAddress } = optGoerli;

	const { isConnected, isConnecting, address } = useAccount();

	const [currentChainConfig, setCurrentChainConfig] = useState();
	useEffect(() => {
		if (isConnected) {
		}
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<Web3Context.Provider
				value={{
					isConnected,
					isConnecting,
					address,
					currentChainConfig,
					setCurrentChainConfig,
					signer,
					lockerFactoryAddress,
					usdtAddress,
					queryEnabled,
					setQueryEnabled,
					tokenDeployerAddress,
				}}
			>
				{children}
			</Web3Context.Provider>
		</QueryClientProvider>
	);
}

export const Web3GlobalContext = () => useContext(Web3Context);
