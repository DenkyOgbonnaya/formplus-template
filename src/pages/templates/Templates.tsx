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
  const [allTemplates, setAllTemplates] = useState<ITemplate[]>([]);
  const [templates, setTemplates] = useState<ITemplate[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  // const { templates, loading } = useAppSelector(({ templates }) => templates);
  // const dispatch = useAppDispatch();

  const templatePerPage = 12;
  const startPoint = currentPage * templatePerPage - templatePerPage;
  const endPoint = startPoint + templatePerPage;
  const paginatedTemplates = templates.slice(startPoint, endPoint);
  const totalTemplates = templates.length;
  const alertMessage =
    "Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates";
  const sortMap = {
    default: "Default",
    ascending: "Ascending",
    descending: "Descending",
  };
  const filterCasesMap = {
    category: "category",
    order: "order",
    date: "date",
  };
  useEffect(() => {
    // For performance consideration, I will not be using redux store to store the templates data,
    // considering how large it is, and only needed in this page and can be Garbage collected locally on component unmount.
    // All lines of code that has to do with the redux store will be commented out on this file
    // dispatch(fetchFormTemplates());

    (async () => {
      if (!allTemplates.length) {
        setLoading(true);
        try {
          const data = await handleGetRequest<ITemplate[]>(GET_TASK_TEMPLATES);
          setTemplates(data);
          setAllTemplates(data);
        } catch {
        } finally {
          setLoading(false);
        }
      }
    })();
  }, []);
  // listen for category change
  // useEffect(() => {
  //   const categorizedTEmplates = allTemplates.filter((template) =>
  //   template.category.includes(activeCategory)
  // );
  // setTemplates(categorizedTEmplates)
  // }, [activeCategory])
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
  const filterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case filterCasesMap.category:
        const categorizedTemplates = handleCategoryFilter(value);
        setTemplates(categorizedTemplates);
        resetToDefault();
        setActiveCategory(value);
        break;
      case filterCasesMap.order: {
        const sortedTemplate = handleNameSort(value, allTemplates);
        setTemplates(sortedTemplate);
        resetToDefault();
        break;
      }
      case filterCasesMap.date: {
        const sortedTemplate = handleDateSort(value, allTemplates);
        setTemplates(sortedTemplate);
        resetToDefault();
        break;
      }

      default:
        return;
    }
  };
  const handleCategoryFilter = (category: string): ITemplate[] => {
    if (category === "All") {
      return allTemplates;
    } else {
      const categorizedTEmplates = allTemplates.filter((template) =>
        template.category.includes(category)
      );
      return categorizedTEmplates;
    }
  };

  const resetToDefault = () => {
    setCurrentPage(1);
  };

  const handleNameSort = (
    order: string,
    templates: ITemplate[]
  ): ITemplate[] => {
    let sortedTemplates: ITemplate[] = [];
    if (order === sortMap.ascending) {
      sortedTemplates = sortNameAscending(templates);
    } else if (order === sortMap.descending) {
      sortedTemplates = sortNameDescending(templates);
    } else {
      return allTemplates;
    }
    return sortedTemplates;
  };

  const handleDateSort = (
    order: string,
    templates: ITemplate[]
  ): ITemplate[] => {
    let sortedTemplates: ITemplate[] = [];
    if (order === sortMap.ascending) {
      sortedTemplates = sortDateAscending(templates);
    } else if (order === sortMap.descending) {
      sortedTemplates = sortDateDescending(templates);
    } else {
      return allTemplates;
    }
    return sortedTemplates;
  };

  // template name in ascending order using the Schwartzian transformation
  const sortNameAscending = (templates: ITemplate[]): ITemplate[] => {
    const templatesTurple: [ITemplate, string][] = templates.map((template) => [
      template,
      template.name.toUpperCase(),
    ]);
    templatesTurple.sort((first, second) => first[1].localeCompare(second[1]));

    return templatesTurple.map((turple) => turple[0]);
  };

  // template name in descending order using the Schwartzian transformation
  const sortNameDescending = (templates: ITemplate[]): ITemplate[] => {
    const templatesTurple: [ITemplate, string][] = templates.map((template) => [
      template,
      template.name.toUpperCase(),
    ]);
    templatesTurple.sort((first, second) => second[1].localeCompare(first[1]));

    return templatesTurple.map((turple) => turple[0]);
  };

  // sort template date in ascending order using the Schwartzian transformation
  const sortDateAscending = (templates: ITemplate[]): ITemplate[] => {
    const templatesTurple: [ITemplate, Date][] = templates.map((template) => [
      template,
      new Date(template.created),
    ]);
    templatesTurple.sort(
      (first, second) => first[1].getTime() - second[1].getTime()
    );

    return templatesTurple.map((turple) => turple[0]);
  };

  // sort template date in descending order using the Schwartzian transformation
  const sortDateDescending = (templates: ITemplate[]): ITemplate[] => {
    const templatesTurple: [ITemplate, Date][] = templates.map((template) => [
      template,
      new Date(template.created),
    ]);
    templatesTurple.sort(
      (first, second) => second[1].getTime() - first[1].getTime()
    );

    return templatesTurple.map((turple) => turple[0]);
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
          sortHandler={filterHandler}
          searchHandler={searchHandler}
          searchPlacholder="Search Template"
        />
        <div className="my-20">
          <Alert type="message" message={alertMessage} />
        </div>
        <div className="mb-7">
          <TemplateCounter
            category={`${activeCategory} Templates`}
            total={totalTemplates}
          />
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
