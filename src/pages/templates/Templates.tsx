import {
  Alert,
  Jumbotron,
  Loader,
  Pagination,
  SearchInput,
  SortFilters,
} from "components";
import {
  ChangeEvent,
  FC,
  MouseEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import TemplateCounter from "./components/templateConter/TemplateCounter";
import TemplateList from "./components/templateList/TemplateList";
import { ISortState, ITemplate } from "sharable/interface";
import { handleGetRequest } from "services/axios";
import { GET_TASK_TEMPLATES } from "constants/api";

interface IState {
  currentPage: number;
  allTemplates: ITemplate[];
  templates: ITemplate[];
  loading: boolean;
  searchString: string;
  activeCategory: string;
  sortState: ISortState;
}

const Templates: FC = () => {
  const sortMap = {
    default: "Default",
    ascending: "Ascending",
    descending: "Descending",
  };
  const [currentPage, setCurrentPage] = useState<IState["currentPage"]>(1);
  // serves as the database for all templates withou side effect
  const [allTemplates, setAllTemplates] = useState<IState["allTemplates"]>([]);
  const [templates, setTemplates] = useState<IState["templates"]>([]);
  const [loading, setLoading] = useState<IState["loading"]>(false);
  const [searchString, setSearchString] = useState<IState["searchString"]>("");
  const [activeCategory, setActiveCategory] =
    useState<IState["activeCategory"]>("All");
  const [sortState, setSortState] = useState<IState["sortState"]>({
    order: sortMap.default,
    date: sortMap.default,
    category: "All",
  });

  const templatePerPage = 12;
  const startPoint = currentPage * templatePerPage - templatePerPage;
  const endPoint = startPoint + templatePerPage;
  const paginatedTemplates = templates.slice(startPoint, endPoint);
  const totalTemplates = templates.length;
  const alertMessage =
    "Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates";

  const filterCasesMap = {
    category: "category",
    order: "order",
    date: "date",
  };
  useEffect(() => {
    // For performance consideration, I will not be using redux store to store the templates data,
    // considering how large it is, and only needed in this page and can be Garbage collected locally on component unmount.
    // All lines of code that has to do with the redux store will be removed out on this file

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
  }, [allTemplates.length]);

  const getSearchedTemplates = (): ITemplate[] => {
    return paginatedTemplates?.filter((template) =>
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
        const categorizedTemplates = handleCategoryFilter(value, allTemplates);
        setTemplates(categorizedTemplates);
        setActiveCategory(value);
        // reset search and filter params
        setSortState((prev) => ({
          ...prev,
          order: sortMap.default,
          date: sortMap.default,
        }));
        resetToDefault();
        setSearchString("");

        break;
      case filterCasesMap.order: {
        let sortedTemplate: ITemplate[] = [];
        // reset the date filter if active
        if (sortState.date !== sortMap.default) {
          const categorizedTemplates = handleCategoryFilter(
            activeCategory,
            allTemplates
          );
          sortedTemplate = handleNameSort(value, categorizedTemplates);
        } else {
          sortedTemplate = handleNameSort(value, templates);
        }
        setTemplates(sortedTemplate);
        setSortState((prev) => ({
          ...prev,
          order: value,
          date: sortMap.default,
        }));
        resetToDefault();
        break;
      }
      case filterCasesMap.date: {
        let sortedTemplate: ITemplate[] = [];
        // reset the name filter if active
        if (sortState.order !== sortMap.default) {
          const categorizedTemplates = handleCategoryFilter(
            activeCategory,
            allTemplates
          );
          sortedTemplate = handleDateSort(value, categorizedTemplates);
        } else {
          sortedTemplate = handleDateSort(value, templates);
        }
        setTemplates(sortedTemplate);
        setSortState((prev) => ({
          ...prev,
          date: value,
          order: sortMap.default,
        }));
        resetToDefault();
        break;
      }

      default:
        return;
    }
  };

  const handleCategoryFilter = useMemo(() => {
    return (category: string, templates: ITemplate[]): ITemplate[] => {
      if (category === "All") {
        return allTemplates;
      } else {
        const categorizedTEmplates = templates.filter((template) =>
          template.category.includes(category)
        );
        return categorizedTEmplates;
      }
    };
  }, [allTemplates]);

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
  const sortNameAscending = useMemo(() => {
    return (templates: ITemplate[]): ITemplate[] => {
      const templatesTurple: [ITemplate, string][] = templates.map(
        (template) => [template, template.name.toUpperCase()]
      );
      templatesTurple.sort((first, second) =>
        first[1].localeCompare(second[1])
      );

      return templatesTurple.map((turple) => turple[0]);
    };
  }, []);

  // template name in descending order using the Schwartzian transformation
  const sortNameDescending = useMemo(() => {
    return (templates: ITemplate[]): ITemplate[] => {
      const templatesTurple: [ITemplate, string][] = templates.map(
        (template) => [template, template.name.toUpperCase()]
      );
      templatesTurple.sort((first, second) =>
        second[1].localeCompare(first[1])
      );

      return templatesTurple.map((turple) => turple[0]);
    };
  }, []);

  // sort template date in ascending order using the Schwartzian transformation
  const sortDateAscending = useMemo(() => {
    return (templates: ITemplate[]): ITemplate[] => {
      const templatesTurple: [ITemplate, Date][] = templates.map((template) => [
        template,
        new Date(template.created),
      ]);
      templatesTurple.sort(
        (first, second) => first[1].getTime() - second[1].getTime()
      );

      return templatesTurple.map((turple) => turple[0]);
    };
  }, []);

  // sort template date in descending order using the Schwartzian transformation
  const sortDateDescending = useMemo(() => {
    return (templates: ITemplate[]): ITemplate[] => {
      const templatesTurple: [ITemplate, Date][] = templates.map((template) => [
        template,
        new Date(template.created),
      ]);
      templatesTurple.sort(
        (first, second) => second[1].getTime() - first[1].getTime()
      );

      return templatesTurple.map((turple) => turple[0]);
    };
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getTotalPages = () => {
    return Math.ceil(templates.length / templatePerPage);
  };

  const handleTemplateUse = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const renderTemplates = (): JSX.Element => {
    if (loading) return <Loader message="Loading Templates..." />;
    if (!templates.length)
      return <Jumbotron message="No Templates Available" />;

    return (
      <TemplateList
        templates={getSearchedTemplates()}
        useHandler={handleTemplateUse}
      />
    );
  };

  return (
    <>
      <div className=" p-5 sm:p-3 lg:px-[7.25rem] lg:py-[4.95rem]">
        <div className="flex flex-col justify-between w-full sm:flex-row flex-wrap">
          <div className="w-full sm:w-[25%] md:w-[25%] lg:w-[20%] mb-4 self-center">
            <SearchInput
              searchHandler={searchHandler}
              placeHolder="Search Templates"
              value={searchString}
            />
          </div>
          <div className=" mb-4 sm:w-[70%] md:w-[70%] lg:w-[50%]">
            <SortFilters sortHandler={filterHandler} sortState={sortState} />
          </div>
        </div>
        <div className=" mt-3 mb-10 sm:my-20">
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
