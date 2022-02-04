import { render, fireEvent } from "@testing-library/react";
import { SearchInput } from "components";

describe("<SearchInput/>", () => {
  it("Should render the Search input component without crashing", () => {
    const placeholderText = "Search Templates";
    const mockSearchHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput
        placeHolder={placeholderText}
        searchHandler={mockSearchHandler}
      />
    );
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
  it("Should show the correct placeholder text", () => {
    const placeholderText = "Search Templates";
    const mockSearchHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput
        placeHolder={placeholderText}
        searchHandler={mockSearchHandler}
      />
    );
    const searchInput = getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;
    expect(searchInput.placeholder).toEqual(placeholderText);
  });

  it("Should call the search handler on input change", () => {
    const placeholderText = "Search Templates";
    const mockSearchHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput
        placeHolder={placeholderText}
        searchHandler={mockSearchHandler}
      />
    );
    const searchInput = getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(mockSearchHandler).toHaveBeenCalled();
  });

  it("Should show the correct text entered", () => {
    const placeholderText = "Search Templates";
    const inputValue = "Agriculture";
    const mockSearchHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput
        placeHolder={placeholderText}
        searchHandler={mockSearchHandler}
      />
    );
    const searchInput = getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: inputValue } });

    expect(searchInput.value).toEqual(inputValue);
  });
});
