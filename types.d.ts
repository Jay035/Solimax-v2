type SelectProps = {
	value: string;
	label: string;
	onSelect: (e: string) => void;
};

interface AccordionProps {
	title: string;
	titleImg: string;
	children: any;
}

interface FormProps {
	currencyOptions?: any;
	options?: any[];
	error?: string;
	tabs?: any;
	selectedTab?: string;
	nameOfToken?: string;
	isModalShowing?: boolean;
	setIsModalShowing?: (x: boolean) => void;
	setNameOfToken?: (x: string) => void;
	setSelectedTab?: (x: string) => void;
	setError?: (x: string) => void;

	// PRESALE
	// --------------------------
	// Step One
	presaleCurrentStep: number;
	presaleTokenAddress?: string;
	presaleSelectedCurrency?: string;
	isPresaleFeeOptionOneChecked?: boolean;
	isPresaleFeeOptionTwoChecked?: boolean;
	presaleRate?: string | number;
	presaleToken?: string | number;
	presaleSoftcap?: string | number;
	presaleHardcap?: string | number;
	presaleMinBuy?: string | number;
	presaleMaxBuy?: string | number;
	presaleRouter?: string;
	presaleRefundType?: string;
	presaleLiquidity?: string | number;
	presaleListingRate?: string | number;
	presaleStartDate?: string;
	presaleEndDate?: string;
	presaleLiquidityLockup?: string;
	presaleFirstRelease?: string;
	presaleVestingPeriod?: string;
	isPresaleWhitelistDisabled?: boolean;
	isPresaleWhitelistEnabled?: boolean;
	isPresaleVestingContributionChecked?: boolean;
	isPresaleSpendingApproved?: boolean;
	presaleLogo?: File | null;
	presaleWebsiteURL?: string;
	presaleYoutubeURL?: string;
	presaleTelegramURL?: string;
	presaleTwitterURL?: string;
	presaleDescription?: string;
	presaleGithubURL?: string;
	presaleDiscordURL?: string;
	presaleFacebookURL?: string;
	presaleInstagramURL?: string;

	setPresaleInstagramURL?: (x: string) => void;
	setPresaleDiscordURL?: (x: string) => void;
	setPresaleGithubURL?: (x: string) => void;
	setPresaleFacebookURL?: (x: string) => void;
	setPresaleDescription?: (x: string) => void;
	setPresaleTwitterURL?: (x: string) => void;
	setPresaleTelegramURL?: (x: string) => void;
	setPresaleYoutubeURL?: (x: string) => void;
	setPresaleWebsiteURL?: (x: string) => void;
	setIsPresaleVestingContributionChecked?: (x: boolean) => void;
	setIsPresaleWhitelistEnabled?: (x: boolean) => void;
	setIsPresaleWhitelistDisabled?: (x: boolean) => void;
	setPresaleFirstRelease?: (x: string) => void;
	setPresaleVestingPeriod?: (x: string) => void;
	setPresaleLiquidityLockup?: (x: string) => void;
	setPresaleEndDate?: (x: string) => void;
	setPresaleStartDate?: (x: string) => void;
	setPresaleListingRate?: (x: any) => void;
	setPresaleLiquidity?: (x: any) => void;
	setPresaleRefundType?: (x: string) => void;
	setPresaleRouter?: (x: string) => void;
	setPresaleSoftcap?: (x: any) => void;
	setPresaleHardcap?: (x: any) => void;
	setPresaleMinBuy?: (x: number) => void;
	setPresaleMaxBuy?: (x: number) => void;
	setPresaleTokenAddress?: (x: string) => void;
	setPresaleToken?: (x: any) => void;
	setPresaleRate?: (rate: number) => void;
	setPresaleLogo?: (logo: File | undefined) => void;
	setIsPresaleSpendingApproved?: (x: boolean) => void;
	handlePresalePreviousStep?: (x: string | number) => void;
	handlePresaleNextStep?: (x: string | number) => void;
	setPresaleCurrentStep?: (step: any) => void;
	setIsPresaleFeeOptionTwoChecked?: (x: boolean) => void;
	setIsPresaleFeeOptionOneChecked?: (x: boolean) => void;
	setPresaleSelectedCurrency?: (currency: string) => void;

