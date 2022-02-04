import { render } from "@testing-library/react";
import SearchSortFilters from "./SearchSortFilters";

describe("<SortFilters />", () => {
  it("Should render the search iput", () => {
    const sortMockFn = jest.fn();
    const searchMockFn = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchSortFilters
        sortHandler={sortMockFn}
        searchHandler={searchMockFn}
        searchPlacholder="Search Templates"
      />
    );

    expect(getByPlaceholderText("Search Templates")).toBeInTheDocument();
  });
  it("Should render the filter compomponents ", () => {
    const sortMockFn = jest.fn();
    const searchMockFn = jest.fn();
    const { getByText } = render(
      <SearchSortFilters
        sortHandler={sortMockFn}
        searchHandler={searchMockFn}
      />
    );

    expect(getByText("Sort By:")).toBeInTheDocument();
  });
});
