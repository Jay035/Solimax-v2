import React from "react";

type Props = {
  text: string;
  valueChecked: boolean;
  setValueChecked: (value: boolean) => void;
};

export default function Checkbox({
  text,
  valueChecked,
  setValueChecked,
}: Props) {
  return (
    <label className="text-[0.875rem] tracking-[-0.00875rem] mt-3 flex items-center gap-2 cursor-pointer">
      <div
        className={`relative flex ${
          !valueChecked && "bg-gradient-to-b from-[#51525c] to-[#28282a] p-0.5"
        } rounded-lg`}
      >
        <input
          type="checkbox"
          name="setting-max-contribution"
          id="setting-max-contribution"
          className="h-6 w-6 appearance-none bg-[#26272B] checked:bg-white rounded-md"
          checked={valueChecked}
          onChange={(event: any) => {
            setValueChecked(event.target.checked);
          }}
        />
        <i
          className={`ri-check-line text-xl absolute left-0.5 translate-x-0.5 top-0 ${
            valueChecked ? "text-[#454FDA] font-bold" : "hidden"
          }`}
        ></i>
      </div>
      <span className="text-[#F4F4F5]">{text}</span>
    </label>
  );
}