	// -------------------------------------------
	// FAIRLAUNCH
	fairlaunchCurrentStep: number;
	fairlaunchTokenAddress?: string;
	fairlaunchSelectedCurrency?: string;
	isFairlaunchFeeOptionOneChecked?: boolean;
	isFairlaunchFeeOptionTwoChecked?: boolean;
	setFairlaunchTokenAddress?: (x: string) => void;
	setFairlaunchCurrentStep?: (step: any) => void;
	setFairlaunchSelectedCurrency?: (currency: string) => void;
	setIsFairlaunchFeeOptionOneChecked?: (x: boolean) => void;
	setIsFairlaunchFeeOptionTwoChecked?: (x: boolean) => void;

	// Step Two
	fairlaunchTotalSellingAmount?: number;
	fairlaunchSoftcap?: number;
	fairlaunchRouter?: string;
	fairlaunchStartDate?: string;
	fairlaunchEndDate?: string;
	fairlaunchBuyBackPercent?: number;
	fairlaunchLiquidity?: number;
	fairlaunchLiquidityLockup?: number;
	fairlaunchMaxContribution?: number;
	isFairlaunchWhitelistDisabled?: boolean;
	isFairlaunchWhitelistEnabled?: boolean;
	isFairlaunchMaxContributionChecked?: boolean;
	isFairlaunchBuyBackChecked?: boolean;
	setIsFairlaunchBuyBackChecked?: (x: boolean) => void;
	setIsFairlaunchMaxContributionChecked?: (x: boolean) => void;
	setFairlaunchMaxContribution?: (x: number) => void;
	setFairlaunchBuyBackPercent?: (x: number) => void;
	setFairlaunchTotalSellingAmount?: (x: number) => void;
	setFairlaunchSoftcap?: (x: number) => void;
	setFairlaunchBuyBackPercent?: (x: string) => void;
	setFairlaunchBuyBackPercent?: (x: string) => void;
	setFairlaunchRouter?: (x: string) => void;
	setFairlaunchStartDate?: (x: string) => void;
	setFairlaunchEndDate?: (x: string) => void;
	setFairlaunchLiquidity?: (x: number) => void;
	setFairlaunchLiquidityLockup?: (x: number) => void;
	setIsFairlaunchWhitelistDisabled?: (x: boolean) => void;
	setIsFairlaunchWhitelistEnabled?: (x: boolean) => void;

	// Step Three
	fairlaunchLogo?: File | undefined;
	fairlaunchWebsiteURL?: string;
	fairlaunchYoutubeURL?: string;
	fairlaunchTelegramURL?: string;
	fairlaunchTwitterURL?: string;
	fairlaunchDescription?: string;
	fairlaunchGithubURL?: string;
	fairlaunchDiscordURL?: string;
	fairlaunchFacebookURL?: string;
	fairlaunchInstagramURL?: string;
	setFairlaunchInstagramURL?: (x: string) => void;
	setFairlaunchDiscordURL?: (x: string) => void;
	setFairlaunchGithubURL?: (x: string) => void;
	setFairlaunchFacebookURL?: (x: string) => void;
	setFairlaunchDescription?: (x: string) => void;
	setFairlaunchTwitterURL?: (x: string) => void;
	setFairlaunchTelegramURL?: (x: string) => void;
	setFairlaunchYoutubeURL?: (x: string) => void;
	setFairlaunchWebsiteURL?: (x: string) => void;
	setFairlaunchLogo?: (x: File | undefined) => void;
	handleFairlaunchPreviousStep?: (x: string | number) => void;
	handleFairlaunchNextStep?: (x: string | number) => void;
	isFairlaunchSpendingApproved?: boolean;
	setIsFairlaunchSpendingApproved?: (x: boolean) => void;

	// PRIVATE SALE
	privateSaleCurrentStep: number;
	privateSaleName?: string;
	privateSaleSelectedCurrency?: string;
	privateSaleSoftcap?: number;
	privateSaleHardcap?: number;
	privateSaleMinBuy?: number;
	privateSaleMaxBuy?: number;
	privateSaleStartDate?: string;
	privateSaleEndDate?: string;
	privateSaleFirstRelease?: string;
	privateSalePresaleToken?: string;
	privateSaleFundVesting?: string;
	isPrivateSaleWhitelistDisabled?: boolean;
	isPrivateSaleWhitelistEnabled?: boolean;
	setPrivateSaleFundVesting?: (x: string) => void;
	setPrivateSalePresaleToken?: (x: string) => void;
	setPrivateSaleFirstRelease?: (x: string) => void;
	setPrivateSaleEndDate?: (x: string) => void;
	setPrivateSaleStartDate?: (x: string) => void;
	setPrivateSaleMaxBuy?: (x: number) => void;
	setPrivateSaleMinBuy?: (x: number) => void;
	setPrivateSaleHardcap?: (x: number) => void;
	setPrivateSaleSoftcap?: (x: number) => void;
	setPrivateSaleName?: (x: string) => void;
	setPrivateSaleCurrentStep?: (step: any) => void;
	setPrivateSaleSelectedCurrency?: (currency: string) => void;
	setIsPrivateSaleWhitelistDisabled?: (x: boolean) => void;
	setIsPrivateSaleWhitelistEnabled?: (x: boolean) => void;

