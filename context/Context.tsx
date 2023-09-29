"use client";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";

export const LaunchpadContext = createContext<FormProps>({
  // currentStep: 1,
  presaleCurrentStep: 1,
  fairlaunchCurrentStep: 1,
});

type Props = {
  children: ReactNode;
};

export function LaunchpadContextProvider({ children }: Props) {
  const [isModalShowing, setIsModalShowing] = useState(false);

  // ---------------------------------
  // PRESALE TAB
  const [presaleCurrentStep, setPresaleCurrentStep] = useState(1);
  // STEP ONE
  const [presaleTokenAddress, setPresaleTokenAddress] = useState<string>("");
  const [presaleSelectedCurrency, setPresaleSelectedCurrency] = useState("BNB");
  const [isPresaleFeeOptionOneChecked, setIsPresaleFeeOptionOneChecked] =
    useState<boolean>(true);
  const [isPresaleFeeOptionTwoChecked, setIsPresaleFeeOptionTwoChecked] =
    useState<boolean>(false);
  // STEP TWO
  // const [presaleRate, setPresaleRate] = useState(0);
  // const [presaleSoftcap, setPresaleSoftcap] = useState(0);
  // const [presaleHardcap, setPresaleHardcap] = useState(0);
  // const [presaleMinBuy, setPresaleMinBuy] = useState(0);
  // const [presaleMaxBuy, setPresaleMaxBuy] = useState(0);
  // const [presaleRouter, setPresaleRouter] = useState("Select router exchange");
  // const [presaleRefundType, setPresaleRefundType] = useState("Burn");
  // const [presaleLiquidity, setPresaleLiquidity] = useState();
  // const [presaleListingRate, setPresaleListingRate] = useState();
  // const [presaleStartDate, setPresaleStartDate] = useState("");
  // const [presaleEndDate, setPresaleEndDate] = useState("");
  // const [presaleLiquidityLockup, setPresaleLiquidityLockup] = useState("");
  // const [presaleFirstRelease, setPresaleFirstRelease] = useState("");
  // const [presaleVestingPeriod, setPresaleVestingPeriod] = useState("");
  // const [presaleToken, setPresaleToken] = useState();
  // const [isPresaleWhitelistDisabled, setIsPresaleWhitelistDisabled] =
  //   useState(true);
  // const [isPresaleWhitelistEnabled, setIsPresaleWhitelistEnabled] =
  //   useState(false);
  // const [
  //   isPresaleVestingContributionChecked,
  //   setIsPresaleVestingContributionChecked,
  // ] = useState(false);

  // FAIRSALE TAB
  const [fairlaunchCurrentStep, setFairlaunchCurrentStep] = useState(1);
  const [fairlaunchTokenAddress, setFairlaunchTokenAddress] = useState("");
  const [fairlaunchSelectedCurrency, setFairlaunchSelectedCurrency] =
    useState("BNB");
  const [isFairlaunchFeeOptionOneChecked, setIsFairlaunchFeeOptionOneChecked] =
    useState<boolean>(true);
  const [isFairlaunchFeeOptionTwoChecked, setFairlaunchIsFeeOptionTwoChecked] =
    useState<boolean>(false);
  const [fairLaunchRouter, setFairlaunchRouter] = useState(
    "Select router exchange"
  );

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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [liquidityLockup, setLiquidityLockup] = useState("");
  const [firstRelease, setFirstRelease] = useState("");
  const [vestingPeriod, setVestingPeriod] = useState("");
  // const [presaleToken, setPresaleToken] = useState("");
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

  //   presale
  const handlePresaleNextStep = () => {
    setPresaleCurrentStep?.(Number(presaleCurrentStep) + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlePresalePreviousStep = () => {
    if (Number(presaleCurrentStep) > 1)
      setPresaleCurrentStep?.(Number(presaleCurrentStep) - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Fairlaunch
  const handleFairlaunchNextStep = () => {
    setFairlaunchCurrentStep?.(Number(fairlaunchCurrentStep) + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleFairlaunchPreviousStep = () => {
    if (Number(fairlaunchCurrentStep) > 1)
      setFairlaunchCurrentStep?.(Number(fairlaunchCurrentStep) - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // PRESALE
    const storedPresaleTokenAddress = localStorage.getItem(
      "presaleTokenAddress"
    );
    setPresaleTokenAddress(storedPresaleTokenAddress!);

    const storedPresaleCurrentStep = localStorage.getItem("presaleCurrentStep");
    setPresaleCurrentStep(Number(storedPresaleCurrentStep!));

    const storedPresaleSelectedCurrency = localStorage.getItem(
      "presaleSelectedCurrency"
    );
    setPresaleSelectedCurrency(storedPresaleSelectedCurrency!);

    // FAIR LAUNCH
    const storedFairlaunchTokenAddress = localStorage.getItem(
      "fairlaunchTokenAddress"
    );
    setFairlaunchTokenAddress(storedFairlaunchTokenAddress!);

    const storedFairlaunchCurrentStep = localStorage.getItem(
      "fairlaunchCurrentStep"
    );
    setFairlaunchCurrentStep(Number(storedFairlaunchCurrentStep!));

    const storedFairlaunchSelectedCurrency = localStorage.getItem(
      "fairlaunchSelectedCurrency"
    );
    setFairlaunchSelectedCurrency(storedFairlaunchSelectedCurrency!);
  }, []);

  // Save user data to local storage whenever it changes
  useEffect(() => {
    // PRESALE
    if (presaleTokenAddress) {
      localStorage.setItem("presaleTokenAddress", presaleTokenAddress);
    }
    if (presaleCurrentStep) {
      localStorage.setItem("presaleCurrentStep", String(presaleCurrentStep));
    }
    if (presaleSelectedCurrency) {
      localStorage.setItem("presaleSelectedCurrency", presaleSelectedCurrency);
    }
  }, [presaleCurrentStep, presaleSelectedCurrency, presaleTokenAddress]);
  
  useEffect(() => {
    // FAIR LAUNCH
    if (fairlaunchTokenAddress) {
      localStorage.setItem("fairlaunchTokenAddress", fairlaunchTokenAddress);
    }
    if (fairlaunchCurrentStep) {
      localStorage.setItem(
        "fairlaunchCurrentStep",
        String(fairlaunchCurrentStep)
      );
    }
    if (fairlaunchSelectedCurrency) {
      localStorage.setItem(
        "fairlaunchSelectedCurrency",
        fairlaunchSelectedCurrency
      );
    }
  }, [
    fairlaunchTokenAddress,
    fairlaunchCurrentStep,
    fairlaunchSelectedCurrency,
  ]);

  const value = {
    tabs,
    currencyOptions,
    // currentStep,
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
    softcap,
    hardcap,
    minBuy,
    maxBuy,
    router,
    refundType,
    liquidity,
    listingRate,
    startDate,
    endDate,
    liquidityLockup,
    firstRelease,
    vestingPeriod,
    totalSellingAmount,
    isModalShowing,
    nameOfToken,
    presaleTokenAddress,
    presaleSelectedCurrency,
    presaleCurrentStep,
    isPresaleFeeOptionOneChecked,
    isPresaleFeeOptionTwoChecked,
    // presaleRate,
    // presaleToken,
    // presaleHardcap,
    // presaleMaxBuy,
    // presaleMinBuy,
    // presaleSoftcap,
    // presaleRouter,
    // presaleRefundType,
    // presaleLiquidity,
    // presaleListingRate,
    // presaleEndDate,
    // presaleStartDate,
    // presaleLiquidityLockup,
    // presaleFirstRelease,
    // presaleVestingPeriod,
    // isPresaleVestingContributionChecked,
    // isPresaleWhitelistDisabled,
    // isPresaleWhitelistEnabled,
    // setPresaleRefundType,
    // setPresaleListingRate,
    // setPresaleStartDate,
    // setPresaleLiquidityLockup,
    // setPresaleVestingPeriod,
    // setIsPresaleWhitelistDisabled,
    // setIsPresaleWhitelistEnabled,
    // setIsPresaleVestingContributionChecked,
    // setPresaleRouter,
    // setPresaleEndDate,
    // setPresaleFirstRelease,
    // setPresaleLiquidity,
    // setPresaleHardcap,
    // setPresaleMaxBuy,
    // setPresaleMinBuy,
    // setPresaleSoftcap,
    // setPresaleToken,
    // setPresaleRate,
    setIsPresaleFeeOptionTwoChecked,
    setIsPresaleFeeOptionOneChecked,
    setPresaleCurrentStep,
    setPresaleTokenAddress,
    setPresaleSelectedCurrency,
    setNameOfToken,
    setIsModalShowing,
    setTotalSellingAmount,
    handlePresalePreviousStep,
    handlePresaleNextStep,
    handleFairlaunchPreviousStep,
    handleFairlaunchNextStep,
    setSoftcap,
    setHardcap,
    setMinBuy,
    setMaxBuy,
    setRouter,
    setRefundType,
    setLiquidity,
    setListingRate,
    setStartDate,
    setEndDate,
    setFirstRelease,
    setVestingPeriod,
    // setCurrentStep,
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

    // FAIR LAUNCH
    fairlaunchCurrentStep,
    fairlaunchSelectedCurrency,
    fairlaunchTokenAddress,
    setFairlaunchCurrentStep,
    setFairlaunchSelectedCurrency,
    setFairlaunchTokenAddress,
  };
  return (
    <LaunchpadContext.Provider value={value}>
      {children}
    </LaunchpadContext.Provider>
  );
}

export const GlobalContext = () => useContext(LaunchpadContext);
