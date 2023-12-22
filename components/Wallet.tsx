
import Image from "next/image";
import logoIcon from "/public/icons/bsc-icon.svg";
import { useIsMounted } from "@/hooks/useIsMounted";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSignMessage, useAccount, useNetwork } from "wagmi";
// import { SiweMessage } from "siwe";
// import type { GetServerSideProps, NextPage } from 'next';
// import { getServerSession } from 'next-auth';
// import { getAuthOptions } from '../app/api/auth/[...nextauth]';

type Props = {};

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   return {
//     props: {
//       session: await getServerSession(req, res, getAuthOptions(req)),
//     },
//   };
// };

export default function Wallet({}: Props) {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const mounted = useIsMounted();
  const { signMessageAsync } = useSignMessage();

  return (
    <section className="flex items-center gap-[0.62rem] justify-end w-full xl:px-20 xl:pt-8 xl:pb-[1.31rem] xl:border-b xl:border-[#424242]">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }: any) => {
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                    data-aos="fade-left"
                      onClick={openConnectModal}
                      type="button"

                      className="rounded-[3.125rem] p-[0.42rem] border-[0.5px] w-[9.38rem] h-10 bg-[#454FDA] text-white border-[#424242]"

                    >
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="rounded-[3.125rem] p-[0.62rem] border-[0.5px] w-fit h-10 bg-[#9e2f2f] text-white border-[#424242]"

                    >
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      onClick={openChainModal}
                      style={{ display: "flex", alignItems: "center" }}
                      type="button"
                      className="bg-[#28282B] text-white p-[0.625rem] h-10 border-[0.5px] rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]"
                    >
                      {chain.hasIcon && (
                        <div
                          className="w-auto h-auto xl:w-7 xl:h-7"

                          style={{
                            background: chain.iconBackground,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? "Chain icon"}
                              height={5}
                              width={5}
                              src={chain.iconUrl}
                              className="w-auto h-auto xl:w-7 xl:h-7"
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                      <Image

                        width={10}
                        height={10}

                        className="hidden xl:inline-block"
                        src="/icons/chevron-down.svg"
                        alt="chevron-down"
                      />
                    </button>

                    <button
                      onClick={openAccountModal}
                      type="button"

                      className="bg-[#28282B] text-white p-[0.625rem] px-4 border-[0.5px] h-10 rounded-[3.125rem] border-[#424242] flex items-center gap-[0.62rem]"

                    >
                      {account.displayName}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </section>
  );
}
//
