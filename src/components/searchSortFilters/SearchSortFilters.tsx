import { SearchInput, SortFilters } from "components";
import { ChangeEvent, FC } from "react";
import { ISortState } from "sharable/interface";

interface IProps {
  searchPlacholder?: string;
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  sortHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  sortState: ISortState
}
const SearchSortFilters: FC<IProps> = ({
  searchPlacholder = "",
  sortHandler,
  searchHandler,
  sortState
}) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    searchHandler(e);
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
          <SortFilters sortHandler={sortHandler} sortState={sortState} />
        </div>
      </div>
    </>
  );
};

export default SearchSortFilters;
