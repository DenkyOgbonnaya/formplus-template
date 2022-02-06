import { Alert, Jumbotron, Loader, Pagination } from "components";
import SearchSortFilters from "components/searchSortFilters/SearchSortFilters";
import { ChangeEvent, FC, useEffect, useState } from "react";
import TemplateCounter from "./components/templateConter/TemplateCounter";
import TemplateList from "./components/templateList/TemplateList";
// import { useAppDispatch, useAppSelector } from "hooks/useRedux";
// import { fetchFormTemplates } from "./redux/templateThunk";
import { ITemplate } from "sharable/interface";
import { handleGetRequest } from "services/axios";
import { GET_TASK_TEMPLATES } from "constants/api";

const Templates: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [templates, setTemplates] = useState<ITemplate[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  // const { templates, loading } = useAppSelector(({ templates }) => templates);
  // const dispatch = useAppDispatch();

  const templatePerPage = 12;
  const startPoint = currentPage * templatePerPage - templatePerPage;
  const endPoint = startPoint + templatePerPage;
  const paginatedTemplates = templates.slice(startPoint, endPoint);

  const totalTemplates = templates.length;

  const alertMessage =
    "Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates";

  useEffect(() => {
    // For performance consideration, I will not be using redux store to store the templates data,
    // considering how large it is, and only needed in this page and can be Garbage collected locally on component unmount.
    // All lines of code that has to do with the redux store will be commented out on this file
    // dispatch(fetchFormTemplates());

    (async () => {
      if (!templates.length) {
        setLoading(true);
        try {
          const data = await handleGetRequest<ITemplate[]>(GET_TASK_TEMPLATES);
          setTemplates(data);
        } catch {
        } finally {
          setLoading(false);
        }
      }
    })();
  }, []);
  const getSearchedTemplates = (): ITemplate[] => {
    return paginatedTemplates.filter((template) =>
      template.name
        .toLocaleLowerCase()
        .includes(searchString.toLocaleLowerCase() || "")
    );
  };
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchString(value);
  };
  const sortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const getTotalPages = () => {
    return Math.ceil(templates.length / templatePerPage);
  };
  const renderTemplates = (): JSX.Element => {
    if (loading) return <Loader message="Loading Templates..." />;
    if (!templates.length)
      return <Jumbotron message="No Templates Available" />;

    return <TemplateList templates={getSearchedTemplates()} />;
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
          <TemplateCounter category="All Templates" total={totalTemplates} />
        </div>

        {renderTemplates()}

        {getTotalPages() > 1 && !searchString ? (
          <Pagination
            totalPages={getTotalPages()}
            currentPage={currentPage}
            pageChangeHandler={handlePageChange}
          />
        ) : null}
      </div>
    </>
  );
};

export default Templates;
