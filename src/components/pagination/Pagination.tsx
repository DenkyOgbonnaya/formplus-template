import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import { FC } from "react";

interface IProps {
  totalPages: number;
  currentPage: number;
  pageChangeHandler: (pageNumber: number) => void;
}
const Pagination: FC<IProps> = ({
  totalPages,
  currentPage,
  pageChangeHandler,
}) => {
  const FIRST_PAGE = 1;
  const PAGE_DIRECTION = {
    next: 1,
    previous: -1,
  };
  const handlePageChange = (direction: number) => {
    let pageNumber = 1;
    // get the next or previous page
    if (currentPage > FIRST_PAGE || currentPage < totalPages) {
      pageNumber = currentPage + direction;

      pageChangeHandler(pageNumber);
    }
  };
  const hasNext = (): boolean => {
    return currentPage < totalPages;
  };
  const hasPrevious = (): boolean => {
    return currentPage > FIRST_PAGE;
  };
  return (
    <div className="flex justify-between">
      <div>
        <button
          className="flex text-[color:var(--dark)] text-lg font-semibold font-heading"
          onClick={() => handlePageChange(PAGE_DIRECTION.previous)}
        >
          {hasPrevious() && <ChevronLeftIcon className="w-5 h-5 self-center" />}
          Previous{" "}
        </button>
      </div>
      <div className="flex">
        <div className="w-8 h-8 rounded flex justify-center items-center border border-solid border-[color:var(--dark)] p-3 bg-white mr-3 ">
          {" "}
          <span className="text-[color:var(--dark)] text-lg font-semibold font-heading">
            {currentPage}
          </span>{" "}
        </div>
        <p className="self-center text-[color:var(--dark)] text-lg font-semibold font-heading">
          of {totalPages}
        </p>
      </div>
      <div>
        <button
          className="flex text-[color:var(--dark)] text-lg font-semibold font-heading"
          onClick={() => handlePageChange(PAGE_DIRECTION.next)}
        >
          Next{" "}
          {hasNext() && <ChevronRightIcon className="w-5 h-5 self-center" />}{" "}
        </button>
      </div>
    </div>
  );
};

export default Pagination;