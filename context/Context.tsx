"use client";
import { FormProps } from "@/types";
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
	const [isWalletConnected, setIsWalletConnected] = useState(false);
	const [isModalShowing, setIsModalShowing] = useState(false);
	const [nameOfToken, setNameOfToken] = useState("");
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalHeader, setModalHeader] = useState<string>("");

	function toggleModal() {
		setShowModal((prevState) => !prevState);
	}

	// --------------------------------------
	// BRIDGE
	const [bridgeDestinationChain, setBridgeDestinationChain] =
		useState("Fantom");
	const [bridgeSourceLogo, setBridgeSourceLogo] = useState(
		"/icons/bsc-chain.svg"
	);

	const [bridgeAmountToMax, setBridgeAmountToMax] = useState(false);
	const [bridgeDestinationLogo, setBridgeDestinationLogo] = useState("");
	const [bridgeSourceChain, setBridgeSourceChain] = useState("BSC Chain");
	const [bridgeSourceChainId, setBridgeSourceChainId]: any = useState(10);
	const [query, setQuery] = useState("");
	const destinationChainOptions = [
		{
			value: "Fantom",
			logo: "/icons/fantom.svg",
		},
	];

	const sourceChainOptions = [
		{
			value: "BSC Chain",
			logo: "/icons/bsc-chain.svg",
		},
		{
			value: "Optimism",
			logo: "/icons/optimism-ethereum-op-logo.svg",
		},
		{
			value: "Kava",
			logo: "/icons/kava-logo.svg",
		},
		{
			value: "Fantom (Solimax v1)",
			logo: "/icons/fantom.svg",
		},
	];

	const [bridgeSourceChains, setBridgeSourceChains] =
		useState(sourceChainOptions);

	function handleSearchQuery(searchVal: string) {
		if (searchVal !== "") {
			const filteredData = sourceChainOptions.filter((item) =>
				item.value.toLowerCase().includes(searchVal.toLowerCase())
			);
			setBridgeSourceChains(filteredData);
		} else {
			setBridgeSourceChains(sourceChainOptions);
		}
	}
	// --------------------------------------

	// ---------------------------------
	// PRESALE PAGE
	const [presaleCurrentStep, setPresaleCurrentStep] = useState(1);
	// STEP ONE
	const [presaleTokenAddress, setPresaleTokenAddress] = useState<string>("");
	const [presaleSelectedCurrency, setPresaleSelectedCurrency] =
		useState("BNB");
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
	const [presaleRouter, setPresaleRouter] = useState(
		"Select router exchange"
	);
	const [presaleRefundType, setPresaleRefundType] = useState("Burn");
	const [presaleLiquidity, setPresaleLiquidity] = useState<string | number>(
		0
	);
	const [presaleListingRate, setPresaleListingRate] = useState<
		string | number
	>(0);
	const [presaleStartDate, setPresaleStartDate] = useState("");
	const [presaleEndDate, setPresaleEndDate] = useState("");
	const [presaleLiquidityLockup, setPresaleLiquidityLockup] = useState("");
	const [presaleFirstRelease, setPresaleFirstRelease] = useState<number>(0);
	const [presaleVestingPeriod, setPresaleVestingPeriod] = useState("");
	const [presaleToken, setPresaleToken] = useState<number>(0);
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
		useState<boolean>(false);

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
	const [
		isFairlaunchFeeOptionOneChecked,
		setIsFairlaunchFeeOptionOneChecked,
	] = useState<boolean>(true);
	const [
		isFairlaunchFeeOptionTwoChecked,
		setIsFairlaunchFeeOptionTwoChecked,
	] = useState<boolean>(false);
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
	const [fairlaunchMaxContribution, setFairlaunchMaxContribution] =
		useState(0);
	const [fairlaunchLiquidityLockup, setFairlaunchLiquidityLockup] =
		useState(0);
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
	const [fairlaunchLogo, setFairlaunchLogo] = useState<File | undefined>();
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
	// STEP TWO
	const [privateSaleSoftcap, setPrivateSaleSoftcap] = useState(0);
	const [privateSaleHardcap, setPrivateSaleHardcap] = useState(0);
	const [privateSaleMinBuy, setPrivateSaleMinBuy] = useState(0);
	const [privateSaleMaxBuy, setPrivateSaleMaxBuy] = useState(0);
	const [privateSaleStartDate, setPrivateSaleStartDate] = useState("");
	const [privateSaleEndDate, setPrivateSaleEndDate] = useState("");
	const [privateSaleFirstRelease, setPrivateSaleFirstRelease] = useState("");
	const [privateSalePresaleToken, setPrivateSalePresaleToken] = useState("");
	const [privateSaleFundVesting, setPrivateSaleFundVesting] = useState("");
	const [isPrivateSaleWhitelistDisabled, setIsPrivateSaleWhitelistDisabled] =
		useState<boolean>(true);
	const [isPrivateSaleWhitelistEnabled, setIsPrivateSaleWhitelistEnabled] =
		useState<boolean>(false);

	// STEP THREE
	const [privateSaleLogo, setPrivateSaleLogo] = useState<File | undefined>();
	const [privateSaleWebsiteURL, setPrivateSaleWebsiteURL] = useState("");
	const [privateSaleTelegramURL, setPrivateSaleTelegramURL] = useState("");
	const [privateSaleTwitterURL, setPrivateSaleTwitterURL] = useState("");
	const [privateSaleDiscordURL, setPrivateSaleDiscordURL] = useState("");
	const [privateSaleInstagramURL, setPrivateSaleInstagramURL] = useState("");
	const [privateSaleGithubURL, setPrivateSaleGithubURL] = useState("");
	const [privateSaleFacebookURL, setPrivateSaleFacebookURL] = useState("");
	const [privateSaleYoutubeURL, setPrivateSaleYoutubeURL] = useState("");
	const [privateSaleDescription, setPrivateSaleDescription] = useState("");
	// STEP FOUR
	const [isPrivateSaleSpendingApproved, setIsPrivateSaleSpendingApproved] =
		useState<boolean>(false);

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
	const [solilockOwner, setSolilockOwner] = useState("");
	const [solilockTGEDate, setSolilockTGEDate] = useState("");
	const [solilockTGEPercent, setSolilockTGEPercent] = useState(0);
	const [solilockCycleDays, setSolilockCycleDays] = useState("");
	const [solilockCycleReleasePercent, setSolilockCycleReleasePercent] =
		useState("");
	const [solilockAnotherUserUsed, setSolilockAnotherUserUsed] =
		useState(false);
	const [solilockVestingUsed, setSolilockVestingUsed] = useState(false);

	// AIRDROP
	const [airdropTokenAddress, setAirdropTokenAddress] = useState("");
	const [airdropCurrentStep, setAirdropCurrentStep] = useState(1);
	const [airdropTitle, setAirdropTitle] = useState("");
	const [airdropWebsiteURL, setAirdropWebsiteURL] = useState("");
	const [airdropTelegramURL, setAirdropTelegramURL] = useState("");
	const [airdropTwitterURL, setAirdropTwitterURL] = useState("");
	const [airdropDiscordURL, setAirdropDiscordURL] = useState("");
	const [airdropInstagramURL, setAirdropInstagramURL] = useState("");
	const [airdropGithubURL, setAirdropGithubURL] = useState("");
	const [airdropFacebookURL, setAirdropFacebookURL] = useState("");
	const [airdropYoutubeURL, setAirdropYoutubeURL] = useState("");
	const [airdropDescription, setAirdropDescription] = useState("");

	const [selectedTab, setSelectedTab] = useState("presale");
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
		const storedPresaleCurrentStep =
			localStorage.getItem("presaleCurrentStep");
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
		) {
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

		const storedPresaleRefundType =
			localStorage.getItem("presaleRefundType");
		if (storedPresaleRefundType)
			setPresaleRefundType(storedPresaleRefundType!);

		const storedPresaleLiquidity = localStorage.getItem("presaleLiquidity");
		if (storedPresaleLiquidity)
			setPresaleLiquidity(storedPresaleLiquidity!);

		const storedPresaleListingRate =
			localStorage.getItem("presaleListingRate");
		if (storedPresaleListingRate)
			setPresaleListingRate(storedPresaleListingRate!);

		const storedPresaleStartDate = localStorage.getItem("presaleStartDate");
		if (storedPresaleStartDate)
			setPresaleStartDate(storedPresaleStartDate!);

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
			setPresaleFirstRelease(Number(storedPresaleFirstRelease!));

		const storedPresaleVestingPeriod = localStorage.getItem(
			"presaleVestingPeriod"
		);
		if (storedPresaleVestingPeriod)
			setPresaleVestingPeriod(storedPresaleVestingPeriod!);

		const storedPresaleToken = localStorage.getItem("presaleToken");
		if (storedPresaleToken) setPresaleToken(Number(storedPresaleToken!));

		const storedPresaleWhitelistDisabled = localStorage.getItem(
			"presaleWhitelistDisabled"
		);
		if (storedPresaleWhitelistDisabled)
			setIsPresaleWhitelistDisabled(
				Boolean(storedPresaleWhitelistDisabled!)
			);

		const storedPresaleWhitelistEnabled = localStorage.getItem(
			"presaleWhitelistEnabled"
		);
		if (storedPresaleWhitelistEnabled)
			setIsPresaleWhitelistEnabled(
				Boolean(storedPresaleWhitelistEnabled!)
			);

		const storedPresaleVestingContributionChecked = localStorage.getItem(
			"presaleVestingContributionChecked"
		);
		if (storedPresaleVestingContributionChecked)
			setIsPresaleVestingContributionChecked(
				Boolean(storedPresaleVestingContributionChecked!)
			);

		// const storedPresaleLogo = localStorage.getItem("presaleLogo");
		// if (storedPresaleLogo) setPresaleLogo(storedPresaleLogo!);

		const storedPresaleWebsiteURL =
			localStorage.getItem("presaleWebsiteURL");
		if (storedPresaleWebsiteURL)
			setPresaleWebsiteURL(storedPresaleWebsiteURL!);

		const storedPresaleTelegramURL =
			localStorage.getItem("presaleTelegramURL");
		if (storedPresaleTelegramURL)
			setPresaleTelegramURL(storedPresaleTelegramURL!);

		const storedPresaleTwitterURL =
			localStorage.getItem("presaleTwitterURL");
		if (storedPresaleTwitterURL)
			setPresaleTwitterURL(storedPresaleTwitterURL!);

		const storedPresaleDiscordURL =
			localStorage.getItem("presaleDiscordURL");
		if (storedPresaleDiscordURL)
			setPresaleDiscordURL(storedPresaleDiscordURL!);

		const storedPresaleInstagramURL = localStorage.getItem(
			"presaleInstagramURL"
		);
		if (storedPresaleInstagramURL)
			setPresaleInstagramURL(storedPresaleInstagramURL!);

		const storedPresaleGithubURL = localStorage.getItem("presaleGithubURL");
		if (storedPresaleGithubURL)
			setPresaleGithubURL(storedPresaleGithubURL!);

		const storedPresaleFacebookURL =
			localStorage.getItem("presaleFacebookURL");
		if (storedPresaleFacebookURL)
			setPresaleFacebookURL(storedPresaleFacebookURL!);

		const storedPresaleYoutubeURL =
			localStorage.getItem("presaleYoutubeURL");
		if (storedPresaleYoutubeURL)
			setPresaleYoutubeURL(storedPresaleYoutubeURL!);

		const storedPresaleDescription =
			localStorage.getItem("presaleDescription");
		if (storedPresaleDescription)
			setPresaleDescription(storedPresaleDescription!);

		const storedPresaleSpendingApproved = localStorage.getItem(
			"presaleSpendingApproved"
		);
		if (storedPresaleSpendingApproved)
			setIsPresaleSpendingApproved(
				Boolean(storedPresaleSpendingApproved!)
			);

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

		const storedFairlaunchFeeOptionOneChecked = localStorage.getItem(
			"fairlaunchFeeOptionOneChecked"
		);
		if (
			storedFairlaunchFeeOptionOneChecked &&
			storedFairlaunchFeeOptionOneChecked == "true"
		) {
			setIsFairlaunchFeeOptionOneChecked(
				Boolean(storedFairlaunchFeeOptionOneChecked!)
			);
		}

		const storedFairlaunchFeeOptionTwoChecked = localStorage.getItem(
			"fairlaunchFeeOptionTwoChecked"
		);
		if (
			storedFairlaunchFeeOptionTwoChecked &&
			storedFairlaunchFeeOptionTwoChecked == "true"
		) {
			setIsFairlaunchFeeOptionTwoChecked(
				Boolean(storedFairlaunchFeeOptionTwoChecked!)
			);
		}

		const storedFairlaunchTotalSellingAmount = localStorage.getItem(
			"fairlaunchTotalSellingAmount"
		);
		if (storedFairlaunchTotalSellingAmount)
			setFairlaunchTotalSellingAmount(
				Number(storedFairlaunchTotalSellingAmount!)
			);

		const storedFairlaunchWhitelistDisabled = localStorage.getItem(
			"fairlaunchWhitelistDisabled"
		);
		if (storedFairlaunchWhitelistDisabled)
			setIsFairlaunchWhitelistDisabled(
				Boolean(storedFairlaunchWhitelistDisabled!)
			);

		const storedFairlaunchWhitelistEnabled = localStorage.getItem(
			"fairlaunchWhitelistEnabled"
		);
		if (storedFairlaunchWhitelistEnabled)
			setIsFairlaunchWhitelistEnabled(
				Boolean(storedFairlaunchWhitelistEnabled!)
			);

		const storedFairlaunchSoftcap =
			localStorage.getItem("fairlaunchSoftcap");
		if (storedFairlaunchSoftcap)
			setFairlaunchSoftcap(Number(storedFairlaunchSoftcap!));

		const storedFairlaunchMaxContribution = localStorage.getItem(
			"fairlaunchMaxContribution"
		);
		if (storedFairlaunchMaxContribution)
			setFairlaunchMaxContribution(
				Number(storedFairlaunchMaxContribution!)
			);

		const storedFairlaunchRouter = localStorage.getItem("fairlaunchRouter");
		if (storedFairlaunchRouter)
			setFairlaunchRouter(storedFairlaunchRouter!);

		const storedFairlaunchBuyBackPercent = localStorage.getItem(
			"fairlaunchBuyBackPercent"
		);
		if (storedFairlaunchBuyBackPercent)
			setFairlaunchBuyBackPercent(
				Number(storedFairlaunchBuyBackPercent!)
			);

		const storedFairlaunchLiquidity = localStorage.getItem(
			"fairlaunchLiquidity"
		);
		if (storedFairlaunchLiquidity)
			setFairlaunchLiquidity(Number(storedFairlaunchLiquidity!));

		const storedFairlaunchStartDate = localStorage.getItem(
			"fairlaunchStartDate"
		);
		if (storedFairlaunchStartDate)
			setFairlaunchStartDate(storedFairlaunchStartDate!);

		const storedFairlaunchEndDate =
			localStorage.getItem("fairlaunchEndDate");
		if (storedFairlaunchEndDate)
			setFairlaunchEndDate(storedFairlaunchEndDate!);

		const storedFairlaunchLiquidityLockup = localStorage.getItem(
			"fairlaunchLiquidityLockup"
		);
		if (storedFairlaunchLiquidityLockup)
			setFairlaunchLiquidityLockup(
				Number(storedFairlaunchLiquidityLockup!)
			);

		const storedFairlaunchWebsiteURL = localStorage.getItem(
			"fairlaunchWebsiteURL"
		);
		if (storedFairlaunchWebsiteURL)
			setFairlaunchWebsiteURL(storedFairlaunchWebsiteURL!);

		const storedFairlaunchTelegramURL = localStorage.getItem(
			"fairlaunchTelegramURL"
		);
		if (storedFairlaunchTelegramURL)
			setFairlaunchTelegramURL(storedFairlaunchTelegramURL!);

		const storedFairlaunchTwitterURL = localStorage.getItem(
			"fairlaunchTwitterURL"
		);
		if (storedFairlaunchTwitterURL)
			setFairlaunchTwitterURL(storedFairlaunchTwitterURL!);

		const storedFairlaunchDiscordURL = localStorage.getItem(
			"fairlaunchDiscordURL"
		);
		if (storedFairlaunchDiscordURL)
			setFairlaunchDiscordURL(storedFairlaunchDiscordURL!);

		const storedFairlaunchInstagramURL = localStorage.getItem(
			"fairlaunchInstagramURL"
		);
		if (storedFairlaunchInstagramURL)
			setFairlaunchInstagramURL(storedFairlaunchInstagramURL!);

		const storedFairlaunchGithubURL = localStorage.getItem(
			"fairlaunchGithubURL"
		);
		if (storedFairlaunchGithubURL)
			setFairlaunchGithubURL(storedFairlaunchGithubURL!);

		const storedFairlaunchFacebookURL = localStorage.getItem(
			"fairlaunchFacebookURL"
		);
		if (storedFairlaunchFacebookURL)
			setFairlaunchFacebookURL(storedFairlaunchFacebookURL!);

		const storedFairlaunchYoutubeURL = localStorage.getItem(
			"fairlaunchYoutubeURL"
		);
		if (storedFairlaunchYoutubeURL)
			setFairlaunchYoutubeURL(storedFairlaunchYoutubeURL!);

		const storedFairlaunchDescription = localStorage.getItem(
			"fairlaunchDescription"
		);
		if (storedFairlaunchDescription)
			setFairlaunchDescription(storedFairlaunchDescription!);

		const storedFairlaunchSpendingApproved = localStorage.getItem(
			"fairlaunchSpendingApproved"
		);
		if (storedFairlaunchSpendingApproved)
			setIsFairlaunchSpendingApproved(
				Boolean(storedFairlaunchSpendingApproved!)
			);

		// ----------------------------------------------
		// PRIVATE SALE
		const storedPrivateSaleCurrentStep = localStorage.getItem(
			"privateSaleCurrentStep"
		);
		if (storedPrivateSaleCurrentStep)
			setPrivateSaleCurrentStep(Number(storedPrivateSaleCurrentStep));

		const storedPrivateSaleName = localStorage.getItem("privateSaleName");
		if (storedPrivateSaleName)
			setPrivateSaleName(storedPrivateSaleCurrentStep!);

		const storedPrivateSaleSelectedCurrency = localStorage.getItem(
			"privateSaleSelectedCurrency"
		);
		if (storedPrivateSaleSelectedCurrency)
			setPrivateSaleSelectedCurrency(storedPrivateSaleSelectedCurrency!);

		const storedPrivateSaleSoftcap =
			localStorage.getItem("privateSaleSoftcap");
		if (storedPrivateSaleSoftcap)
			setPrivateSaleSoftcap(Number(storedPrivateSaleSoftcap));

		const storedPrivateSaleHardcap =
			localStorage.getItem("privateSaleHardcap");
		if (storedPrivateSaleHardcap)
			setPrivateSaleHardcap(Number(storedPrivateSaleHardcap));

		const storedPrivateSaleMinBuy =
			localStorage.getItem("privateSaleMinBuy");
		if (storedPrivateSaleMinBuy)
			setPrivateSaleMinBuy(Number(storedPrivateSaleMinBuy));

		const storedPrivateSaleMaxBuy =
			localStorage.getItem("privateSaleMaxBuy");
		if (storedPrivateSaleMaxBuy)
			setPrivateSaleMaxBuy(Number(storedPrivateSaleMaxBuy));

		const storedPrivateSaleStartDate = localStorage.getItem(
			"privateSaleStartDate"
		);
		if (storedPrivateSaleStartDate)
			setPrivateSaleStartDate(storedPrivateSaleStartDate);

		const storedPrivateSaleEndDate =
			localStorage.getItem("privateSaleEndDate");
		if (storedPrivateSaleEndDate)
			setPrivateSaleEndDate(storedPrivateSaleEndDate);

		const storedPrivateSaleFirstRelease = localStorage.getItem(
			"privateSaleFirstRelease"
		);
		if (storedPrivateSaleFirstRelease)
			setPrivateSaleFirstRelease(storedPrivateSaleFirstRelease);

		const storedPrivateSalePresaleToken = localStorage.getItem(
			"privateSalePresaleToken"
		);
		if (storedPrivateSalePresaleToken)
			setPrivateSalePresaleToken(storedPrivateSalePresaleToken);

		const storedPrivateSaleFundVesting = localStorage.getItem(
			"privateSaleFundVesting"
		);
		if (storedPrivateSaleFundVesting)
			setPrivateSaleFundVesting(storedPrivateSaleFundVesting);

		const storedPrivateSaleWebsiteURL = localStorage.getItem(
			"privateSaleWebsiteURL"
		);
		if (storedPrivateSaleWebsiteURL)
			setPrivateSaleWebsiteURL(storedPrivateSaleWebsiteURL!);

		const storedPrivateSaleTelegramURL = localStorage.getItem(
			"privateSaleTelegramURL"
		);
		if (storedPrivateSaleTelegramURL)
			setPrivateSaleTelegramURL(storedPrivateSaleTelegramURL!);

		const storedPrivateSaleTwitterURL = localStorage.getItem(
			"privateSaleTwitterURL"
		);
		if (storedPrivateSaleTwitterURL)
			setPrivateSaleTwitterURL(storedPrivateSaleTwitterURL!);

		const storedPrivateSaleDiscordURL = localStorage.getItem(
			"privateSaleDiscordURL"
		);
		if (storedPrivateSaleDiscordURL)
			setPrivateSaleDiscordURL(storedPrivateSaleDiscordURL!);

		const storedPrivateSaleInstagramURL = localStorage.getItem(
			"privateSaleInstagramURL"
		);
		if (storedPrivateSaleInstagramURL)
			setPrivateSaleInstagramURL(storedPrivateSaleInstagramURL!);

		const storedPrivateSaleGithubURL = localStorage.getItem(
			"privateSaleGithubURL"
		);
		if (storedPrivateSaleGithubURL)
			setPrivateSaleGithubURL(storedPrivateSaleGithubURL!);

		const storedPrivateSaleFacebookURL = localStorage.getItem(
			"privateSaleFacebookURL"
		);
		if (storedPrivateSaleFacebookURL)
			setPrivateSaleFacebookURL(storedPrivateSaleFacebookURL!);

		const storedPrivateSaleYoutubeURL = localStorage.getItem(
			"privateSaleYoutubeURL"
		);
		if (storedPrivateSaleYoutubeURL)
			setPrivateSaleYoutubeURL(storedPrivateSaleYoutubeURL!);

		const storedPrivateSaleDescription = localStorage.getItem(
			"privateSaleDescription"
		);
		if (storedPrivateSaleDescription)
			setPrivateSaleDescription(storedPrivateSaleDescription!);

		// ----------------------------------------------
		// SOLILOCK
		const storedSolilockTokenAddress = localStorage.getItem(
			"solilockTokenAddress"
		);
		if (storedSolilockTokenAddress)
			setSolilockTokenAddress(storedSolilockTokenAddress!);

		const storedSolilockAmount = localStorage.getItem("solilockAmount");
		if (storedSolilockAmount) setSolilockAmount(storedSolilockAmount!);

		const storedSolilockLockTime = localStorage.getItem("solilockLockTime");
		if (storedSolilockLockTime)
			setSolilockLockTime(storedSolilockLockTime!);

		const storedSolilockOwner = localStorage.getItem("solilockOwner");
		if (storedSolilockOwner) setSolilockOwner(storedSolilockOwner!);

		const storedSolilockTGEDate = localStorage.getItem("solilockTGEDate");
		if (storedSolilockTGEDate) setSolilockTGEDate(storedSolilockTGEDate!);

		const storedSolilockTGEPercent =
			localStorage.getItem("solilockTGEPercent");
		if (storedSolilockTGEPercent)
			setSolilockTGEPercent(Number(storedSolilockTGEPercent!));

		const storedSolilockCycleDays =
			localStorage.getItem("solilockCycleDays");
		if (storedSolilockCycleDays)
			setSolilockCycleDays(storedSolilockCycleDays!);

		const storedSolilockCycleReleasePercent = localStorage.getItem(
			"solilockCycleReleasePercent"
		);
		if (storedSolilockCycleReleasePercent)
			setSolilockCycleReleasePercent(storedSolilockCycleReleasePercent!);

		// -----------------------------------------
		// AIRDROP
		const storedAirdropCurrentStep =
			localStorage.getItem("airdropCurrentStep");
		if (storedAirdropCurrentStep)
			setAirdropCurrentStep(Number(storedAirdropCurrentStep!));

		const storedAirdropTokenAddress = localStorage.getItem(
			"airdropTokenAddress"
		);
		if (storedAirdropTokenAddress)
			setAirdropTokenAddress(storedAirdropTokenAddress!);

		const storedAirdropTitle = localStorage.getItem("airdropTitle");
		if (storedAirdropTitle) setAirdropTitle(storedAirdropTitle!);

		const storedAirdropDescription =
			localStorage.getItem("airdropDescription");
		if (storedAirdropDescription)
			setAirdropDescription(storedAirdropDescription!);

		const storedAirdropDiscordURL =
			localStorage.getItem("airdropDiscordURL");
		if (storedAirdropDiscordURL)
			setAirdropDiscordURL(storedAirdropDiscordURL!);

		const storedAirdropFacebookURL =
			localStorage.getItem("airdropFacebookURL");
		if (storedAirdropFacebookURL)
			setAirdropFacebookURL(storedAirdropFacebookURL!);

		const storedAirdropGithubURL = localStorage.getItem("airdropGithubURL");
		if (storedAirdropGithubURL)
			setAirdropGithubURL(storedAirdropGithubURL!);

		const storedAirdropInstagramURL = localStorage.getItem(
			"airdropInstagramURL"
		);
		if (storedAirdropInstagramURL)
			setAirdropInstagramURL(storedAirdropInstagramURL!);

		const storedAirdropTwitterURL =
			localStorage.getItem("airdropTwitterURL");
		if (storedAirdropTwitterURL)
			setAirdropTwitterURL(storedAirdropTwitterURL!);

		const storedAirdropWebsiteURL =
			localStorage.getItem("airdropWebsiteURL");
		if (storedAirdropWebsiteURL)
			setAirdropWebsiteURL(storedAirdropWebsiteURL!);

		const storedAirdropTelegramURL =
			localStorage.getItem("airdropTelegramURL");
		if (storedAirdropTelegramURL)
			setAirdropTelegramURL(storedAirdropTelegramURL!);

		const storedAirdropYoutubeURL =
			localStorage.getItem("airdropYoutubeURL");
		if (storedAirdropYoutubeURL)
			setAirdropYoutubeURL(storedAirdropYoutubeURL!);
	}, []);

	// Save user data to local storage whenever it changes
	useEffect(() => {
		// PRESALE
		if (presaleTokenAddress) {
			localStorage.setItem("presaleTokenAddress", presaleTokenAddress);
		}

		if (presaleCurrentStep) {
			localStorage.setItem(
				"presaleCurrentStep",
				String(presaleCurrentStep)
			);
		}

		if (presaleSelectedCurrency) {
			localStorage.setItem(
				"presaleSelectedCurrency",
				presaleSelectedCurrency
			);
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
			localStorage.setItem(
				"presaleListingRate",
				String(presaleListingRate)
			);
		}

		if (presaleLiquidityLockup) {
			localStorage.setItem(
				"presaleLiquidityLockup",
				presaleLiquidityLockup
			);
		}

		if (presaleStartDate) {
			localStorage.setItem("presaleStartDate", presaleStartDate);
		}

		if (presaleEndDate) {
			localStorage.setItem("presaleEndDate", presaleEndDate);
		}

		if (presaleFirstRelease) {
			localStorage.setItem(
				"presaleFirstRelease",
				String(presaleFirstRelease)
			);
		}

		if (presaleVestingPeriod) {
			localStorage.setItem("presaleVestingPeriod", presaleVestingPeriod);
		}

		if (presaleToken) {
			localStorage.setItem("presaleToken", String(presaleToken));
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
		// presaleLogo,
		isPresaleSpendingApproved,
	]);

	useEffect(() => {
		// FAIR LAUNCH
		if (fairlaunchTokenAddress) {
			localStorage.setItem(
				"fairlaunchTokenAddress",
				fairlaunchTokenAddress
			);
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

		if (isFairlaunchFeeOptionOneChecked) {
			localStorage.setItem(
				"fairlaunchFeeOptionOneChecked",
				String(isFairlaunchFeeOptionOneChecked)
			);
		}

		if (isFairlaunchFeeOptionTwoChecked) {
			localStorage.setItem(
				"fairlaunchFeeOptionTwoChecked",
				String(isFairlaunchFeeOptionTwoChecked)
			);
		}

		if (fairlaunchTotalSellingAmount) {
			localStorage.setItem(
				"fairlaunchTotalSellingAmount",
				String(fairlaunchTotalSellingAmount)
			);
		}

		if (isFairlaunchWhitelistDisabled) {
			localStorage.setItem(
				"fairlaunchWhitelistDisabled",
				String(isFairlaunchWhitelistDisabled)
			);
		}

		if (isFairlaunchWhitelistEnabled) {
			localStorage.setItem(
				"fairlaunchWhitelistEnabled",
				String(isFairlaunchWhitelistEnabled)
			);
		}

		if (fairlaunchSoftcap) {
			localStorage.setItem(
				"fairlaunchSoftcap",
				String(fairlaunchSoftcap)
			);
		}

		if (fairlaunchRouter) {
			localStorage.setItem("fairlaunchRouter", fairlaunchRouter);
		}

		if (fairlaunchMaxContribution) {
			localStorage.setItem(
				"fairlaunchMaxContribution",
				String(fairlaunchMaxContribution)
			);
		}

		if (fairlaunchBuyBackPercent) {
			localStorage.setItem(
				"fairlaunchBuyBackPercent",
				String(fairlaunchBuyBackPercent)
			);
		}

		if (fairlaunchLiquidity) {
			localStorage.setItem(
				"fairlaunchLiquidity",
				String(fairlaunchLiquidity)
			);
		}

		if (fairlaunchStartDate) {
			localStorage.setItem("fairlaunchStartDate", fairlaunchStartDate);
		}

		if (fairlaunchEndDate) {
			localStorage.setItem("fairlaunchEndDate", fairlaunchEndDate);
		}

		if (fairlaunchLiquidityLockup) {
			localStorage.setItem(
				"fairlaunchLiquidityLockup",
				String(fairlaunchLiquidityLockup)
			);
		}

		if (fairlaunchWebsiteURL) {
			localStorage.setItem("fairlaunchWebsiteURL", fairlaunchWebsiteURL);
		}

		if (fairlaunchTelegramURL) {
			localStorage.setItem(
				"fairlaunchTelegramURL",
				fairlaunchTelegramURL
			);
		}

		if (fairlaunchTwitterURL) {
			localStorage.setItem("fairlaunchTwitterURL", fairlaunchTwitterURL);
		}

		if (fairlaunchDiscordURL) {
			localStorage.setItem("fairlaunchDiscordURL", fairlaunchDiscordURL);
		}

		if (fairlaunchInstagramURL) {
			localStorage.setItem(
				"fairlaunchInstagramURL",
				fairlaunchInstagramURL
			);
		}

		if (fairlaunchGithubURL) {
			localStorage.setItem("fairlaunchGithubURL", fairlaunchGithubURL);
		}

		if (fairlaunchFacebookURL) {
			localStorage.setItem(
				"fairlaunchFacebookURL",
				fairlaunchFacebookURL
			);
		}

		if (fairlaunchYoutubeURL) {
			localStorage.setItem("fairlaunchYoutubeURL", fairlaunchYoutubeURL);
		}

		if (fairlaunchDescription) {
			localStorage.setItem(
				"fairlaunchDescription",
				fairlaunchDescription
			);
		}

		if (isFairlaunchSpendingApproved) {
			localStorage.setItem(
				"fairlaunchSpendingApproved",
				String(isFairlaunchSpendingApproved)
			);
		}
	}, [
		fairlaunchTokenAddress,
		fairlaunchCurrentStep,
		fairlaunchSelectedCurrency,
		fairlaunchRouter,
		fairlaunchSoftcap,
		isFairlaunchFeeOptionOneChecked,
		isFairlaunchFeeOptionTwoChecked,
		fairlaunchTotalSellingAmount,
		isFairlaunchWhitelistDisabled,
		isFairlaunchWhitelistEnabled,
		fairlaunchMaxContribution,
		fairlaunchBuyBackPercent,
		fairlaunchLiquidity,
		fairlaunchStartDate,
		fairlaunchEndDate,
		fairlaunchLiquidityLockup,
		fairlaunchDescription,
		fairlaunchDiscordURL,
		fairlaunchFacebookURL,
		fairlaunchInstagramURL,
		fairlaunchGithubURL,
		fairlaunchTelegramURL,
		fairlaunchTwitterURL,
		fairlaunchWebsiteURL,
		fairlaunchYoutubeURL,
		// fairlaunchLogo,
		isFairlaunchSpendingApproved,
	]);

	// PRIVATE SALE
	useEffect(() => {
		if (privateSaleCurrentStep) {
			localStorage.setItem(
				"privateSaleCurrentStep",
				String(privateSaleCurrentStep)
			);
		}

		if (privateSaleName) {
			localStorage.setItem("privateSaleName", privateSaleName);
		}

		if (privateSaleSelectedCurrency) {
			localStorage.setItem(
				"privateSaleSelectedCurrency",
				privateSaleSelectedCurrency
			);
		}

		if (privateSaleSoftcap) {
			localStorage.setItem(
				"privateSaleSoftcap",
				String(privateSaleSoftcap)
			);
		}

		if (privateSaleHardcap) {
			localStorage.setItem(
				"privateSaleHardcap",
				String(privateSaleHardcap)
			);
		}

		if (privateSaleMinBuy) {
			localStorage.setItem(
				"privateSaleMinBuy",
				String(privateSaleMinBuy)
			);
		}

		if (privateSaleMaxBuy) {
			localStorage.setItem(
				"privateSaleMaxBuy",
				String(privateSaleMaxBuy)
			);
		}

		if (privateSaleStartDate) {
			localStorage.setItem("privateSaleStartDate", privateSaleStartDate);
		}

		if (privateSaleEndDate) {
			localStorage.setItem("privateSaleEndDate", privateSaleEndDate);
		}

		if (privateSaleFirstRelease) {
			localStorage.setItem(
				"privateSaleFirstRelease",
				privateSaleFirstRelease
			);
		}

		if (privateSalePresaleToken) {
			localStorage.setItem(
				"privateSalePresaleToken",
				privateSalePresaleToken
			);
		}

		if (privateSaleFundVesting) {
			localStorage.setItem(
				"privateSaleFundVesting",
				privateSaleFundVesting
			);
		}

		if (privateSaleWebsiteURL) {
			localStorage.setItem(
				"privateSaleWebsiteURL",
				privateSaleWebsiteURL
			);
		}

		if (privateSaleFacebookURL) {
			localStorage.setItem(
				"privateSaleFacebookURL",
				privateSaleFacebookURL
			);
		}

		if (privateSaleTwitterURL) {
			localStorage.setItem(
				"privateSaleTwitterURL",
				privateSaleTwitterURL
			);
		}

		if (privateSaleTelegramURL) {
			localStorage.setItem(
				"privateSaleTelegramURL",
				privateSaleTelegramURL
			);
		}

		if (privateSaleDiscordURL) {
			localStorage.setItem(
				"privateSaleDiscordURL",
				privateSaleDiscordURL
			);
		}

		if (privateSaleInstagramURL) {
			localStorage.setItem(
				"privateSaleInstagramURL",
				privateSaleInstagramURL
			);
		}

		if (privateSaleGithubURL) {
			localStorage.setItem("privateSaleGithubURL", privateSaleGithubURL);
		}

		if (privateSaleYoutubeURL) {
			localStorage.setItem(
				"privateSaleYoutubeURL",
				privateSaleYoutubeURL
			);
		}

		if (privateSaleDescription) {
			localStorage.setItem(
				"privateSaleDescription",
				privateSaleDescription
			);
		}
	}, [
		privateSaleCurrentStep,
		privateSaleSelectedCurrency,
		privateSalePresaleToken,
		privateSaleFundVesting,
		privateSaleName,
		privateSaleStartDate,
		privateSaleEndDate,
		privateSaleHardcap,
		privateSaleSoftcap,
		privateSaleMaxBuy,
		privateSaleMinBuy,
		privateSaleDescription,
		privateSaleFirstRelease,
		privateSaleFacebookURL,
		privateSaleGithubURL,
		privateSaleTelegramURL,
		privateSaleTwitterURL,
		privateSaleInstagramURL,
		privateSaleDiscordURL,
		privateSaleWebsiteURL,
		privateSaleYoutubeURL,
	]);

	// Solilock
	useEffect(() => {
		if (solilockTokenAddress) {
			localStorage.setItem("solilockTokenAddress", solilockTokenAddress);
		}

		if (solilockAmount) {
			localStorage.setItem("solilockAmount", solilockAmount);
		}

		if (solilockLockTime) {
			localStorage.setItem("solilockLockTime", solilockLockTime);
		}

		if (solilockOwner) {
			localStorage.setItem("solilockOwner", solilockOwner);
		}

		if (solilockTGEDate) {
			localStorage.setItem("solilockTGEDate", solilockTGEDate);
		}

		if (solilockTGEPercent) {
			localStorage.setItem(
				"solilockTGEPercent",
				String(solilockTGEPercent)
			);
		}

		if (solilockCycleDays) {
			localStorage.setItem("solilockCycleDays", solilockCycleDays);
		}

		if (solilockCycleReleasePercent) {
			localStorage.setItem(
				"solilockCycleReleasePercent",
				solilockCycleReleasePercent
			);
		}
	}, [
		solilockAmount,
		solilockCycleDays,
		solilockCycleReleasePercent,
		solilockLockTime,
		solilockTGEPercent,
		solilockTGEDate,
		solilockTokenAddress,
		solilockOwner,
	]);

	// ---------------------------------------------------
	// AIRDROP
	useEffect(() => {
		if (airdropCurrentStep) {
			localStorage.setItem(
				"airdropCurrentStep",
				String(airdropCurrentStep)
			);
		}

		if (airdropTokenAddress) {
			localStorage.setItem("airdropTokenAddress", airdropTokenAddress);
		}

		if (airdropTitle) {
			localStorage.setItem("airdropTitle", airdropTitle);
		}

		if (airdropDescription) {
			localStorage.setItem("airdropDescription", airdropDescription);
		}

		if (airdropDiscordURL) {
			localStorage.setItem("airdropDiscordURL", airdropDiscordURL);
		}

		if (airdropFacebookURL) {
			localStorage.setItem("airdropFacebookURL", airdropFacebookURL);
		}

		if (airdropGithubURL) {
			localStorage.setItem("airdropGithubURL", airdropGithubURL);
		}

		if (airdropInstagramURL) {
			localStorage.setItem("airdropInstagramURL", airdropInstagramURL);
		}

		if (airdropTwitterURL) {
			localStorage.setItem("airdropTwitterURL", airdropTwitterURL);
		}

		if (airdropWebsiteURL) {
			localStorage.setItem("airdropWebsiteURL", airdropWebsiteURL);
		}

		if (airdropTelegramURL) {
			localStorage.setItem("airdropTelegramURL", airdropTelegramURL);
		}

		if (airdropYoutubeURL) {
			localStorage.setItem("airdropYoutubeURL", airdropYoutubeURL);
		}
	}, [
		airdropCurrentStep,
		airdropDescription,
		airdropDiscordURL,
		airdropFacebookURL,
		airdropGithubURL,
		airdropInstagramURL,
		airdropTelegramURL,
		airdropTitle,
		airdropTokenAddress,
		airdropWebsiteURL,
		airdropYoutubeURL,
		airdropTwitterURL,
	]);

	const value = {
		tabs,
		currencyOptions,
		selectedTab,
		error,
		nameOfToken,
		isWalletConnected,

		// MODAL
		isModalShowing,
		showModal,
		modalHeader,
		setModalHeader,
		setShowModal,
		toggleModal,
		// ------------

		// BRIDGE
		bridgeSourceChain,
		bridgeSourceChainId,
		setBridgeSourceChainId,
		bridgeSourceChains,
		bridgeDestinationChain,
		query,
		destinationChainOptions,
		sourceChainOptions,
		bridgeDestinationLogo,
		bridgeSourceLogo,
		bridgeAmountToMax,
		setBridgeAmountToMax,
		handleSearchQuery,
		setBridgeDestinationLogo,
		setBridgeSourceLogo,
		setQuery,
		setBridgeDestinationChain,
		setBridgeSourceChain,
		setBridgeSourceChains,
		// -------
		setIsWalletConnected,
		setNameOfToken,

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
		privateSaleSoftcap,
		privateSaleHardcap,
		privateSaleMinBuy,
		privateSaleMaxBuy,
		privateSaleStartDate,
		privateSaleEndDate,
		privateSaleFirstRelease,
		privateSalePresaleToken,
		privateSaleFundVesting,
		isPrivateSaleWhitelistDisabled,
		isPrivateSaleWhitelistEnabled,
		setIsPrivateSaleWhitelistEnabled,
		setIsPrivateSaleWhitelistDisabled,
		setPrivateSaleFundVesting,
		setPrivateSalePresaleToken,
		setPrivateSaleFirstRelease,
		setPrivateSaleEndDate,
		setPrivateSaleStartDate,
		setPrivateSaleMaxBuy,
		setPrivateSaleMinBuy,
		setPrivateSaleHardcap,
		setPrivateSaleSoftcap,
		setPrivateSaleCurrentStep,
		setPrivateSaleName,
		setPrivateSaleSelectedCurrency,

		privateSaleLogo,
		privateSaleWebsiteURL,
		privateSaleTelegramURL,
		privateSaleTwitterURL,
		privateSaleDiscordURL,
		privateSaleInstagramURL,
		privateSaleGithubURL,
		privateSaleFacebookURL,
		privateSaleYoutubeURL,
		privateSaleDescription,
		isPrivateSaleSpendingApproved,
		setIsPrivateSaleSpendingApproved,
		setPrivateSaleDescription,
		setPrivateSaleYoutubeURL,
		setPrivateSaleFacebookURL,
		setPrivateSaleGithubURL,
		setPrivateSaleInstagramURL,
		setPrivateSaleDiscordURL,
		setPrivateSaleTwitterURL,
		setPrivateSaleTelegramURL,
		setPrivateSaleWebsiteURL,
		setPrivateSaleLogo,
		handlePrivateSaleNextStep,
		handlePrivateSalePreviousStep,

		// SOLILOCK
		solilockAmount,
		solilockLockTime,
		solilockTokenAddress,
		solilockOwner,
		solilockTGEDate,
		solilockTGEPercent,
		solilockCycleDays,
		solilockCycleReleasePercent,
		solilockAnotherUserUsed,
		solilockVestingUsed,
		setSolilockVestingUsed,
		setSolilockAnotherUserUsed,
		setSolilockCycleReleasePercent,
		setSolilockCycleDays,
		setSolilockTGEPercent,
		setSolilockTGEDate,
		setSolilockOwner,
		setSolilockAmount,
		setSolilockLockTime,
		setSolilockTokenAddress,

		// AIRDROP
		airdropCurrentStep,
		airdropTokenAddress,
		airdropDescription,
		airdropDiscordURL,
		airdropFacebookURL,
		airdropGithubURL,
		airdropInstagramURL,
		airdropTitle,
		airdropTwitterURL,
		airdropWebsiteURL,
		airdropTelegramURL,
		airdropYoutubeURL,
		setAirdropCurrentStep,
		setAirdropTokenAddress,
		setAirdropTitle,
		setAirdropWebsiteURL,
		setAirdropTelegramURL,
		setAirdropTwitterURL,
		setAirdropDiscordURL,
		setAirdropInstagramURL,
		setAirdropGithubURL,
		setAirdropFacebookURL,
		setAirdropYoutubeURL,
		setAirdropDescription,
	};
	return (
		<LaunchpadContext.Provider value={value}>
			{children}
		</LaunchpadContext.Provider>
	);
}

export const GlobalContext = () => useContext(LaunchpadContext);
