import CustomFileDropbox from "@/components/CustomFileDropbox";
import CustomInput from "@/components/CustomInput";
import { useRef, useState } from "react";

type Props = {
  currentStep: number;
  setError: (error: string) => void;
  setCurrentStep: (step: number) => void;
};

export default function StepThree({
  currentStep,
  setError,
  setCurrentStep,
}: Props) {
  const [airdropTitle, setAirdropTitle] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [telegramURL, setTelegramURL] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [discordURL, setDiscordURL] = useState("");
  const [instagramURL, setInstagramURL] = useState("");
  const [githubURL, setGithubURL] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");
  const [description, setDescription] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<any>(null);

  const handleFileSelected = (file: File | null) => {
    setSelectedFile(file);
  };

  const onButtonClick = () => {
    inputRef?.current?.click();
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) setCurrentStep?.(currentStep - 1);
  };
  return (
    <form className="flex flex-col gap-6">
      {/* AIRDROP TITLE */}
      <CustomInput
        id="airdropTitle"
        className="flex flex-col gap-[0.62rem]"
        inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
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
            selectedFile={selectedFile}
            onFileSelected={handleFileSelected}
            onButtonClick={onButtonClick}
          />
          {selectedFile && (
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
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Website URL"
          type="url"
          // pattern="https://.*\..*"
          placeholder="www."
          value={websiteURL}
          onChange={(e) => {
            setWebsiteURL?.(e.target.value);
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
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Telegram"
          type="website"
          placeholder="www."
          value={telegramURL}
          onChange={(e) => {
            setTelegramURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
        {/* TWITTER URL */}
        <CustomInput
          id="twitterURL"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Twitter"
          type="website"
          placeholder="www."
          value={twitterURL}
          onChange={(e) => {
            setTwitterURL?.(e.target.value);
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
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Discord"
          type="website"
          placeholder="www."
          value={discordURL}
          onChange={(e) => {
            setDiscordURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
        {/* INSTAGRAM URL */}
        <CustomInput
          id="instagramURL"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Instagram"
          type="website"
          placeholder="www."
          value={instagramURL}
          onChange={(e) => {
            setInstagramURL?.(e.target.value);
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
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Github"
          type="website"
          placeholder="www."
          value={githubURL}
          onChange={(e) => {
            setGithubURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
        {/* FACEBOOK URL */}
        <CustomInput
          id="facebookURL"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Facebook"
          type="website"
          placeholder="www."
          value={facebookURL}
          onChange={(e) => {
            setFacebookURL?.(e.target.value);
            setError?.("");
          }}
          isRequired={false}
        />
      </section>
      <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
        <CustomInput
          id="token-address"
          className="flex flex-col gap-[0.62rem]"
          inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          label="Youtube video"
          type="url"
          placeholder="www."
          value={youtubeURL}
          onChange={(e) => {
            setYoutubeURL?.(e.target.value);
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
        <textarea
          id="description"
          className="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
          placeholder="Leave a short description about your project"
          value={description}
          onChange={(e) => {
            setDescription?.(e.target.value);
            setError?.("");
          }}
          rows={4}
        ></textarea>
      </label>

      {/* back and next buttons */}
      <div className="flex gap-2 md:items-center justify-end">
        <button
          onClick={(e: any) => {
            e.preventDefault();
            setCurrentStep?.(currentStep - 1);
          }}
          className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
        >
          Back
        </button>
        <button
          disabled={!selectedFile || websiteURL === ""}
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
