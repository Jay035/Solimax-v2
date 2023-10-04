import { Metadata } from "next";
import Image from "next/image";
import img2 from "../../../../public/icons/icon-2.svg";
import banner from "../../../../public/images/detail banner.png";
import Details from "./components/Details";
import Link from "next/link";
import RedirectButton from "@/components/RedirectButton";

// export async function generateMetadata({
//     params: { id },
//   }: any): Promise<Metadata> {
//     // const hospitalData = getHospital(id);
//     // const hospital = await hospitalData;

//     return {
//     //   title: hospital?.name,
//       description: ``,
//     };
//   }

export default function page({ params }: { params: { title: string } }) {
  return (
    <section className="text-white pt-6 pb-20 px-[1.67rem] md:pr-10 xl:border-t xl:border-[#424242]">
      <div className="flex justify-between flex-col md:flex-row md:items-center mb-9">
        <RedirectButton route="" />
        <div className="flex items-center gap-2 text-white">
          <Image
            width={44}
            height={44}
            className="cursor-pointer"
            // onClick={() => setIsAddedToFavorites((prevState) => !prevState)}
            src="/icons/heart-filled.svg"
            alt="heart icon"
          />
          {/* status */}
          <p className="p-[0.72294rem] text-[1.01rem] rounded-[0.72294rem] bg-[#a4d0f2]/[0.05]">
            Upcoming | sales starts in{" "}
            <span className="text-[#C38CC3]">00:25:13</span>
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-[1.87rem]">
        {/* left column */}
        <section className="flex flex-col gap-6">
          {/* 1st card */}
          <div className="bg-[#1D1C20] border border-[#3F3F46] rounded-[0.65rem] px-5 py-4">
            {/* top */}
            <section className="pb-[1.12rem] mb-[1.12rem] flex flex-col gap-3 md:flex-row justify-between md:items-center border-b border-[#3F3F46]">
              {/* project name */}
              <div className="flex items-center gap-4 text-xl md:text-2xl break-words">
                <Image className="w-10 2xl:w-[4.04rem]" src={img2} alt="icon" />
                {params.title}
              </div>
              {/* social icons */}
              <div className="flex gap-4 items-center">
                {/* telegram */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1311_2881)">
                    <path
                      d="M23.6294 2.38403C23.3363 2.02551 22.8972 1.82812 22.3929 1.82812C22.1188 1.82812 21.8284 1.8858 21.5299 1.99988L1.21439 9.75494C0.136268 10.1664 -0.00893449 10.7838 0.000403878 11.1152C0.00974224 11.4467 0.189735 12.0549 1.28947 12.4048C1.29606 12.4069 1.30265 12.4089 1.30924 12.4107L5.52323 13.6166L7.80216 20.1334C8.11289 21.0218 8.81034 21.5737 9.62259 21.5737C10.1347 21.5737 10.6385 21.3591 11.0794 20.9533L13.6859 18.5533L17.4665 21.5975C17.4668 21.5978 17.4674 21.598 17.4677 21.5984L17.5036 21.6273C17.5069 21.6299 17.5104 21.6326 17.5137 21.6352C17.9339 21.9611 18.3926 22.1332 18.8407 22.1334H18.8409C19.7163 22.1334 20.4134 21.4854 20.6164 20.4827L23.9451 4.04645C24.0788 3.38672 23.9667 2.79639 23.6294 2.38403ZM6.93296 13.3876L15.063 9.23419L10.0007 14.6133C9.91776 14.7014 9.85898 14.8092 9.83005 14.9266L8.85392 18.8805L6.93296 13.3876ZM10.1267 19.9188C10.093 19.9497 10.0591 19.9774 10.0252 20.0028L10.9309 16.3348L12.5783 17.6614L10.1267 19.9188ZM22.5669 3.76721L19.2382 20.2037C19.2061 20.361 19.1038 20.727 18.8407 20.727C18.7107 20.727 18.5473 20.6561 18.3802 20.5274L14.0962 17.0781C14.0957 17.0775 14.0949 17.077 14.0942 17.0766L11.5452 15.024L18.8659 7.24512C19.1003 6.99609 19.1216 6.61468 18.9163 6.34112C18.7108 6.06756 18.3386 5.9815 18.0341 6.13714L5.99344 12.2884L1.72214 11.0663L22.0315 3.31366C22.203 3.24811 22.3228 3.23437 22.3929 3.23437C22.4359 3.23437 22.5125 3.2395 22.5409 3.27447C22.5782 3.32007 22.6258 3.47552 22.5669 3.76721Z"
                      fill="#A4D0F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1311_2881">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {/* twitter */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1311_2885)">
                    <path
                      d="M23.894 5.13461C23.7521 4.9038 23.4924 4.77297 23.2221 4.7964L22.0254 4.90065L23.1693 2.59473C23.3055 2.32009 23.2517 1.9892 23.0355 1.77184C22.8193 1.55448 22.4887 1.49907 22.2134 1.63388L19.1859 3.11659C17.3154 2.12912 14.9786 2.42223 13.3705 3.88703C12.0285 5.10953 11.3231 6.98955 11.4546 8.86437C7.94701 8.5128 4.97794 6.5051 3.22228 3.26106C3.10579 3.04585 2.8874 2.90509 2.64332 2.88779C2.39878 2.87078 2.16318 2.97915 2.01759 3.17589C0.92868 4.64692 0.852274 6.66386 1.70592 8.32319C1.4706 8.26375 1.2202 8.18332 0.942508 8.09055C0.704617 8.011 0.442351 8.06196 0.251429 8.22471C0.0605067 8.38746 -0.0312747 8.63829 0.00955352 8.88583C0.347335 10.9337 1.54153 12.5076 3.42797 13.4392C3.18234 13.5247 2.9317 13.5942 2.67684 13.6473C2.42362 13.7001 2.21859 13.8853 2.14054 14.132C2.06249 14.3785 2.12353 14.648 2.30025 14.8369C3.65873 16.289 5.62111 17.0037 7.01499 17.3466C5.43014 18.5877 3.71934 18.7954 1.23337 18.71C0.945602 18.7013 0.680477 18.8634 0.559492 19.1242C0.438554 19.3852 0.485476 19.6931 0.678742 19.9062C1.71506 21.0485 5.49066 22.3365 9.45967 22.4331C9.61665 22.4369 9.77678 22.4389 9.94028 22.4389C12.727 22.4389 16.4101 21.8415 19.0537 19.1979C21.0546 17.197 22.3062 14.8935 22.7735 12.3516C23.1509 10.2986 22.9124 8.65465 22.7978 7.86452C22.7893 7.80644 22.7803 7.7448 22.773 7.69089L23.8925 5.88667C24.0352 5.65652 24.0359 5.36542 23.894 5.13461ZM21.3812 8.07002C21.5936 9.53365 22.2397 13.9875 18.0416 18.1857C15.6012 20.626 12.0468 21.0642 9.49445 21.0022C7.31658 20.9492 5.36855 20.5327 3.95667 20.0576C4.52991 19.9873 5.04075 19.8788 5.52295 19.729C6.85229 19.3158 7.97532 18.5723 9.0571 17.3892C9.23743 17.192 9.29284 16.9108 9.20092 16.66C9.10899 16.4091 8.88493 16.2303 8.6199 16.1964C7.93744 16.1089 5.88685 15.7637 4.27209 14.6499C4.73742 14.4596 5.1862 14.2214 5.61474 13.9371C5.84981 13.7811 5.97141 13.5017 5.9251 13.2234C5.87883 12.9451 5.67347 12.7199 5.40056 12.6484C4.07892 12.3019 2.48386 11.5265 1.74834 9.79577C2.21803 9.87809 2.72873 9.89801 3.27342 9.7759C3.52589 9.71937 3.7282 9.53093 3.80245 9.28305C3.87675 9.03518 3.8115 8.76649 3.63178 8.5804C2.71659 7.63249 2.37435 6.26645 2.66798 5.09753C3.62958 6.50289 4.84781 7.68564 6.24357 8.5601C8.02909 9.67877 10.1131 10.297 12.2703 10.3478C12.4898 10.3524 12.7004 10.2566 12.8402 10.0865C12.9798 9.91652 13.0336 9.69166 12.9858 9.47683C12.6146 7.80832 13.144 6.02959 14.3344 4.94523C15.5691 3.82046 17.3939 3.64984 18.7719 4.53058C18.9823 4.66506 19.2478 4.68011 19.4721 4.57023L20.9506 3.84611L20.1768 5.40616C20.0618 5.63795 20.0809 5.91377 20.2267 6.12747C20.3725 6.34117 20.6219 6.45981 20.88 6.43717L21.9226 6.34638L21.4423 7.12052C21.2811 7.38035 21.3146 7.61088 21.3812 8.07002Z"
                      fill="#A4D0F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1311_2885">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {/* discord */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1311_2889)">
                    <path
                      d="M8.67711 9.52234C7.28928 9.52234 6.16016 10.7663 6.16016 12.2952C6.16016 13.8242 7.28928 15.0681 8.67711 15.0681C10.065 15.0681 11.1942 13.8242 11.1942 12.2952C11.1942 10.7663 10.065 9.52234 8.67711 9.52234ZM8.67711 13.6619C8.06469 13.6619 7.56641 13.0488 7.56641 12.2952C7.56641 11.5417 8.06469 10.9286 8.67711 10.9286C9.28958 10.9286 9.78791 11.5417 9.78791 12.2952C9.78791 13.0488 9.28958 13.6619 8.67711 13.6619Z"
                      fill="#A4D0F2"
                    />
                    <path
                      d="M15.3217 9.52234C13.9339 9.52234 12.8047 10.7663 12.8047 12.2952C12.8047 13.8242 13.9339 15.0681 15.3217 15.0681C16.7096 15.0681 17.8387 13.8242 17.8387 12.2952C17.8387 10.7663 16.7096 9.52234 15.3217 9.52234ZM15.3217 13.6619C14.7093 13.6619 14.2109 13.0488 14.2109 12.2952C14.2109 11.5417 14.7093 10.9286 15.3217 10.9286C15.9342 10.9286 16.4324 11.5417 16.4324 12.2952C16.4324 13.0488 15.9342 13.6619 15.3217 13.6619Z"
                      fill="#A4D0F2"
                    />
                    <path
                      d="M23.9989 16.9958C23.9823 16.6985 23.5619 9.66653 20.8915 5.46001C20.8369 5.374 20.7642 5.30082 20.6786 5.2457C17.3767 3.11949 15.1276 3.12559 15.0335 3.12521C14.7608 3.12882 14.5259 3.28745 14.4124 3.51667L13.2781 5.69045C12.8555 5.66279 12.4289 5.64845 12 5.64845C11.5712 5.64845 11.1445 5.66279 10.722 5.69045L9.58895 3.5192C9.47594 3.28867 9.2403 3.12887 8.9665 3.12526C8.87186 3.1247 6.62303 3.11973 3.32153 5.24574C3.23589 5.30092 3.16319 5.37404 3.10858 5.46006C0.438204 9.66653 0.0176883 16.6985 0.00109456 16.9958C-0.00931169 17.1822 0.0548133 17.365 0.17936 17.5041C0.303204 17.6423 3.24503 20.8749 7.3113 20.8749C7.32948 20.8749 7.34819 20.8748 7.36642 20.8747C7.58013 20.8731 7.78145 20.7745 7.91369 20.6067L9.7893 18.2265C10.5097 18.3087 11.2496 18.3516 12 18.3516C12.7505 18.3516 13.4904 18.3087 14.2107 18.2265L16.0863 20.6067C16.2186 20.7745 16.4199 20.8731 16.6336 20.8747C16.6521 20.8748 16.6703 20.8749 16.6887 20.8749C20.7546 20.8749 23.6969 17.6423 23.8207 17.5041C23.9452 17.365 24.0093 17.1822 23.9989 16.9958ZM16.9747 19.462L15.8021 17.9738C17.5871 17.6066 19.1892 16.9817 20.4398 16.1427C20.7623 15.9264 20.8483 15.4896 20.632 15.1671C20.4157 14.8446 19.9787 14.7585 19.6563 14.9749C17.7899 16.2272 14.9992 16.9453 12 16.9453C9.00095 16.9453 6.2103 16.2272 4.34369 14.9751C4.02114 14.7587 3.58441 14.8449 3.36808 15.1673C3.15175 15.4898 3.23781 15.9266 3.56031 16.1429C4.81094 16.9818 6.41303 17.6067 8.19798 17.9739L7.02541 19.4619C4.2723 19.3342 2.08136 17.4089 1.42713 16.77C1.53634 15.4076 2.10306 9.78854 4.21445 6.34412C6.28778 5.03537 7.85242 4.67139 8.55124 4.57023L9.21836 5.84856C7.64988 6.07759 6.18039 6.49848 4.92869 7.08779C4.57736 7.25317 4.42666 7.67209 4.59203 8.02346C4.75745 8.37475 5.17638 8.5254 5.52766 8.36012C7.31575 7.51829 9.61436 7.0547 12 7.0547C14.3858 7.0547 16.6845 7.51839 18.4725 8.36031C18.5693 8.40587 18.6711 8.42748 18.7715 8.42748C19.0353 8.42748 19.2883 8.27818 19.4081 8.0237C19.5735 7.67242 19.4228 7.25345 19.0715 7.08803C17.8197 6.49867 16.3503 6.07768 14.7816 5.84865L15.4487 4.57032C16.1475 4.67148 17.7122 5.03546 19.7856 6.34421C21.8946 9.78503 22.4632 15.4099 22.5729 16.7713C21.9203 17.4115 19.7391 19.3352 16.9747 19.462Z"
                      fill="#A4D0F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1311_2889">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {/* website */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1311_2894)">
                    <path
                      d="M20.4853 3.51474C18.2188 1.24819 15.2053 0 12 0C8.79471 0 5.7812 1.24819 3.51474 3.51469C1.24819 5.7812 0 8.79471 0 12C0 15.2053 1.24819 18.2188 3.51474 20.4853C5.7812 22.7518 8.79471 24 12 24C15.2054 24 18.2188 22.7518 20.4854 20.4853C22.7518 18.2188 24 15.2053 24 12C24 8.79466 22.7518 5.7812 20.4853 3.51474ZM4.51013 4.51013C5.56534 3.45493 6.80411 2.65008 8.1543 2.12475C7.79467 2.57372 7.45816 3.08977 7.14976 3.67018C6.79159 4.34424 6.48254 5.08454 6.22515 5.87528C5.33349 5.72729 4.50732 5.54532 3.76923 5.33176C4.00056 5.04742 4.24735 4.77292 4.51013 4.51013ZM2.91699 6.54306C3.78029 6.81948 4.76757 7.05259 5.84486 7.23723C5.54485 8.51064 5.36828 9.88094 5.32614 11.2962H1.43138C1.542 9.59777 2.0521 7.97683 2.91699 6.54306ZM2.84035 17.3268C2.02214 15.9253 1.53867 14.3511 1.43133 12.7039H5.32881C5.37484 14.0787 5.5479 15.41 5.83778 16.6501C4.73837 16.8283 3.72629 17.0555 2.84035 17.3268ZM4.51013 19.4899C4.21107 19.1908 3.93254 18.8767 3.6743 18.5498C4.43945 18.3377 5.29482 18.158 6.21559 18.0139C6.47481 18.8156 6.78719 19.5657 7.14972 20.2481C7.48581 20.8806 7.85533 21.4363 8.25175 21.9124C6.86378 21.3882 5.5907 20.5704 4.51013 19.4899ZM11.2961 22.4117C10.227 22.1122 9.21564 21.1359 8.39289 19.5875C8.10513 19.046 7.85237 18.4552 7.63586 17.8256C8.79508 17.698 10.0286 17.6226 11.2961 17.6049V22.4117ZM11.2961 16.1971C9.89046 16.2162 8.52034 16.3045 7.23723 16.4552C6.9542 15.2852 6.7839 14.0187 6.73717 12.7039H11.2962V16.1971H11.2961ZM11.2961 11.2961H6.7345C6.7772 9.94455 6.95022 8.64278 7.24206 7.44297C8.51697 7.60234 9.88422 7.69928 11.2961 7.72703V11.2961ZM11.2961 6.31914C10.0237 6.2935 8.79288 6.21053 7.64186 6.07515C7.85706 5.45209 8.10784 4.86728 8.39289 4.3307C9.2156 2.78232 10.227 1.806 11.2961 1.50652V6.31914ZM21.1274 6.61783C21.9652 8.03312 22.4599 9.62716 22.5688 11.2961H18.674C18.6323 9.89721 18.4591 8.54228 18.1654 7.28144C19.2498 7.10631 20.2493 6.88351 21.1274 6.61783ZM19.4899 4.51013C19.7725 4.79274 20.0365 5.08899 20.2827 5.39654C19.5293 5.60228 18.6903 5.77689 17.7888 5.91742C17.5287 5.11079 17.2149 4.35624 16.8503 3.67018C16.5419 3.08977 16.2054 2.57372 15.8458 2.12475C17.1959 2.65008 18.4347 3.45493 19.4899 4.51013ZM12.7039 12.7039H17.2629C17.2159 14.029 17.0433 15.305 16.7562 16.4826C15.4815 16.3241 14.1148 16.2281 12.7039 16.2011V12.7039ZM12.7039 11.2961V7.73172C14.1104 7.71325 15.4816 7.62573 16.7659 7.47559C17.053 8.66636 17.2232 9.95679 17.2655 11.2961H12.7039ZM12.7038 1.50652H12.7039C13.773 1.806 14.7844 2.78232 15.6071 4.3307C15.8967 4.87571 16.1509 5.4706 16.3684 6.10482C15.2076 6.23195 13.9727 6.30681 12.7038 6.32392V1.50652ZM12.7039 22.4117V17.609C13.9752 17.6339 15.205 17.7161 16.3556 17.8506C16.141 18.4709 15.891 19.0532 15.6072 19.5875C14.7844 21.1359 13.773 22.1122 12.7039 22.4117ZM19.4899 19.4899C18.4093 20.5704 17.1363 21.3882 15.7483 21.9123C16.1447 21.4363 16.5142 20.8806 16.8503 20.2481C17.2075 19.5758 17.5158 18.8377 17.7728 18.0493C18.6852 18.2 19.5293 18.3862 20.2813 18.6052C20.0355 18.9121 19.772 19.2078 19.4899 19.4899ZM21.1222 17.3911C20.2487 17.1103 19.2472 16.874 18.1538 16.6875C18.4489 15.4369 18.6248 14.0925 18.6713 12.7039H22.5688C22.4597 14.3763 21.9633 15.9736 21.1222 17.3911Z"
                      fill="#A4D0F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1311_2894">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </section>
            <p className="text-sm md:text-base">
              The memecoin for Jabronis around the world. Tired of missing the
              next meta, not getting at least a 2x on your investment and
              becoming a community member instead of trader? This is your last
              chance, you Jabroni. 🐸 Experience Team 🐸 CMC & CG Fast Tracked
              🐸 Alpha Channels Supported 🐸 Callers Onboarded 🐸 5x Guaranteed
            </p>
          </div>
          <Details />
        </section>
        {/* right column */}
        <section className="flex flex-col gap-6 text-white">
          <Image className="w-full" src={banner} alt="banner" />
          <div className="bg-[#1D1C20] pt-[1.13rem] border border-[#3F3F46] rounded-[0.65rem] px-5">
            {/* PROGRESS */}
            <div className="">
              <div className="flex justify-between items-center text-[#e4e4e7] text-[0.72rem]">
                <p className="tracking-[-0.0073rem]">Progress</p>
                <p className="tracking-[-0.0073rem]">67%</p>
              </div>
              {/* progress bar */}
              <div className="bg-[#70707b] w-full h-[0.434rem] rounded-[0.58rem] my-[0.29rem]">
                <div className="bg-[#454FDA] w-[67%] h-full rounded-[0.58rem]"></div>
              </div>
              <div className="flex justify-between items-center text-[#e4e4e7] text-[0.72rem]">
                <p className="tracking-[-0.0073rem]">870 BNB</p>
                <p className="tracking-[-0.0073rem] text-[#f3ce92]">1000 BNB</p>
              </div>
            </div>
            {/* pool state */}
            <p className="bg-[#a1f381]/[0.05] text-center text-[0.875rem] tracking-[-0.00875rem] mt-[1.05rem] mb-[2.37rem] p-[0.65rem] rounded-[0.65rem]">
              This pool is active
            </p>
            <div className="border-b border-[#26272B]">
              {/* Status */}
              <section className="pb-2 mb-2 flex justify-between items-center">
                <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                  Status
                </p>
                <p className="tracking-[-0.00875rem] text-right text-[#12B76A] text-sm">
                  Active
                </p>
              </section>
              {/* Sale type */}
              <section className="pb-2 mb-2 flex justify-between items-center">
                <p className="text-sm tracking-[-0.00875rem] text-[#E4E4E7]">
                  Sale type
                </p>
                <p className="tracking-[-0.00875rem] text-right text-[#86CB3C] text-sm">
                  Whitelist
                </p>
              </section>
              {/* Max buy */}
              <section className="pb-2 mb-2 flex justify-between items-center">
                <p className="text-sm tracking-[-0.00875rem]">Maximum buy</p>
                <p className="tracking-[-0.00875rem] text-right  text-sm">
                  0.033 BNB{" "}
                </p>
              </section>
              {/* Min buy */}
              <section className="pb-2 mb-2 flex justify-between items-center">
                <p className="text-sm tracking-[-0.00875rem]">Minimum buy</p>
                <p className="tracking-[-0.00875rem] text-right  text-sm">
                  3.3 BNB{" "}
                </p>
              </section>
              {/* My contributions */}
              <section className="pb-2 mb-2 flex justify-between items-center">
                <p className="text-sm tracking-[-0.00875rem]">
                  My contributions
                </p>
                <p className="tracking-[-0.00875rem] text-right text-sm">
                  0.0 BNB{" "}
                </p>
              </section>
              {/* My contributions */}
              <section className="pb-2 mb-2 flex justify-between items-center">
                <p className="text-sm tracking-[-0.00875rem]">
                  Total contributors
                </p>
                <p className="tracking-[-0.00875rem] text-right text-sm">69 </p>
              </section>
            </div>
            <div className="py-10 px-6 bg-[#18181B] bordr-[#E4E4E7] mt-7 text-white rounded-2xl">
              <h1 className="text-[#fcfcfd] tracking-[-0.045rem] text-[1.875rem] md:text-4xl">
                Stay in the loop about all projects
              </h1>
              <p className="mt-5 mb-8 text-[#e4e4e7] text-sm">
                Sign up our mailing list to receive our new presales, features,
                tips and reviews for next 100X projects.
              </p>
              <form className="flex gap-4 flex-col">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-[0.87rem] py-3 rounded-lg bg-[#26272B] border border-[#A0A0AB] shadow-[0px_1px_2px_0px] shadow-[#101828]/[0.05] bg-transparent outline-none tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
                  name=""
                  id=""
                />
                <p className="mt-[0.38rem] text-left text-[#d1d1d6]">
                  We care about your data in our privacy policy.
                </p>
                <button
                  className="rounded-lg border border-[#454fda] bg-[#454fda] px-5 py-3"
                  // onClick={(e: any) => {
                  //   e.preventDefault();
                  // }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* page {params.title} */}
    </section>
  );
}
