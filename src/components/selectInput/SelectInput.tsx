import { ChangeEvent, FC, ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";

interface IProps {
  name: string | undefined;
  value: string | number;
  label: string;
  children: ReactNode;
  changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}
const SelectInput: FC<IProps> = ({
  name,
  value,
  label,
  children,
  changeHandler,
}) => {
  return (
    <div className="p-3 border-[2px] border-solid m-4 relative w-full">
      <label className="absolute -top-[0.65rem] left-5 text-[color:var(--dark-grey)] bg-white text-xs">
        {label}
      </label>
      <select
        name={name}
        defaultValue={value}
        onChange={changeHandler}
        className="input  bg-white w-full"
      >
        {children}
      </select>
      <ChevronDownIcon className="w-5 h-5 bg-white absolute top-[1rem] right-3 text-[color:var(--dark-grey)]" />
    </div>
  );
};
export default SelectInput;