	handlePrivateSalePreviousStep?: (x: string | number) => void;
	handlePrivateSaleNextStep?: (x: string | number) => void;

	// Step Three
	privateSaleLogo?: File | undefined;
	privateSaleWebsiteURL?: string;
	privateSaleYoutubeURL?: string;
	privateSaleTelegramURL?: string;
	privateSaleTwitterURL?: string;
	privateSaleDescription?: string;
	privateSaleGithubURL?: string;
	privateSaleDiscordURL?: string;
	privateSaleFacebookURL?: string;
	privateSaleInstagramURL?: string;
	setPrivateSaleInstagramURL?: (x: string) => void;
	setPrivateSaleDiscordURL?: (x: string) => void;
	setPrivateSaleGithubURL?: (x: string) => void;
	setPrivateSaleFacebookURL?: (x: string) => void;
	setPrivateSaleDescription?: (x: string) => void;
	setPrivateSaleTwitterURL?: (x: string) => void;
	setPrivateSaleTelegramURL?: (x: string) => void;
	setPrivateSaleYoutubeURL?: (x: string) => void;
	setPrivateSaleWebsiteURL?: (x: string) => void;
	setPrivateSaleLogo?: (x: File | undefined) => void;
	isPrivateSaleSpendingApproved?: boolean;
	setIsPrivateSaleSpendingApproved?: (x: boolean) => void;

	// SOLILOCK
	solilockTokenAddress?: string;
	solilockLockTime?: string;
	solilockOwner?: string;
	solilockTGEDate?: string;
	solilockAmount?: number | string;
	solilockTGEPercent?: number | string;
	solilockVestingUsed?: boolean;
	solilockCycleDays?: string;
	solilockCycleReleasePercent?: string;
	solilockAnotherUserUsed?: boolean;
	setSolilockTGEPercent?: (x: number) => void;
	setSolilockVestingUsed?: (x: boolean) => void;
	setSolilockAnotherUserUsed?: (x: boolean) => void;
	setSolilockCycleDays?: (x: string) => void;
	setSolilockCycleReleasePercent?: (x: string) => void;
	setSolilockTGEDate?: (x: string) => void;
	setSolilockOwner?: (x: string) => void;
	setSolilockTokenAddress?: (x: string) => void;
	setSolilockLockTime?: (x: string) => void;
	setSolilockAmount?: (x: any) => void;

	// AIRDROP
	airdropTokenAddress?: string;
	airdropCurrentStep: number;
	airdropTitle?: string;
	airdropLogo?: File | undefined;
	airdropWebsiteURL?: string;
	airdropYoutubeURL?: string;
	airdropTelegramURL?: string;
	airdropTwitterURL?: string;
	airdropDescription?: string;
	airdropGithubURL?: string;
	airdropDiscordURL?: string;
	airdropFacebookURL?: string;
	airdropInstagramURL?: string;
	setAirdropTitle?: (address: string) => void;
	setAirdropTokenAddress?: (address: string) => void;
	setAirdropCurrentStep?: (step: number) => void;
	setAirdropInstagramURL?: (x: string) => void;
	setAirdropDiscordURL?: (x: string) => void;
	setAirdropGithubURL?: (x: string) => void;
	setAirdropFacebookURL?: (x: string) => void;
	setAirdropDescription?: (x: string) => void;
	setAirdropTwitterURL?: (x: string) => void;
	setAirdropTelegramURL?: (x: string) => void;
	setAirdropYoutubeURL?: (x: string) => void;
	setAirdropWebsiteURL?: (x: string) => void;
	setAirdropLogo?: (x: File | undefined) => void;
}

type stepTitleProps = {
	id: string;
	tag: number;
	title: string;
	description: string;
	completed: boolean;
};

type ButtonProps = {
	id: string;
	style: string;
	route: string;
	text: string;
};

type PoolsDataProps = {
	id: number;
	projectName: string;
	saleType: string;
	price: number;
	minBuy: number;
	maxBuy: number;
	totalSupply: number;
	dateOfCompletion: string;
};

type createLockProps = {
	tokenAddress: string;
	name: string;
	withdrawer: string;
	amount: string;
	withdrawTime: string;
};
