"use client";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";

export const LaunchpadContext = createContext<FormProps>({
  airdropCurrentStep: 1,
  presaleCurrentStep: 1,
  fairlaunchCurrentStep: 1,
  privateSaleCurrentStep: 1,
});

type Props = {
  children: ReactNode;
};

export function LaunchpadContextProvider({ children }: Props) {
  const [isModalShowing, setIsModalShowing] = useState(false);

  // ---------------------------------
  // PRESALE PAGE
  const [presaleCurrentStep, setPresaleCurrentStep] = useState(1);
  // STEP ONE
  const [presaleTokenAddress, setPresaleTokenAddress] = useState<string>("");
  const [presaleSelectedCurrency, setPresaleSelectedCurrency] = useState("BNB");
  const [isPresaleFeeOptionOneChecked, setIsPresaleFeeOptionOneChecked] =
    useState<boolean>(true);
  const [isPresaleFeeOptionTwoChecked, setIsPresaleFeeOptionTwoChecked] =
    useState<boolean>(false);
  // STEP TWO
  const [presaleRate, setPresaleRate] = useState(0);
  const [presaleSoftcap, setPresaleSoftcap] = useState<string | number>(0);
  const [presaleHardcap, setPresaleHardcap] = useState<string | number>(0);
  const [presaleMinBuy, setPresaleMinBuy] = useState<string | number>(0);
  const [presaleMaxBuy, setPresaleMaxBuy] = useState<string | number>(0);
  const [presaleRouter, setPresaleRouter] = useState("Select router exchange");
  const [presaleRefundType, setPresaleRefundType] = useState("Burn");
  const [presaleLiquidity, setPresaleLiquidity] = useState<string | number>(0);
  const [presaleListingRate, setPresaleListingRate] = useState<string | number>(
    0
  );
  const [presaleStartDate, setPresaleStartDate] = useState("");
  const [presaleEndDate, setPresaleEndDate] = useState("");
  const [presaleLiquidityLockup, setPresaleLiquidityLockup] = useState("");
  const [presaleFirstRelease, setPresaleFirstRelease] = useState("");
  const [presaleVestingPeriod, setPresaleVestingPeriod] = useState("");
  const [presaleToken, setPresaleToken] = useState("");
  const [isPresaleWhitelistDisabled, setIsPresaleWhitelistDisabled] =
    useState<boolean>(true);
  const [isPresaleWhitelistEnabled, setIsPresaleWhitelistEnabled] =
    useState<boolean>(false);
  const [
    isPresaleVestingContributionChecked,
    setIsPresaleVestingContributionChecked,
  ] = useState<boolean>(false);
  // STEP THREE
  const [presaleLogo, setPresaleLogo] = useState<File | undefined>();
  const [presaleWebsiteURL, setPresaleWebsiteURL] = useState("");
  const [presaleTelegramURL, setPresaleTelegramURL] = useState("");
  const [presaleTwitterURL, setPresaleTwitterURL] = useState("");
  const [presaleDiscordURL, setPresaleDiscordURL] = useState("");
  const [presaleInstagramURL, setPresaleInstagramURL] = useState("");
  const [presaleGithubURL, setPresaleGithubURL] = useState("");
  const [presaleFacebookURL, setPresaleFacebookURL] = useState("");
  const [presaleYoutubeURL, setPresaleYoutubeURL] = useState("");
  const [presaleDescription, setPresaleDescription] = useState("");
  // STEP FOUR
  const [isPresaleSpendingApproved, setIsPresaleSpendingApproved] =
    useState(false);

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

  // FAIRSALE TAB
  const [fairlaunchCurrentStep, setFairlaunchCurrentStep] = useState(1);
  const [fairlaunchTokenAddress, setFairlaunchTokenAddress] = useState("");
  const [fairlaunchSelectedCurrency, setFairlaunchSelectedCurrency] =
    useState("BNB");
  const [isFairlaunchFeeOptionOneChecked, setIsFairlaunchFeeOptionOneChecked] =
    useState<boolean>(true);
  const [isFairlaunchFeeOptionTwoChecked, setIsFairlaunchFeeOptionTwoChecked] =
    useState<boolean>(false);
  // STEP TWO
  const [fairlaunchTotalSellingAmount, setFairlaunchTotalSellingAmount] =
    useState(0);
  const [fairlaunchSoftcap, setFairlaunchSoftcap] = useState(0);
  const [fairlaunchRouter, setFairlaunchRouter] = useState(
    "Select router exchange"
  );
  const [fairlaunchLiquidity, setFairlaunchLiquidity] = useState(0);
  const [fairlaunchStartDate, setFairlaunchStartDate] = useState("");
  const [fairlaunchEndDate, setFairlaunchEndDate] = useState("");
  const [fairlaunchMaxContribution, setFairlaunchMaxContribution] = useState(0);
  const [fairlaunchLiquidityLockup, setFairlaunchLiquidityLockup] = useState(0);
  const [isFairlaunchWhitelistDisabled, setIsFairlaunchWhitelistDisabled] =
    useState(true);
  const [isFairlaunchWhitelistEnabled, setIsFairlaunchWhitelistEnabled] =
    useState(false);
  const [fairlaunchBuyBackPercent, setFairlaunchBuyBackPercent] = useState(0);
  const [
    isFairlaunchMaxContributionChecked,
    setIsFairlaunchMaxContributionChecked,
  ] = useState(false);
  const [isFairlaunchBuyBackChecked, setIsFairlaunchBuyBackChecked] =
    useState(false);

  // STEP THREE
  const [fairlaunchLogo, setFairlaunchLogo] = useState<File | null>();
  const [fairlaunchWebsiteURL, setFairlaunchWebsiteURL] = useState("");
  const [fairlaunchTelegramURL, setFairlaunchTelegramURL] = useState("");
  const [fairlaunchTwitterURL, setFairlaunchTwitterURL] = useState("");
  const [fairlaunchDiscordURL, setFairlaunchDiscordURL] = useState("");
  const [fairlaunchInstagramURL, setFairlaunchInstagramURL] = useState("");
  const [fairlaunchGithubURL, setFairlaunchGithubURL] = useState("");
  const [fairlaunchFacebookURL, setFairlaunchFacebookURL] = useState("");
  const [fairlaunchYoutubeURL, setFairlaunchYoutubeURL] = useState("");
  const [fairlaunchDescription, setFairlaunchDescription] = useState("");
  // STEP FOUR
  const [isFairlaunchSpendingApproved, setIsFairlaunchSpendingApproved] =
    useState(false);

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

  // PRIVATE SALE PAGE
  const [privateSaleCurrentStep, setPrivateSaleCurrentStep] = useState(1);
  // STEP ONE
  const [privateSaleName, setPrivateSaleName] = useState<string>("");
  const [privateSaleSelectedCurrency, setPrivateSaleSelectedCurrency] =
    useState("BNB");

  const handlePrivateSaleNextStep = () => {
    setPrivateSaleCurrentStep?.(Number(privateSaleCurrentStep) + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrivateSalePreviousStep = () => {
    if (Number(privateSaleCurrentStep) > 1)
      setPrivateSaleCurrentStep?.(Number(privateSaleCurrentStep) - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SOLILOCK
  const [solilockTokenAddress, setSolilockTokenAddress] = useState("");
  const [solilockAmount, setSolilockAmount] = useState("");
  const [solilockLockTime, setSolilockLockTime] = useState("");

  // AIRDROP
  const [airdropTokenAddress, setAirdropTokenAddress] = useState("");
  const [airdropCurrentStep, setAirdropCurrentStep] = useState(1);

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
  const [error, setError] = useState("");

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

  useEffect(() => {
    // PRESALE
    const storedPresaleCurrentStep = localStorage.getItem("presaleCurrentStep");
    if (storedPresaleCurrentStep)
      setPresaleCurrentStep(Number(storedPresaleCurrentStep!));

    const storedPresaleTokenAddress = localStorage.getItem(
      "presaleTokenAddress"
    );
    if (storedPresaleTokenAddress)
      setPresaleTokenAddress(storedPresaleTokenAddress!);

    const storedPresaleSelectedCurrency = localStorage.getItem(
      "presaleSelectedCurrency"
    );
    if (storedPresaleSelectedCurrency)
      setPresaleSelectedCurrency(storedPresaleSelectedCurrency!);

    const storedPresaleFeeOptionOneChecked = localStorage.getItem(
      "presaleFeeOptionOneChecked"
    );
    if (
      storedPresaleFeeOptionOneChecked &&
      storedPresaleFeeOptionOneChecked == "true"
    )
    {

      setIsPresaleFeeOptionOneChecked(
        Boolean(storedPresaleFeeOptionOneChecked!)
        );
        // setIsPresaleFeeOptionTwoChecked(false);
      }

    const storedPresaleFeeOptionTwoChecked = localStorage.getItem(
      "presaleFeeOptionTwoChecked"
    );
    if (
      storedPresaleFeeOptionTwoChecked &&
      storedPresaleFeeOptionTwoChecked == "true"
    ) {
      setIsPresaleFeeOptionTwoChecked(
        Boolean(storedPresaleFeeOptionTwoChecked!)
      );
      // setIsPresaleFeeOptionOneChecked(false);
    }

    const storedPresaleRate = localStorage.getItem("presaleRate");
    if (storedPresaleRate) setPresaleRate(Number(storedPresaleRate!));

    const storedPresaleSoftcap = localStorage.getItem("presaleSoftcap");
    if (storedPresaleSoftcap) setPresaleSoftcap(storedPresaleSoftcap!);

    const storedPresaleHardcap = localStorage.getItem("presaleHardcap");
    if (storedPresaleHardcap) setPresaleHardcap(storedPresaleHardcap!);

    const storedPresaleMinBuy = localStorage.getItem("presaleMinBuy");
    if (storedPresaleMinBuy) setPresaleMinBuy(storedPresaleMinBuy!);

    const storedPresaleMaxBuy = localStorage.getItem("presaleMaxBuy");
    if (storedPresaleMaxBuy) setPresaleMaxBuy(storedPresaleMaxBuy!);

    const storedPresaleRouter = localStorage.getItem("presaleRouter");
    if (storedPresaleRouter) setPresaleRouter(storedPresaleRouter!);

    const storedPresaleRefundType = localStorage.getItem("presaleRefundType");
    if (storedPresaleRefundType) setPresaleRefundType(storedPresaleRefundType!);

    const storedPresaleLiquidity = localStorage.getItem("presaleLiquidity");
    if (storedPresaleLiquidity) setPresaleLiquidity(storedPresaleLiquidity!);

    const storedPresaleListingRate = localStorage.getItem("presaleListingRate");
    if (storedPresaleListingRate)
      setPresaleListingRate(storedPresaleListingRate!);

    const storedPresaleStartDate = localStorage.getItem("presaleStartDate");
    if (storedPresaleStartDate) setPresaleStartDate(storedPresaleStartDate!);

    const storedPresaleEndDate = localStorage.getItem("presaleEndDate");
    if (storedPresaleEndDate) setPresaleEndDate(storedPresaleEndDate!);

    const storedPresaleLiquidityLockup = localStorage.getItem(
      "presaleLiquidityLockup"
    );
    if (storedPresaleLiquidityLockup)
      setPresaleLiquidityLockup(storedPresaleLiquidityLockup!);

    const storedPresaleFirstRelease = localStorage.getItem(
      "presaleFirstRelease"
    );
    if (storedPresaleFirstRelease)
      setPresaleFirstRelease(storedPresaleFirstRelease!);

    const storedPresaleVestingPeriod = localStorage.getItem(
      "presaleVestingPeriod"
    );
    if (storedPresaleVestingPeriod)
      setPresaleVestingPeriod(storedPresaleVestingPeriod!);

    const storedPresaleToken = localStorage.getItem("presaleToken");
    if (storedPresaleToken) setPresaleToken(storedPresaleToken!);

    const storedPresaleWhitelistDisabled = localStorage.getItem(
      "presaleWhitelistDisabled"
    );
    if (storedPresaleWhitelistDisabled)
      setIsPresaleWhitelistDisabled(Boolean(storedPresaleWhitelistDisabled!));

    const storedPresaleWhitelistEnabled = localStorage.getItem(
      "presaleWhitelistEnabled"
    );
    if (storedPresaleWhitelistEnabled)
      setIsPresaleWhitelistEnabled(Boolean(storedPresaleWhitelistEnabled!));

    const storedPresaleVestingContributionChecked = localStorage.getItem(
      "presaleVestingContributionChecked"
    );
    if (storedPresaleVestingContributionChecked)
      setIsPresaleVestingContributionChecked(
        Boolean(storedPresaleVestingContributionChecked!)
      );

    // const storedPresaleLogo = localStorage.getItem("presaleLogo");
    // if (storedPresaleLogo) setPresaleLogo(storedPresaleLogo!);

    const storedPresaleWebsiteURL = localStorage.getItem("presaleWebsiteURL");
    if (storedPresaleWebsiteURL) setPresaleWebsiteURL(storedPresaleWebsiteURL!);

    const storedPresaleTelegramURL = localStorage.getItem("presaleTelegramURL");
    if (storedPresaleTelegramURL)
      setPresaleTelegramURL(storedPresaleTelegramURL!);

    const storedPresaleTwitterURL = localStorage.getItem("presaleTwitterURL");
    if (storedPresaleTwitterURL) setPresaleTwitterURL(storedPresaleTwitterURL!);

    const storedPresaleDiscordURL = localStorage.getItem("presaleDiscordURL");
    if (storedPresaleDiscordURL) setPresaleDiscordURL(storedPresaleDiscordURL!);

    const storedPresaleInstagramURL = localStorage.getItem(
      "presaleInstagramURL"
    );
    if (storedPresaleInstagramURL)
      setPresaleInstagramURL(storedPresaleInstagramURL!);

    const storedPresaleGithubURL = localStorage.getItem("presaleGithubURL");
    if (storedPresaleGithubURL) setPresaleGithubURL(storedPresaleGithubURL!);

    const storedPresaleFacebookURL = localStorage.getItem("presaleFacebookURL");
    if (storedPresaleFacebookURL)
      setPresaleFacebookURL(storedPresaleFacebookURL!);

    const storedPresaleYoutubeURL = localStorage.getItem("presaleYoutubeURL");
    if (storedPresaleYoutubeURL) setPresaleYoutubeURL(storedPresaleYoutubeURL!);

    const storedPresaleDescription = localStorage.getItem("presaleDescription");
    if (storedPresaleDescription)
      setPresaleDescription(storedPresaleDescription!);

    const storedPresaleSpendingApproved = localStorage.getItem(
      "presaleSpendingApproved"
    );
    if (storedPresaleSpendingApproved)
      setIsPresaleSpendingApproved(Boolean(storedPresaleSpendingApproved!));

    // -------------------------------------------
    // FAIR LAUNCH
    const storedFairlaunchTokenAddress = localStorage.getItem(
      "fairlaunchTokenAddress"
    );
    if (storedFairlaunchTokenAddress)
      setFairlaunchTokenAddress(storedFairlaunchTokenAddress!);

    const storedFairlaunchCurrentStep = localStorage.getItem(
      "fairlaunchCurrentStep"
    );
    if (storedFairlaunchCurrentStep)
      setFairlaunchCurrentStep(Number(storedFairlaunchCurrentStep!));

    const storedFairlaunchSelectedCurrency = localStorage.getItem(
      "fairlaunchSelectedCurrency"
    );
    if (storedFairlaunchSelectedCurrency)
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

    if (isPresaleFeeOptionOneChecked) {
      localStorage.setItem(
        "presaleFeeOptionOneChecked",
        String(isPresaleFeeOptionOneChecked)
      );
      // if(isPresaleFeeOptionOneChecked === true){
      //   localStorage.setItem(
      //     "presaleFeeOptionTwoChecked",
      //     String(false)
      //   );
      // }
    }

    if (isPresaleFeeOptionTwoChecked) {
      localStorage.setItem(
        "presaleFeeOptionTwoChecked",
        String(isPresaleFeeOptionTwoChecked)
      );
      // if(isPresaleFeeOptionTwoChecked === true){
      //   localStorage.setItem(
      //     "presaleFeeOptionOneChecked",
      //     String(false)
      //   );
      // }
    }

    if (presaleRate) {
      localStorage.setItem("presaleRate", String(presaleRate));
    }

    if (presaleSoftcap) {
      localStorage.setItem("presaleSoftcap", String(presaleSoftcap));
    }

    if (presaleHardcap) {
      localStorage.setItem("presaleHardcap", String(presaleHardcap));
    }

    if (presaleMinBuy) {
      localStorage.setItem("presaleMinBuy", String(presaleMinBuy));
    }

    if (presaleMaxBuy) {
      localStorage.setItem("presaleMaxBuy", String(presaleMaxBuy));
    }

    if (presaleRouter) {
      localStorage.setItem("presaleRouter", presaleRouter);
    }

    if (presaleRefundType) {
      localStorage.setItem("presaleRefundType", presaleRefundType);
    }

    if (presaleLiquidity) {
      localStorage.setItem("presaleLiquidity", String(presaleLiquidity));
    }

    if (presaleListingRate) {
      localStorage.setItem("presaleListingRate", String(presaleListingRate));
    }

    if (presaleLiquidityLockup) {
      localStorage.setItem("presaleLiquidityLockup", presaleLiquidityLockup);
    }

    if (presaleStartDate) {
      localStorage.setItem("presaleStartDate", presaleStartDate);
    }

    if (presaleEndDate) {
      localStorage.setItem("presaleEndDate", presaleEndDate);
    }

    if (presaleFirstRelease) {
      localStorage.setItem("presaleFirstRelease", presaleFirstRelease);
    }

    if (presaleVestingPeriod) {
      localStorage.setItem("presaleVestingPeriod", presaleVestingPeriod);
    }

    if (presaleToken) {
      localStorage.setItem("presaleToken", presaleToken);
    }

    if (isPresaleWhitelistDisabled) {
      localStorage.setItem(
        "presaleWhitelistDisabled",
        String(isPresaleWhitelistDisabled)
      );
    }

    if (isPresaleWhitelistEnabled) {
      localStorage.setItem(
        "presaleWhitelistEnabled",
        String(isPresaleWhitelistEnabled)
      );
    }

    if (isPresaleVestingContributionChecked) {
      localStorage.setItem(
        "presaleVestingContributionChecked",
        String(isPresaleVestingContributionChecked)
      );
    }

    // if (presaleLogo) {
    //   localStorage.setItem("presaleLogo", String(presaleLogo));
    // }

    if (presaleWebsiteURL) {
      localStorage.setItem("presaleWebsiteURL", presaleWebsiteURL);
    }

    if (presaleTelegramURL) {
      localStorage.setItem("presaleTelegramURL", presaleTelegramURL);
    }

    if (presaleTwitterURL) {
      localStorage.setItem("presaleTwitterURL", presaleTwitterURL);
    }

    if (presaleDiscordURL) {
      localStorage.setItem("presaleDiscordURL", presaleDiscordURL);
    }

    if (presaleInstagramURL) {
      localStorage.setItem("presaleInstagramURL", presaleInstagramURL);
    }

    if (presaleGithubURL) {
      localStorage.setItem("presaleGithubURL", presaleGithubURL);
    }

    if (presaleFacebookURL) {
      localStorage.setItem("presaleFacebookURL", presaleFacebookURL);
    }

    if (presaleYoutubeURL) {
      localStorage.setItem("presaleYoutubeURL", presaleYoutubeURL);
    }

    if (presaleDescription) {
      localStorage.setItem("presaleDescription", presaleDescription);
    }

    if (isPresaleSpendingApproved) {
      localStorage.setItem(
        "presaleSpendingApproved",
        String(isPresaleSpendingApproved)
      );
    }
  }, [
    presaleCurrentStep,
    presaleSelectedCurrency,
    presaleTokenAddress,
    isPresaleFeeOptionOneChecked,
    isPresaleFeeOptionTwoChecked,
    presaleRate,
    presaleSoftcap,
    presaleHardcap,
    presaleMinBuy,
    presaleMaxBuy,
    presaleRouter,
    presaleRefundType,
    presaleLiquidity,
    presaleListingRate,
    presaleLiquidityLockup,
    presaleStartDate,
    presaleEndDate,
    presaleVestingPeriod,
    presaleFirstRelease,
    presaleToken,
    isPresaleWhitelistEnabled,
    isPresaleWhitelistDisabled,
    isPresaleVestingContributionChecked,
    presaleDescription,
    presaleDiscordURL,
    presaleFacebookURL,
    presaleInstagramURL,
    presaleGithubURL,
    presaleTelegramURL,
    presaleTwitterURL,
    presaleWebsiteURL,
    presaleYoutubeURL,
    presaleLogo,
    isPresaleSpendingApproved,
  ]);

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
    selectedTab,
    error,
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
    isModalShowing,

    // PRESALE
    presaleTokenAddress,
    presaleSelectedCurrency,
    presaleCurrentStep,
    isPresaleFeeOptionOneChecked,
    isPresaleFeeOptionTwoChecked,
    presaleRate,
    presaleToken,
    presaleHardcap,
    presaleMaxBuy,
    presaleMinBuy,
    presaleSoftcap,
    presaleRouter,
    presaleRefundType,
    presaleLiquidity,
    presaleListingRate,
    presaleEndDate,
    presaleStartDate,
    presaleLiquidityLockup,
    presaleFirstRelease,
    presaleVestingPeriod,
    isPresaleVestingContributionChecked,
    isPresaleWhitelistDisabled,
    isPresaleWhitelistEnabled,
    setPresaleRefundType,
    setPresaleListingRate,
    setPresaleStartDate,
    setPresaleLiquidityLockup,
    setPresaleVestingPeriod,
    setIsPresaleWhitelistDisabled,
    setIsPresaleWhitelistEnabled,
    setIsPresaleVestingContributionChecked,
    setPresaleRouter,
    setPresaleEndDate,
    setPresaleFirstRelease,
    setPresaleLiquidity,
    setPresaleHardcap,
    setPresaleMaxBuy,
    setPresaleMinBuy,
    setPresaleSoftcap,
    setPresaleToken,
    setPresaleRate,
    setIsPresaleFeeOptionTwoChecked,
    setIsPresaleFeeOptionOneChecked,
    setPresaleCurrentStep,
    setPresaleTokenAddress,
    setPresaleSelectedCurrency,
    setIsModalShowing,
    handlePresalePreviousStep,
    handlePresaleNextStep,
    handleFairlaunchPreviousStep,
    handleFairlaunchNextStep,
    // Step Three
    presaleLogo,
    presaleWebsiteURL,
    presaleTelegramURL,
    presaleTwitterURL,
    presaleDiscordURL,
    presaleInstagramURL,
    presaleGithubURL,
    presaleFacebookURL,
    presaleYoutubeURL,
    presaleDescription,
    setPresaleLogo,
    setPresaleWebsiteURL,
    setPresaleTelegramURL,
    setPresaleTwitterURL,
    setPresaleDiscordURL,
    setPresaleInstagramURL,
    setPresaleGithubURL,
    setPresaleFacebookURL,
    setPresaleYoutubeURL,
    setPresaleDescription,
    // Step Four
    isPresaleSpendingApproved,
    setIsPresaleSpendingApproved,

    // ------------------------------------------------------
    // FAIR LAUNCH
    fairlaunchCurrentStep,
    fairlaunchSelectedCurrency,
    fairlaunchTokenAddress,
    setFairlaunchCurrentStep,
    setFairlaunchSelectedCurrency,
    setFairlaunchTokenAddress,
    isFairlaunchFeeOptionOneChecked,
    isFairlaunchFeeOptionTwoChecked,
    setIsFairlaunchFeeOptionOneChecked,
    setIsFairlaunchFeeOptionTwoChecked,

    // Step Two
    fairlaunchTotalSellingAmount,
    fairlaunchSoftcap,
    fairlaunchRouter,
    fairlaunchLiquidity,
    fairlaunchLiquidityLockup,
    fairlaunchStartDate,
    fairlaunchEndDate,
    fairlaunchMaxContribution,
    isFairlaunchWhitelistDisabled,
    isFairlaunchWhitelistEnabled,
    fairlaunchBuyBackPercent,
    isFairlaunchMaxContributionChecked,
    isFairlaunchBuyBackChecked,
    setIsFairlaunchBuyBackChecked,
    setIsFairlaunchMaxContributionChecked,
    setFairlaunchBuyBackPercent,
    setIsFairlaunchWhitelistEnabled,
    setIsFairlaunchWhitelistDisabled,
    setFairlaunchMaxContribution,
    setFairlaunchEndDate,
    setFairlaunchStartDate,
    setFairlaunchLiquidityLockup,
    setFairlaunchLiquidity,
    setFairlaunchSoftcap,
    setFairlaunchRouter,
    setFairlaunchTotalSellingAmount,
    // Step Three
    fairlaunchLogo,
    fairlaunchWebsiteURL,
    fairlaunchTelegramURL,
    fairlaunchTwitterURL,
    fairlaunchDiscordURL,
    fairlaunchInstagramURL,
    fairlaunchGithubURL,
    fairlaunchFacebookURL,
    fairlaunchYoutubeURL,
    fairlaunchDescription,
    setFairlaunchDescription,
    setFairlaunchYoutubeURL,
    setFairlaunchFacebookURL,
    setFairlaunchGithubURL,
    setFairlaunchInstagramURL,
    setFairlaunchDiscordURL,
    setFairlaunchTwitterURL,
    setFairlaunchTelegramURL,
    setFairlaunchWebsiteURL,
    setFairlaunchLogo,
    // Step Four
    isFairlaunchSpendingApproved,
    setIsFairlaunchSpendingApproved,

    // PRIVATE SALE
    privateSaleCurrentStep,
    privateSaleName,
    privateSaleSelectedCurrency,
    setPrivateSaleCurrentStep,
    setPrivateSaleName,
    setPrivateSaleSelectedCurrency,
    handlePrivateSaleNextStep,
    handlePrivateSalePreviousStep,

    // SOLILOCK
    solilockAmount,
    solilockLockTime,
    solilockTokenAddress,
    setSolilockAmount,
    setSolilockLockTime,
    setSolilockTokenAddress,

    // AIRDROP
    airdropCurrentStep,
    airdropTokenAddress,
    setAirdropCurrentStep,
    setAirdropTokenAddress,
  };
  return (
    <LaunchpadContext.Provider value={value}>
      {children}
    </LaunchpadContext.Provider>
  );
}

export const GlobalContext = () => useContext(LaunchpadContext);
