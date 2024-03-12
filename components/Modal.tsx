"use client";
import { ModalProps } from "@/types";
import { GlobalContext } from "@/context/Context";
import { ReactNode } from "react";
import CustomInput from "./CustomInput";
import useDeployTokenMutation from "@/hooks/useContractMutations/useDeployToken";
import { toast } from "react-toastify";


type Props = {
  children: ReactNode;
};

// export default function CreateTokenModal() {
//   // {children} : Props
//   const {
//     error,
//     setError,
//     nameOfToken,
//     setNameOfToken,
//     isModalShowing,
//     setIsModalShowing,
//   } = GlobalContext();
//   const [selectedTokenType, setSelectedTokenType] =
//     useState<string>("Standard token");
//   const [symbol, setSymbol] = useState<string>("");
//   const [decimals, setDecimals] = useState<number>();
//   const [tokenSupply, setTokenSupply] = useState<number>();
//   const deployFn = useDeployTokenMutation();
//   const tokenTypes = [
//     {
//       id: 0,
//       value: "Standard token",
//     },
//     {
//       id: 1,
//       value: "Standard token",
//     },
//     {
//       id: 2,
//       value: "Standard token",
//     },
//   ];

//   if (!isModalShowing) return null;

//   return (
//     <main
//       id="modal"
//       className="bg-[#3F3F46]/50 w-full absolute flex min-h-screen justify-center items-center z-[9999999999]"
//     >
//       {/* modal */}
//       <div className="bg-[#1D1C20] rounded-[0.625rem] p-6 xl:p-8 pt-10 w-[90%] md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
//         <section className="text-white pb-[1.5rem] flex justify-between items-center border-b border-[#26272b]">
//           <h1 className="tracking-[-0.015rem] text-xl md:text-2xl">
//             Create token
//           </h1>
//           <i
//             onClick={() => {
//               toggleModal();
//               document.body.style.overflow = "unset";
//             }}
//             className="ri-close-line text-white mr-[2.13rem] cursor-pointer text-2xl md:text-3xl font-medium"
//           ></i>

//         </section>
//         <div className="mt-[1.62rem]">
//           <p className="mb-6 text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
//             <span className="text-[#F04438]">(*) </span>is required field
//           </p>
//           {error && (
//             <p className="text-[#F04438] mt-4 text-sm sm:text-base">{error}</p>
//           )}
//         </div>
//         <form className="flex flex-col gap-6">
//           {/* TOKEN TYPE */}
//           <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
//             <p>
//               Token type<span className="text-[#F04438]">*</span>
//             </p>
//             <CustomSelect
//               options={tokenTypes}
//               header={selectedTokenType}
//               setHeader={setSelectedTokenType}
//             />
//             {/* create pool fee */}
//             <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
//               Create token fee: <span className="text-[#F3CE92]">0.2 BNB</span>
//             </p>
//           </div>

//           {/* Name of token */}
//           <CustomInput
//             id="nameOfToken"
//             className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
//             inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
//             label="Name of token"
//             type="text"
//             placeholder="Eg. Optimism"
//             value={nameOfToken}
//             onChange={(e) => {
//               setNameOfToken?.(e.target.value);
//               setError?.("");
//             }}
//             isRequired={true}
//           />
//           {/* Symbol */}
//           <CustomInput
//             id="symbol"
//             className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
//             inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
//             label="Symbol"
//             type="text"
//             placeholder="Eg. OP"
//             value={symbol}
//             onChange={(e) => {
//               setSymbol?.(e.target.value);
//               setError?.("");
//             }}
//             isRequired={true}
//           />
//           {/* Decimals */}
//           <CustomInput
//             id="decimals"
//             className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
//             inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
//             label="Decimals"
//             type="number"
//             placeholder="Eg. 18"
//             value={decimals}
//             onChange={(e) => {
//               setDecimals?.(e.target.value);
//               setError?.("");
//             }}
//             isRequired={true}
//           />
//           {/* Token Supply */}
//           <CustomInput
//             id="tokenSupply"
//             className="flex flex-col gap-[0.62rem] text-[#E4E4E7]"
//             inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
//             label="Token Supply"
//             type="number"
//             placeholder="Eg. 1000000000"
//             value={tokenSupply}
//             onChange={(e) => {
//               setTokenSupply?.(e.target.value);
//               setError?.("");
//             }}
//             isRequired={true}
//           />
//           <div className="flex gap-2 md:items-center ml-auto w-fit">
//             <button
//               onClick={() => {
//                 setIsModalShowing?.(false);
//                 document.body.style.overflow = "unset";
//               }}
//               className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
//             >
//               Back
//             </button>
//             <button
//               onClick={(e: any) => {
//                 toast.success("clicked");
//                 e.preventDefault();

//                 const deployProps: any = {
//                   nameOfToken,
//                   symbol,
//                   totalSupply: Number(tokenSupply),
//                 };
//                 console.log(deployProps);
//                 deployFn.mutate(deployProps);
//                 console.log(deployFn.error);
//               }}
//               className="bg-[#C38CC3] disabled:bg-[#C38CC3]/80 hover:bg-[#C38CC3]/80 w-[10.625rem] ml-auto text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
//             >
//               {deployFn?.isLoading ? "Loading" : "Create token"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }

export default function Modal({ children, modalHeader }: ModalProps) {
  const { showModal, toggleModal } = GlobalContext();

  return (
    <main
      id="modal"
      className={`${
        showModal ? "block" : "hidden"
      } bg-[#18181b]/50 backdrop-blur-[1px] w-full fixed top-0 left-0 h-full flex min-h-screen justify-center items-center z-[9999999999]`}
    >
      {/* modal */}
      <div className="bg-[#1D1C20] rounded-[0.625rem] p-6 xl:p-8 pt-10 w-[90%] md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
        <div className="flex justify-between text-white">
          <h1 className="tracking-[-0.015rem] text-xl md:text-2xl">
            {modalHeader}
          </h1>
          <i
            onClick={() => {
              toggleModal?.();
              document.body.style.overflow = "unset";
            }}
            className="ri-close-line text-white mr-[2.13rem] cursor-pointer text-2xl md:text-3xl font-medium"
          ></i>
        </div>

        {children}
      </div>
    </main>
  );
}
