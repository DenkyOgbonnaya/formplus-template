import { render } from "@testing-library/react";
import { SortFilters } from "components";
import { ISortState } from "sharable/interface";

describe("<SortFilters />", () => {
  it("Should show the correct filter label", () => {
    const mockFn = jest.fn();
    const sortState:ISortState = { order: "", date: "", category: "" };
    const { getByText } = render(
      <SortFilters sortHandler={mockFn} sortState={sortState} />
    );

    expect(getByText("Sort By:")).toBeInTheDocument();
  });
  it("Should show the correct number of filter inputs ", () => {
    const mockFn = jest.fn();
    const sortState:ISortState = { order: "", date: "", category: "" };
    const { getAllByTestId } = render(
      <SortFilters sortHandler={mockFn} sortState={sortState} />
    );

    expect(getAllByTestId("custom-select").length).toEqual(3);
  });
});
