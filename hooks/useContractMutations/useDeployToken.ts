'use client'
import { useMutation } from "@tanstack/react-query"
import { Web3GlobalContext } from "@/app/Web3GlobalProvider"
//import { Factory } from "@/types/contracts"
import DeployerContract from '@/web3/DeployerContract'
//import { ContractFactory, Signer, ethers } from "ethers";
import { publicProvider } from "wagmi/providers/public";
import { useEthersSigner } from "@/web3/adapters";

export default function useDeployTokenMutation() {
    const signer:any = useEthersSigner();
    //const  signer:any = useEthersSigner()
    const { tokenDeployerAddress} = Web3GlobalContext()
    console.log(signer)
    const Deployer = new DeployerContract(
        tokenDeployerAddress,
        signer
    )
    return useMutation({
        mutationFn: async (deployProp: any) => {
            const { name, ticker, supply } =
            deployProp;
            //console.log(deployProp)
            return await Deployer.contract.deployToken(
            name,
            ticker,
            supply,
        )

        }
    })
}