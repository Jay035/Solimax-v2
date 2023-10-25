type FormProps = {
  type: string;
  inputClassName: string;
  className: string;
  label: string;
  value?: string | number;
  id: string;
  defaultChecked?: boolean;
  isRequired: boolean;
  placeholder?: string;
  pattern?: string;
  onChange?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
};

export default function CustomInput({
  label,
  inputClassName,
  className,
  type,
  id,
  isRequired,
  placeholder,
  value,
  defaultChecked,
  onChange,
  onMouseLeave,
  pattern,
}: FormProps) {
  return (
    <div className={className}>
      <label htmlFor={id}>
        {label}
        {isRequired && <span className="text-[#F04438]">*</span>}
      </label>
      <div className="p-[0.07rem] w-full group bg-gradient-to-b from-[#51525C] to-[#414149] hover:bg-[#F4F4F5] rounded-[0.625rem]">
        <div
          className={`w-full  ${
            id === "amount" &&
            "flex items-center gap-2 relative bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.19rem]"
          }`}
        >
          <input
            id={id}
            name={id}
            className={`${inputClassName} ${
              id === "amount"
                ? "w-[90%]"
                : "w-full group-hover:border-[0.2px] group-hover:border-white"
            } outline-none `}
            type={type}
            autoComplete="off"
            defaultChecked={defaultChecked}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onMouseLeave={onMouseLeave}
            required={isRequired}
          />
          {id === "amount" && (
            <p className="text-[#A4D0F2] text-sm absolute right-[1.18rem] top-[0.88rem]">
              MAX
            </p>
          )}
          <span className="validity"></span>
        </div>
      </div>
    </div>
  );
}
