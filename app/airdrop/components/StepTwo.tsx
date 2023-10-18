import CustomFileDropbox from "@/components/CustomFileDropbox";
import CustomInput from "@/components/CustomInput";
import { GlobalContext } from "@/context/Context";
import { useRef } from "react";

type Props = {
  setError: (error: string) => void;
};

export default function StepThree({ setError }: Props) {
  const {
    airdropCurrentStep,
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
    airdropLogo,
    setAirdropLogo,
    setAirdropCurrentStep,
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
  } = GlobalContext();
  const inputRef = useRef<any>(null);

  const handleFileSelected = (file: File | undefined) => {
    setAirdropLogo?.(file);
  };

  const onButtonClick = () => {
    inputRef?.current?.click();
  };

  const handlePreviousStep = () => {
    if (airdropCurrentStep > 1) setAirdropCurrentStep?.(airdropCurrentStep - 1);
  };
  return (
    <form className="flex flex-col gap-6">
      {/* AIRDROP TITLE */}
      <CustomInput
        id="airdropTitle"
        className="flex flex-col gap-[0.62rem]"
        inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
        label="Airdrop title"
        type="text"
        placeholder="Enter title"
        value={airdropTitle}
        onChange={(e) => {
          setAirdropTitle?.(e.target.value);
          setError?.("");
        }}
        isRequired={false}
      />
      <section className="grid md:grid-cols-2 items-start gap-6">
        {/* LOGO */}
        <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
          <p>
            Logo (attach document)<span className="text-[#F04438]">*</span>
          </p>
          <CustomFileDropbox
            inputRef={inputRef}
            selectedFile={airdropLogo}
            onFileSelected={handleFileSelected}
            onButtonClick={onButtonClick}
          />
          {airdropLogo && (
            <span className="text-[#A4D0F2]" onClick={onButtonClick}>
              Change file
            </span>
          )}
          {/* create pool fee */}
          <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
            SVG, PNG, JPG or GIF (max. 400x400px)
          </p>
        </div>
        {/* WEBSITE URL */}
        <CustomInput
          id="websiteURL"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Website URL"
          type="url"
          // pattern="https://.*\..*"
          placeholder="www."
          value={airdropWebsiteURL}
          onChange={(e) => {
            setAirdropWebsiteURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={true}
        />
      </section>
      <section className="grid md:grid-cols-2 items-start gap-6">
        {/* TELEGRAM URL */}
        <CustomInput
          id="telegramURL"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Telegram"
          type="website"
          placeholder="www."
          value={airdropTelegramURL}
          onChange={(e) => {
            setAirdropTelegramURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
        {/* TWITTER URL */}
        <CustomInput
          id="twitterURL"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Twitter"
          type="website"
          placeholder="www."
          value={airdropTwitterURL}
          onChange={(e) => {
            setAirdropTwitterURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
      </section>
      <section className="grid md:grid-cols-2 items-start gap-6">
        {/* DISCORD URL */}
        <CustomInput
          id="discordURL"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Discord"
          type="website"
          placeholder="www."
          value={airdropDiscordURL}
          onChange={(e) => {
            setAirdropDiscordURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
        {/* INSTAGRAM URL */}
        <CustomInput
          id="instagramURL"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Instagram"
          type="website"
          placeholder="www."
          value={airdropInstagramURL}
          onChange={(e) => {
            setAirdropInstagramURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
      </section>
      <section className="grid md:grid-cols-2 items-start gap-6">
        {/* GITHUB URL */}
        <CustomInput
          id="githubURL"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Github"
          type="website"
          placeholder="www."
          value={airdropGithubURL}
          onChange={(e) => {
            setAirdropGithubURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
        {/* FACEBOOK URL */}
        <CustomInput
          id="facebookURL"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Facebook"
          type="website"
          placeholder="www."
          value={airdropFacebookURL}
          onChange={(e) => {
            setAirdropFacebookURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
      </section>
      <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
        <CustomInput
          id="token-address"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Youtube video"
          type="url"
          placeholder="www."
          value={airdropYoutubeURL}
          onChange={(e) => {
            setAirdropYoutubeURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
        {/* create pool fee */}
        <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
          Input your youtube URL or video ID
        </p>
      </div>
      <label htmlFor="description" className="flex flex-col gap-[0.62rem]">
        Description
        <div className="p-[0.07rem] pb-0 w-full bg-gradient-to-b from-[#51525C] to-[#414149] hover:bg-[#F4F4F5] rounded-[0.625rem]">
          <textarea
            id="description"
            className="bg-[#26272B] resize-none w-full rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            placeholder="Leave a short description about your project"
            value={airdropDescription}
            onChange={(e) => {
              setAirdropDescription?.(e.target.value);
              setError?.("");
            }}
            rows={4}
          ></textarea>
        </div>
      </label>

      {/* back and next buttons */}
      <div className="flex gap-2 md:items-center justify-end">
        <button
          onClick={(e: any) => {
            e.preventDefault();
            setAirdropCurrentStep?.(airdropCurrentStep - 1);
          }}
          className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
        >
          Back
        </button>
        <button
          disabled={!airdropLogo || airdropWebsiteURL === ""}
          onClick={(e: any) => {
            e.preventDefault();
            // setCurrentStep?.(currentStep + 1);
          }}
          className="bg-[#C38CC3] disabled:bg-[#C38CC3]/50 hover:bg-[#C38CC3]/80 w-[12.6rem] text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
        >
          Create New Airdrop
        </button>
      </div>
    </form>
  );
}
