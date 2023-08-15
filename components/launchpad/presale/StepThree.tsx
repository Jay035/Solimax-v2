import CustomInput from "@/components/CustomInput";

export default function StepThree({ error, setError }: FormProps) {
  return (
    <section>
      <div className="">
        <p className="text-[0.8125rem] tracking-[-0.00813rem] text-[#D1D1D6]">
          <span className="text-[#F04438]">(*) </span>is required field
        </p>
        <p className="text-[#F04438] mt-4 text-sm sm:text-base">
          {error && error}
        </p>
      </div>
      <form className="flex flex-col gap-6">
        <section className="grid md:grid-cols-2 items-start gap-6">
          {/* LOGO */}
          <div className="text-[#E4E4E7] tracking-[-0.01rem] flex flex-col gap-[0.62rem]">
            <CustomInput
              id="token-address"
              className="flex flex-col gap-[0.62rem]"
              inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
              label="Logo (attach document)"
              type="file"
              placeholder="Click to upload or drag and drop"
              value=""
              onChange={(e) => {
                //   setTokenAddress?.(e.target.value);
                setError("");
              }}
              isRequired={true}
            />
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
            type="website"
            placeholder="www."
            value=""
            onChange={(e) => {
              // setVestingPeriod?.(e.target.value);
              setError("");
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
            value=""
            onChange={(e) => {
              // setVestingPeriod?.(e.target.value);
              setError("");
            }}
            isRequired={true}
          />
          {/* TWITTER URL */}
          <CustomInput
            id="twitterURL*"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Twitter"
            type="website"
            placeholder="www."
            value=""
            onChange={(e) => {
              // setVestingPeriod?.(e.target.value);
              setError("");
            }}
            isRequired={true}
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
            value=""
            onChange={(e) => {
              // setVestingPeriod?.(e.target.value);
              setError("");
            }}
            isRequired={true}
          />
          {/* INSTAGRAM URL */}
          <CustomInput
            id="instagramURL*"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Instagram"
            type="website"
            placeholder="www."
            value=""
            onChange={(e) => {
              // setVestingPeriod?.(e.target.value);
              setError("");
            }}
            isRequired={true}
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
            value=""
            onChange={(e) => {
              // setVestingPeriod?.(e.target.value);
              setError("");
            }}
            isRequired={true}
          />
          {/* FACEBOOK URL */}
          <CustomInput
            id="facebookURL*"
            className="flex flex-col gap-[0.62rem]"
            inputClassName="bg-[#26272B] border border-[#F4F4F5] rounded-[0.625rem] py-[0.875rem] px-[1.1875rem] tracking-[-0.00875rem] text-[0.875rem] text-[#A0A0AB]"
            label="Facebook"
            type="website"
            placeholder="www."
            value=""
            onChange={(e) => {
              // setVestingPeriod?.(e.target.value);
              setError("");
            }}
            isRequired={true}
          />
        </section>
      </form>
    </section>
  );
}
