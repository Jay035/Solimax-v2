import { isAddress } from "ethers";

type Props = {
  address: string;
};

export default function VerifyAddress(address: string) {
  let verificationStatus = isAddress(address);
  // setIsAddressVerified(verificationStatus);
  console.log(verificationStatus);
  return verificationStatus;
}
