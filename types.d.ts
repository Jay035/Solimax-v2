type SelectProps = {
  value: string;
  label: string;
  onSelect: (e: string) => void;
};

type FormProps = {
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
  setRouter?: (x: string) => void;
  setSoftcap?: (x: number) => void;
  setMinBuy?: (x: number) => void;
  setHardcap?: (x: number) => void;
  setMaxBuy?: (x: number) => void;
  setRefundType?: (x: string) => void;
  setLiquidity?: (x: number) => void;
  setListingRate?: (x: number) => void;
  setError: (err: string) => void;
  setTokenAddress?: (address: string) => void;
  setPresaleRate?: (rate: number) => void;
  setSelectedCurrency?: (address: string) => void;
  setCurrentStep: (step: number) => void;
};
