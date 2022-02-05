import { Alert } from "components";
import SearchSortFilters from "components/searchSortFilters/SearchSortFilters";
import { ChangeEvent, FC } from "react";

const Templates: FC = () => {
  const alertMessage =
    "Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates";
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const sortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event);
  };
  return (
    <>
      <div className=' p-5 sm:px-[7.25rem] sm:py-[4.95rem]'>
        <SearchSortFilters
          sortHandler={sortHandler}
          searchHandler={searchHandler}
          searchPlacholder="Search Template"
        />
        <div className="my-20">
          <Alert type="message" message={alertMessage} />
        </div>
      </div>
    </>
  );
};

export default Templates;
