import { render } from "@testing-library/react";
import { SortFilters } from "components";

describe("<SortFilters />", () => {
  it("Should show the correct filter label", () => {
    const mockFn = jest.fn();
    const { getByText } = render(<SortFilters sortHandler={mockFn} />);

    expect(getByText("Sort By:")).toBeInTheDocument();
  });
  it("Should show the correct number of filter inputs ", () => {
    const mockFn = jest.fn();
    const { getAllByTestId } = render(<SortFilters sortHandler={mockFn} />);

    expect(getAllByTestId("custom-select").length).toEqual(3);
  });
});
