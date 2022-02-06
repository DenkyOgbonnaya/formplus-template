import { Alert, Jumbotron, Loader, Pagination } from "components";
import SearchSortFilters from "components/searchSortFilters/SearchSortFilters";
import { ChangeEvent, FC, useEffect, useState } from "react";
import TemplateCounter from "./components/templateConter/TemplateCounter";
import TemplateList from "./components/templateList/TemplateList";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { fetchFormTemplates } from "./redux/templateThunk";

const Templates: FC = () => {
  const { templates, loading } = useAppSelector(({ templates }) => templates);
  const dispatch = useAppDispatch();
  const [currentPage] = useState<number>(1);
  const [totalPages] = useState<number>(14);
  const alertMessage =
    "Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates";

  useEffect(() => {
    dispatch(fetchFormTemplates());
  }, []);
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const sortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event);
  };

  const handlePageChange = (pageNumber: number) => {
    console.log(pageNumber);
  };

  const renderTemplates = (): JSX.Element => {
    if (loading) return <Loader message="Loading Templates..." />;
    if (!templates.length)
      return <Jumbotron message="No Templates Available" />;

    return <TemplateList templates={templates} />;
  };
  return (
    <>
      <div className=" p-5 sm:px-[7.25rem] sm:py-[4.95rem]">
        <SearchSortFilters
          sortHandler={sortHandler}
          searchHandler={searchHandler}
          searchPlacholder="Search Template"
        />
        <div className="my-20">
          <Alert type="message" message={alertMessage} />
        </div>
        <div className="mb-7">
          <TemplateCounter category="All Templates" total={200} />
        </div>

        {renderTemplates()}

        {templates.length ? (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            pageChangeHandler={handlePageChange}
          />
        ) : null}
      </div>
    </>
  );
};

export default Templates;
