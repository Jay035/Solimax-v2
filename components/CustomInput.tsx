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
  pattern,
}: FormProps) {
  return (
    <div className={className}>
      <label htmlFor={id}>
        {label}
        {isRequired && <span className="text-[#F04438]">*</span>}
      </label>
      <div
        className={`w-full ${
          id === "amount" &&
          "relative border border-[#F4F4F5] bg-[#26272B] rounded-[0.625rem] py-[0.875rem] px-[1.19rem]"
        }`}
      >
        <input
          id={id}
          name={id}
          className={`${inputClassName} ${id === "amount" ? 'w-[90%]' : 'w-full'}`}
          type={type}
          autoComplete="off"
          defaultChecked={defaultChecked}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={isRequired}
        />
        {id === "amount" && (
          <p className="text-[#A4D0F2] text-sm absolute right-[1.18rem] top-[0.88rem]">
            MAX
          </p>
        )}
      </div>
    </div>
  );
}
