"use client";
import { ReactNode, useState, useContext, createContext } from "react";

export const LaunchpadContext = createContext<FormProps>({
  currentStep: 1,
});

type Props = {
  children: ReactNode;
};

export function LaunchpadContextProvider({ children }: Props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTab, setSelectedTab] = useState("presale");
  const [selectedCurrency, setSelectedCurrency] = useState("BNB");
  const [tokenAddress, setTokenAddress] = useState("");
  const [softcap, setSoftcap] = useState(0);
  const [hardcap, setHardcap] = useState(0);
  const [minBuy, setMinBuy] = useState(0);
  const [maxBuy, setMaxBuy] = useState(0);
  const [router, setRouter] = useState("Select router exchange");
  const [refundType, setRefundType] = useState("Burn");
  const [liquidity, setLiquidity] = useState(0);
  const [listingRate, setListingRate] = useState(0);
  const [presaleRate, setPresaleRate] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [liquidityLockup, setLiquidityLockup] = useState("");
  const [firstRelease, setFirstRelease] = useState("");
  const [vestingPeriod, setVestingPeriod] = useState("");
  const [presaleToken, setPresaleToken] = useState("");
  const [error, setError] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [telegramURL, setTelegramURL] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [discordURL, setDiscordURL] = useState("");
  const [instagramURL, setInstagramURL] = useState("");
  const [githubURL, setGithubURL] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");
  const [description, setDescription] = useState("");

  const tabs = [
    {
      id: "presale",
      text: "Presale",
      route: "/launchpad/presale",
      style: "rounded-tl-[0.625rem] rounded-bl-[0.625rem]",
    },
    {
      id: "fairLaunch",
      text: "Fair launch",
      route: "/launchpad/fair-launch",
      style: "rounded-tr-[0.625rem] rounded-br-[0.625rem]",
    },
  ];

  //   currency options
  const currencyOptions = [
    { value: "BNB", label: "BNB" },
    { value: "BUSD", label: "BUSD" },
    { value: "USDT", label: "USDT" },
    { value: "USDC", label: "USDC" },
  ];

  const handleNextStep = () => {
    setCurrentStep?.(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) setCurrentStep?.(currentStep - 1);
  };

  const value = {
    tabs,
    currencyOptions,
    currentStep,
    selectedTab,
    error,
    websiteURL,
    telegramURL,
    twitterURL,
    discordURL,
    instagramURL,
    githubURL,
    facebookURL,
    youtubeURL,
    description,
    selectedCurrency,
    tokenAddress,
    softcap,
    hardcap,
    minBuy,
    maxBuy,
    router,
    refundType,
    liquidity,
    listingRate,
    presaleRate,
    startDate,
    endDate,
    liquidityLockup,
    firstRelease,
    vestingPeriod,
    presaleToken,
    handleNextStep,
    handlePreviousStep,
    setTokenAddress,
    setSoftcap,
    setHardcap,
    setMinBuy,
    setMaxBuy,
    setRouter,
    setRefundType,
    setLiquidity,
    setListingRate,
    setPresaleRate,
    setStartDate,
    setEndDate,
    setFirstRelease,
    setVestingPeriod,
    setPresaleToken,
    setCurrentStep,
    setLiquidityLockup,
    setSelectedCurrency,
    setError,
    setDescription,
    setYoutubeURL,
    setFacebookURL,
    setGithubURL,
    setInstagramURL,
    setTwitterURL,
    setSelectedTab,
    setDiscordURL,
    setTelegramURL,
    setWebsiteURL,
  };
  return (
    <LaunchpadContext.Provider value={value}>
      {children}
    </LaunchpadContext.Provider>
  );
}

export const GlobalContext = () => useContext(LaunchpadContext);
