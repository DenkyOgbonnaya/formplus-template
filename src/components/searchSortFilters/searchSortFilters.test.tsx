import { render } from "@testing-library/react";
import { ISortState } from "sharable/interface";
import SearchSortFilters from "./SearchSortFilters";

describe("<SortFilters />", () => {
  it("Should render the search iput", () => {
    const sortMockFn = jest.fn();
    const searchMockFn = jest.fn();
    const sortState:ISortState = { order: "", date: "", category: "" };
    const { getByPlaceholderText } = render(
      <SearchSortFilters
        sortHandler={sortMockFn}
        searchHandler={searchMockFn}
        searchPlacholder="Search Templates"
        sortState={sortState}
      />
    );

    expect(getByPlaceholderText("Search Templates")).toBeInTheDocument();
  });
  it("Should render the filter compomponents ", () => {
    const sortMockFn = jest.fn();
    const searchMockFn = jest.fn();
    const sortState:ISortState = { order: "", date: "", category:"" };
    const { getByText } = render(
      <SearchSortFilters
        sortHandler={sortMockFn}
        searchHandler={searchMockFn}
        sortState={sortState}
      />
    );

    expect(getByText("Sort By:")).toBeInTheDocument();
  });
});
