import { isAddress } from "ethers";

export default function VerifyAddress(address: string) {
  let verificationStatus = isAddress(address);
  return verificationStatus;
}
