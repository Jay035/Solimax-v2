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
    </section>
  );
}
