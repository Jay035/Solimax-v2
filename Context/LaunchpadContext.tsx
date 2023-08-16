import {
  ReactNode,
  useState,
  useContext,
  useEffect,
  createContext,
} from "react";

export const LaunchpadContext = createContext<FormProps>({
  currentStep: 1,
});

type Props = {
  children: ReactNode;
};

export function BlogContextProvider({ children }: Props) {
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

  const value = {
    currentStep,
    selectedTab,
  };
  return (
    <LaunchpadContext.Provider value={value}>
      {children}
    </LaunchpadContext.Provider>
  );
}

export function GlobalContext() {
  return useContext(LaunchpadContext);
}
