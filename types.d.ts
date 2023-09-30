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
  // currentStep: number;
  tokenAddress?: string;
  softcap?: number;
  hardcap?: number;
  minBuy?: number;
  maxBuy?: number;
  listingRate?: number;
  refundType?: string;
  liquidity?: number;
  selectedCurrency?: string;
  router?: string;
  options?: any[];
  error?: string;
  tabs?: any;
  selectedTab?: string;
  startDate?: string;
  endDate?: string;
  liquidityLockup?: string;
  vestingPeriod?: string;
  firstRelease?: string;
  websiteURL?: string;
  twitterURL?: string;
  telegramURL?: string;
  discordURL?: string;
  instagramURL?: string;
  githubURL?: string;
  facebookURL?: string;
  youtubeURL?: string;
  description?: string;
  totalSellingAmount?: string;
  isModalShowing?: boolean;
  nameOfToken?: string;

  // PRESALE
  presaleCurrentStep: number;
  presaleTokenAddress?: string;
  presaleSelectedCurrency?: string;
  isPresaleFeeOptionOneChecked?: boolean;
  isPresaleFeeOptionTwoChecked?: boolean;
  presaleRate?: number;
  presaleToken?: string | number;
  presaleSoftcap?: number;
  presaleHardcap?: number;
  presaleMinBuy?: number;
  presaleMaxBuy?: number;
  presaleRouter?: string;
  presaleRefundType?: string;
  presaleLiquidity?: number;
  presaleListingRate?: number;
  presaleStartDate?: string;
  presaleEndDate?: string;
  presaleLiquidityLockup?: string;
  presaleFirstRelease?: string;
  presaleVestingPeriod?: string;
  isPresaleWhitelistDisabled?: boolean;
  isPresaleWhitelistEnabled?: boolean;
  isPresaleVestingContributionChecked?: boolean;
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
  setPresaleSoftcap?: (x: number) => void;
  setPresaleHardcap?: (x: number) => void;
  setPresaleMinBuy?: (x: number) => void;
  setPresaleMaxBuy?: (x: number) => void;
  setPresaleTokenAddress?: (x: string) => void;
  setPresaleToken?: (x: any) => void;
  setNameOfToken?: (x: string) => void;
  setIsModalShowing?: (x: any) => void;
  setTotalSellingAmount?: (x: string) => void;
  setDescription?: (x: string) => void;
  setYoutubeURL?: (x: string) => void;
  setFacebookURL?: (x: string) => void;
  setGithubURL?: (x: string) => void;
  setInstagramURL?: (x: string) => void;
  setDiscordURL?: (x: string) => void;
  setTelegramURL?: (x: string) => void;
  setTwitterURL?: (x: string) => void;
  setWebsiteURL?: (x: string) => void;
  setFirstRelease?: (x: string) => void;
  setVestingPeriod?: (x: string) => void;
  handlePresalePreviousStep?: (x: string | number) => void;
  handlePresaleNextStep?: (x: string | number) => void;
  setPresaleCurrentStep?: (step: any) => void;
  setIsPresaleFeeOptionTwoChecked?: (x: boolean) => void;
  setIsPresaleFeeOptionOneChecked?: (x: boolean) => void;
  setPresaleSelectedCurrency?: (currency: string) => void;

  setLiquidityLockup?: (x: string) => void;
  setEndDate?: (x: string) => void;
  setStartDate?: (x: string) => void;
  setSelectedTab?: (x: string) => void;
  setRouter?: (x: string) => void;
  setSoftcap?: (x: number) => void;
  setMinBuy?: (x: number) => void;
  setHardcap?: (x: number) => void;
  setMaxBuy?: (x: number) => void;
  setRefundType?: (x: string) => void;
  setLiquidity?: (x: number) => void;
  setListingRate?: (x: any) => void;
  setError?: (err: string) => void;
  setTokenAddress?: (address: string) => void;
  setPresaleRate?: (rate: number) => void;
  setSelectedCurrency?: (currency: string) => void;
  setCurrentStep?: (step: number) => void;

  // FAIRLAUNCH
  fairlaunchCurrentStep: number;
  fairlaunchTokenAddress?: string;
  fairlaunchSelectedCurrency?: string;
  setFairlaunchTokenAddress?: (x: string) => void;
  setFairlaunchCurrentStep?: (step: any) => void;
  setFairlaunchSelectedCurrency?: (currency: string) => void;
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
