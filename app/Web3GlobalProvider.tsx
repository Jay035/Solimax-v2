"use client";
import React, { useState } from "react";
import { Web3Context } from "@/context/Web3Context";
import { useAccount } from "wagmi";
import ChainAddress from "@/configs/addresses";
export default function Web3GlobalProvider({ children }: any) {
	const { isConnected, isConnecting, address } = useAccount();
	const [currentChainConfig, setCurrentChainConfig] = useState();
	return (
		<Web3Context.Provider
			value={{
				isConnected,
				isConnecting,
				address,
				currentChainConfig,
				setCurrentChainConfig,
			}}
		>
			{children}
		</Web3Context.Provider>
	);
}
