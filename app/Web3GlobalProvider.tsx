"use client";
import React, { useContext, useEffect, useState } from "react";
import { Web3Context } from "@/context/Web3Context";
import { useAccount } from "wagmi";
import { useEthersSigner } from "@/web3/adapters";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChainAddress from "@/configs/addresses";
import { chainAddressConfigType } from "@/types/solimax.types";
import LockerContract from "@/web3/LockerContract";

const queryClient = new QueryClient();
export function Web3GlobalProvider({ children }: any) {
	const signer = useEthersSigner();
	const optGoerli: chainAddressConfigType = ChainAddress.get(420)!;
	const [queryEnabled, setQueryEnabled] = useState(false);
	const { tokenDeployerAddress, lockerFactoryAddress } = optGoerli;

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
					queryEnabled,
					setQueryEnabled,
				}}
			>
				{children}
			</Web3Context.Provider>
		</QueryClientProvider>
	);
}

export const Web3GlobalContext = () => useContext(Web3Context);
