import { ChangeEvent, FC } from "react";
import { SearchIcon } from "@heroicons/react/outline";
interface IProps {
  placeHolder?: string;
  value:string;
  label?: string;
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput: FC<IProps> = ({ placeHolder, searchHandler, label, value }) => {
  return (
    <div className="flex">
      <input
        className=" border border-[color:var(--grey)] h-11 rounded-sm outline-none text-sm p-3 pr-9 font-normal"
        type="text"
        placeholder={placeHolder}
        onChange={searchHandler}
        aria-label={label}
        value={value}
      />
      <SearchIcon className="w-6 h-6 relative -ml-9 mt-3 text-[color:var(--grey)] font-light" />
    </div>
  );
};

export default SearchInput;
