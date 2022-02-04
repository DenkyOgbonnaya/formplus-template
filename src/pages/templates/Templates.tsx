import SearchSortFilters from "components/searchSortFilters/SearchSortFilters";
import { ChangeEvent, FC } from "react";

const Templates: FC = () => {
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const sortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event);
  };
  return (
    <>
      <div className="m-12">
        <SearchSortFilters
          sortHandler={sortHandler}
          searchHandler={searchHandler}
          searchPlacholder="Search Template"
        />
      </div>
    </>
  );
};

export default Templates;
