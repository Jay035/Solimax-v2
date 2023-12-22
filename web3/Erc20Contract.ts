import { Erc20, Erc20__factory } from "@/types/contracts";
import { AddressLike, Signer, formatUnits, parseUnits } from "ethers";
import React, { Component } from "react";

export default class Erc20Contract  {
	contract: Erc20;
	signer: Signer;
	constructor(address: string, signer: Signer) {
		this.contract = Erc20__factory.connect(address, signer);
		this.signer = signer;
	}

	//get token decimal
	async getDecimals() {
		return await this.contract.decimals();
	}
	//get token symbol
	async getTokenSymbol() {
		return await this.contract.symbol();
	}
	//get token totalSupply
	async getTotalSupply() {
		return await this.contract.totalSupply();
	}

	

	// getToken details
	async getFullTokenDetails() {
		const decimals = (await this.getDecimals()).toString();
		const totalSupply = await this.getTotalSupply();
		const symbol = (await this.getTokenSymbol()).toString();
		return {
			decimals,
			totalSupply: formatUnits(totalSupply, parseInt(decimals)),
			symbol,
		};
	}
	async balanceOf(address: AddressLike | string) {
		const decimals = (await this.getDecimals()).toString();
		return {
			balance: formatUnits(
				await this.contract.balanceOf(address),
				parseInt(decimals)
			),
		};
	}
	async getUserBalanceOf() {
		return await this.balanceOf(await this.signer.getAddress());
	}

	async getContactApprove(
		SpenderAddress: string,
		amount: string,
	) {
		//console.log("here jer");
        return await this.contract.approve(
			SpenderAddress,
			amount
		)
		
	}
	
}
