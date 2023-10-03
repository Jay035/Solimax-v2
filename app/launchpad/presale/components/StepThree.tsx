import CustomInput from "@/components/CustomInput";
import CustomFileDropbox from "@/components/CustomFileDropbox";
import { useRef, useState } from "react";
import { GlobalContext } from "@/context/Context";
import ButtonGroup from "@/components/ButtonGroup";

export default function StepThree() {
  const {
    presaleWebsiteURL,
    presaleTelegramURL,
    presaleGithubURL,
    presaleTwitterURL,
    presaleDiscordURL,
    presaleInstagramURL,
    presaleFacebookURL,
    presaleYoutubeURL,
    presaleDescription,
    presaleLogo,
    setPresaleLogo,
    setPresaleDescription,
    setPresaleYoutubeURL,
    setPresaleFacebookURL,
    setPresaleGithubURL,
    setPresaleDiscordURL,
    setPresaleInstagramURL,
    setPresaleTwitterURL,
    setPresaleTelegramURL,
    setPresaleWebsiteURL,
    handlePresalePreviousStep,
    handlePresaleNextStep,
  } = GlobalContext();

  const [error, setError] = useState("");
  const inputRef = useRef<any>(null);

  const handleFileSelected = (file: File | null) => {
    setPresaleLogo?.(file);
    
    // console.log(file?.clientWidth)
  };

  const onButtonClick = () => {
    inputRef?.current?.click();
  };

  return (
    <section className="flex flex-col gap-6 bg-[#1D1C20] pb-[1.19rem] rounded-[0.625rem] px-6 border border-[#26272B] pt-8 text-white">
      <ButtonGroup />
      <div className="">
        <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
          <span className="text-[#F04438]">(*) </span>is required field
        </p>
        {error && (
          <p className="text-[#F04438] mt-4 text-sm sm:text-base">{error}</p>
        )}
      </div>
      <form className="flex flex-col gap-6">
        <section className="grid md:grid-cols-2 items-start gap-6">
          {/* LOGO */}
          <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
            <p>
              Logo (attach document)<span className="text-[#F04438]">*</span>
            </p>
            <CustomFileDropbox
              inputRef={inputRef}
              selectedFile={presaleLogo!}
              onFileSelected={handleFileSelected}
              onButtonClick={onButtonClick}
            />
            {presaleLogo && (
              <button
                className="text-[#A4D0F2] cursor-pointer w-fit "
                onClick={onButtonClick}
              >
                Change file
              </button>
            )}
            {/* create pool fee */}
            <p className="text-xs tracking-[-0.0075rem] text-[#D1D1D6]">
              SVG, PNG, JPG or GIF (max. 400x400px)
            </p>
          </div>
          {/* url URL */}
          <CustomInput
            id="WebsiteURL"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Website URL"
            type="url"
            placeholder="www."
            value={presaleWebsiteURL}
            onChange={(e) => {
              setPresaleWebsiteURL?.(e.target.value);
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
            type="url"
            placeholder="www."
            value={presaleTelegramURL}
            onChange={(e) => {
              setPresaleTelegramURL?.(e.target.value);
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
            type="url"
            placeholder="www."
            value={presaleTwitterURL}
            onChange={(e) => {
              setPresaleTwitterURL?.(e.target.value);
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
            type="url"
            placeholder="www."
            value={presaleDiscordURL}
            onChange={(e) => {
              setPresaleDiscordURL?.(e.target.value);
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
            type="url"
            placeholder="www."
            value={presaleInstagramURL}
            onChange={(e) => {
              setPresaleInstagramURL?.(e.target.value);
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
            type="url"
            placeholder="www."
            value={presaleGithubURL}
            onChange={(e) => {
              setPresaleGithubURL?.(e.target.value);
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
            type="url"
            placeholder="www."
            value={presaleFacebookURL}
            onChange={(e) => {
              setPresaleFacebookURL?.(e.target.value);
              setError?.("");
            }}
            isRequired={false}
          />
        </section>
        <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
          <CustomInput
            id="youtube-url"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Youtube video"
            type="url"
            placeholder="www."
            value={presaleYoutubeURL}
            onChange={(e) => {
              setPresaleYoutubeURL?.(e.target.value);
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
          <div className="p-[0.07rem] w-full bg-gradient-to-b from-[#51525C] to-[#414149] hover:bg-[#F4F4F5] rounded-[0.625rem]">
            <textarea
              id="description"
              className="bg-[#26272B] w-full rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              placeholder="Leave a short description about your project"
              value={presaleDescription}
              onChange={(e) => {
                setPresaleDescription?.(e.target.value);
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
              handlePresalePreviousStep?.(e);
            }}
            className="bg-[#26272B] text-[#F2F4F7] hover:bg-[#26272B]/80 w-[7.375rem] text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[0.875rem]"
          >
            Back
          </button>
          <button
            disabled={presaleLogo === null || presaleWebsiteURL === ""}
            onClick={(e: any) => {
              e.preventDefault();
              handlePresaleNextStep?.(e);
            }}
            className="bg-[#C38CC3] disabled:bg-[#C38CC3]/50 hover:bg-[#C38CC3]/80 w-[7.375rem] text-center rounded-[0.625rem] p-[0.625rem] border-[0.5px] border-[#424242] text-[#1D1C20] text-[0.875rem]"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
}
