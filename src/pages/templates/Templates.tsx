import { Alert, Pagination } from "components";
import SearchSortFilters from "components/searchSortFilters/SearchSortFilters";
import { ChangeEvent, FC, useState } from "react";
import { ITemmplate } from "./components/template/Template";
import TemplateCounter from "./components/templateConter/TemplateCounter";
import TemplateList from "./components/templateList/TemplateList";

const Templates: FC = () => {
  const [currentPage] = useState<number>(1);
  const [totalPages] = useState<number>(14);
  const alertMessage =
    "Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates";
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const sortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event);
  };

  const handlePageChange = (pageNumber: number) => {
    console.log(pageNumber);
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
        <TemplateList temlates={templates} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          pageChangeHandler={handlePageChange}
        />
      </div>
    </>
  );
};

const templates: ITemmplate[] = [
  {
    id: 1,
    title: "Alumni Membership Form Template",
    description:
      "Engage your alumni network better with this alumni registration form template. Embed this in your website",
  },
  {
    id: 2,
    title: "Alumni Membership Form Template",
    description:
      "Engage your alumni network better with this alumni registration form template. Embed this in your website",
  },
  {
    id: 3,
    title: "Alumni Membership Form Template",
    description:
      "Engage your alumni network better with this alumni registration form template. Embed this in your website",
  },
  {
    id: 4,
    title: "Alumni Membership Form Template",
    description:
      "Engage your alumni network better with this alumni registration form template. Embed this in your website",
  },
  {
    id: 5,
    title: "Alumni Membership Form Template",
    description:
      "Engage your alumni network better with this alumni registration form template. Embed this in your website",
  },
  {
    id: 6,
    title: "Alumni Membership Form Template",
    description:
      "Engage your alumni network better with this alumni registration form template. Embed this in your website",
  },
  {
    id: 7,
    title: "Alumni Membership Form Template",
    description:
      "Engage your alumni network better with this alumni registration form template. Embed this in your website",
  },
  {
    id: 8,
    title: "Alumni Membership Form Template",
    description:
      "Engage your alumni network better with this alumni registration form template. Embed this in your website",
  },
];

export default Templates;
