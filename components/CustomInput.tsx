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
}: FormProps) {
  return (
    <div className={className}>
      <label htmlFor={id}>
        {label}
        {isRequired && <span className="text-[#F04438]">*</span>}
      </label>
      <input
        id={id}
        name={id}
        className={inputClassName}
        type={type}
        autoComplete="off"
        defaultChecked={defaultChecked}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={isRequired}
      />
    </div>
  );
}
