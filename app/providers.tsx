"use client";
import { useIsMounted } from "@/hooks/useIsMounted";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  RainbowKitSiweNextAuthProvider,
  GetSiweMessageOptions,
} from "@rainbow-me/rainbowkit-siwe-next-auth";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId = process?.env?.NEXT_PUBLIC_PROJECT_ID!;

const { wallets } = getDefaultWallets({
  appName: "Solimax launchpad",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "Solimax launchpad",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: "Sign in to the RainbowKit + SIWE example app",
});

export function Providers(
  { children }: { children: React.ReactNode },
  {
    Component,
    pageProps,
  }: AppProps<{
    session: Session;
  }>
) {
  const mounted = useIsMounted();
  return (
    <SessionProvider refetchInterval={0} {...pageProps}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitSiweNextAuthProvider
          getSiweMessageOptions={getSiweMessageOptions}
        >
          <RainbowKitProvider
            chains={chains}
            appInfo={demoAppInfo}
            theme={darkTheme()}
            coolMode
          >
            {mounted && children}
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </WagmiConfig>
    </SessionProvider>
  );
}
