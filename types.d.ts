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
  currentStep: number;
  tokenAddress?: string;
  presaleRate?: number;
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
  presaleToken?: string;
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
  setPresaleToken?: (x: string) => void;
  handlePreviousStep?: (x: string) => void;
  handleNextStep?: (x: string) => void;
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
  setListingRate?: (x: number) => void;
  setError?: (err: string) => void;
  setTokenAddress?: (address: string) => void;
  setPresaleRate?: (rate: number) => void;
  setSelectedCurrency?: (address: string) => void;
  setCurrentStep?: (step: number) => void;
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
}