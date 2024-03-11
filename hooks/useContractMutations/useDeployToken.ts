'use client'
import { useMutation } from "@tanstack/react-query"
import { Web3GlobalContext } from "@/app/Web3GlobalProvider"
//import { Factory } from "@/types/contracts"
import DeployerContract from '@/web3/DeployerContract'
import { ContractFactory, Signer, ethers } from "ethers";
import { publicProvider } from "wagmi/providers/public";
import { useEthersSigner } from "@/web3/adapters";

export default function useDeployTokenMutation() {
    const  signer:any = useEthersSigner()
    const { tokenDeployerAddress} = Web3GlobalContext()

    const Deployer = new DeployerContract(
        '0x7e996c1902A20Bd872Fb1be71bdE6395cd4E510F',
        signer
    )
    return useMutation({
        mutationFn: async (deployProp: any) => {
            const { name, ticker, supply } =
            deployProp;
            console.log(deployProp)
        return await Deployer.createToken(
            name,
            ticker,
            supply,
        )

        }
    })
}