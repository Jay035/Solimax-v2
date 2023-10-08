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
  isPresaleFeeOptionTwoChecked?: boolean ;
  presaleRate?:  string | number;
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
  isPresaleSpendingApproved?: boolean ;
  presaleLogo?: File | null ;
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
  isFairlaunchSpendingApproved?: boolean;
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
  setIsFairlaunchSpendingApproved?: (x: boolean) => void;

  handleFairlaunchPreviousStep?: (x: string | number) => void;
  handleFairlaunchNextStep?: (x: string | number) => void;

  // PRIVATE SALE
  privateSaleCurrentStep: number;
  privateSaleName?: string;
  privateSaleSelectedCurrency?: string;
  setPrivateSaleName?: (x: string) => void;
  setPrivateSaleCurrentStep?: (step: any) => void;
  setPrivateSaleSelectedCurrency?: (currency: string) => void;
  handlePrivateSalePreviousStep?: (x: string | number) => void;
  handlePrivateSaleNextStep?: (x: string | number) => void;

  // SOLILOCK
  solilockTokenAddress?: string;
  solilockLockTime?: string;
  solilockAmount?: number | string;
  setSolilockTokenAddress?: (x: string) => void;
  setSolilockLockTime?: (x: string) => void;
  setSolilockAmount?: (x: any) => void;

  // AIRDROP
  airdropTokenAddress?: string;
  airdropCurrentStep: number;
  setAirdropTokenAddress?: (address: string) => void;
  setAirdropCurrentStep?: (step: number) => void;
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
