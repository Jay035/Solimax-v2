export default function StepFour({ error }: FormProps) {
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
        {/* error */}
        <div className="bg-[#dc6803]/[0.10] border border-[#DC68031A] py-[0.875rem] px-[1.1875rem] rounded-[0.625rem]">
          <h1 className="text-[#F4F4F5] tracking-[-0.00875rem] text-lg">
            Cannot submit until spending is approved
          </h1>
          <p className="text-[#D1D1D6] tracking-[-0.00875rem] text-[0.875rem]">
            Approve spending 145,342 SLM to proceed
          </p>
        </div>
        {/* Your information */}
        <div className="">
          <p className="">Your information</p>
        </div>
      </form>
    </section>
  );
}
