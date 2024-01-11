import { GlobalContext } from "@/context/Context";
import { usePathname } from "next/navigation";

type FormProps = {
  type: string;
  inputClassName: string;
  className: string;
  label: string;
  value?: string | number;
  id: string;
  balance?: string;
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
  balance,
  isRequired,
  placeholder,
  value,
  defaultChecked,
  onChange,
  onMouseLeave,
  pattern,
}: FormProps) {
  const pathname = usePathname();
  const { showModal } = GlobalContext();

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`${
          pathname === "/bridge" &&
          !showModal &&
          "flex justify-between items-center"
        }`}
      >
        {label}
        {isRequired && <span className="text-[#F04438]">*</span>}
        {pathname === "/bridge" && !showModal && (
          <span className="text-[#A4D0F2]">Balance: {balance} SLM</span>
        )}
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
            <button
              className={`text-[#A4D0F2] tracking-[-0.00875rem] text-sm absolute right-[1.18rem] top-[0.88rem] ${
                pathname === "/bridge" &&
                "w-[2.7rem] rounded-[1.25rem] text-center text-[#F4F4F5] bg-[#6b03b8]/90 to-[#a818ba]/90 via-[#e22bbb]/90"
              }`}
            >
              MAX
            </button>
          )}
          <span className="validity"></span>
        </div>
      </div>
    </div>
  );
}
