import { Context, createContext } from "react";

export const Web3Context: Context<string | any | number | null> =
	createContext(null);
