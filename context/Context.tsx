"use client";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";

export const LaunchpadContext = createContext<FormProps>({
  currentStep: 1,
});

type Props = {
  children: ReactNode;
};

export function LaunchpadContextProvider({ children }: Props) {
  const [currentStep, setCurrentStep] = useState(1);

  // PRESALE TAB
  const [presaleCurrentStep, setPresaleCurrentStep] = useState(1);
  const [presaleTokenAddress, setPresaleTokenAddress] = useState("");
  const [presaleSelectedCurrency, setPresaleSelectedCurrency] = useState("BNB");
  const [isPresaleFeeOptionOneChecked, setIsPresaleFeeOptionOneChecked] =
    useState<boolean>(true);

  // FAIRSALE TAB
  const [fairsaleCurrentStep, setFairsaleCurrentStep] = useState(1);
  const [fairsaleTokenAddress, setFairsaleTokenAddress] = useState("");
  const [fairsaleSelectedCurrency, setFairsaleSelectedCurrency] =
    useState("BNB");
  const [isFairsaleFeeOptionOneChecked, setIsFairsaleFeeOptionOneChecked] =
    useState<boolean>(true);

  const [isModalShowing, setIsModalShowing] = useState(false);
  const [selectedTab, setSelectedTab] = useState("presale");
  const [selectedCurrency, setSelectedCurrency] = useState("BNB");
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
  const [totalSellingAmount, setTotalSellingAmount] = useState("");
  const [nameOfToken, setNameOfToken] = useState("");

  const tabs = [
    {
      id: "presale",
      text: "Presale",
      route: "/launchpad/presale/create",
      style: "rounded-tl-[0.625rem] rounded-bl-[0.625rem]",
    },
    {
      id: "fairLaunch",
      text: "Fair launch",
      route: "/launchpad/fair-launch/create",
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) setCurrentStep?.(currentStep - 1);
  };

  useEffect(() => {
    const storedPresaleTokenAddress = localStorage.getItem(
      "presaleTokenAddress"
    );
    setPresaleTokenAddress(storedPresaleTokenAddress!);

    console.log(storedPresaleTokenAddress);
  }, []);

  // Save user data to local storage whenever it changes
  useEffect(() => {
    if (presaleTokenAddress) {
      localStorage.setItem("presaleTokenAddress", presaleTokenAddress);
    }
  }, [presaleTokenAddress]);

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
    presaleTokenAddress,
    presaleSelectedCurrency,
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
    totalSellingAmount,
    isModalShowing,
    nameOfToken,
    setPresaleTokenAddress,
    setPresaleSelectedCurrency,
    setNameOfToken,
    setIsModalShowing,
    setTotalSellingAmount,
    handleNextStep,
    handlePreviousStep,
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
