import { JsonRpcSigner } from "ethers";
import { AddressLike, Signer } from "ethers";
import { Context, createContext } from "react";

export const Web3Context: Context<any> = createContext(null);
