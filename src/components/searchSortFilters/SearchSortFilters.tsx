import { SearchInput, SortFilters } from "components";
import { ChangeEvent, FC } from "react";

interface IProps {
  searchPlacholder?: string;
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  sortHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}
const SearchSortFilters: FC<IProps> = ({
  searchPlacholder = "",
  sortHandler,
}) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("");
  };
  return (
    <>
      <div className="flex flex-col justify-between w-full sm:flex-row flex-wrap">
        <div className="w-[40%]">
          <SearchInput
            searchHandler={handleSearch}
            placeHolder={searchPlacholder}
          />
        </div>
        <div className=" flex-1">
          <SortFilters sortHandler={sortHandler} />
        </div>
      </div>
    </>
  );
};

export default SearchSortFilters;
