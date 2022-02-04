import { render, fireEvent } from "@testing-library/react";
import { SelectInput } from "components";

describe("<SelectInput/>", () => {
  it("Should render the Select input component without crashing", () => {
    const placeholderText = "Category";
    const mockChangeHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <SelectInput
        name="category"
        value=""
        placeHolder={placeholderText}
        changeHandler={mockChangeHandler}
        label="Category"
      >
        <option value="test">Test</option>
      </SelectInput>
    );
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it("Should call the select handler on input change", () => {
    const placeholderText = "Category";
    const mockSelectHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <SelectInput
        name="category"
        value=""
        placeHolder={placeholderText}
        changeHandler={mockSelectHandler}
        label="Category"
      >
        <option value="test">Test</option>
      </SelectInput>
    );
    const selectInput = getByPlaceholderText(
      placeholderText
    ) as HTMLInputElement;
    fireEvent.change(selectInput, { target: { value: "test" } });
    expect(mockSelectHandler).toHaveBeenCalled();
  });

  it("Should show the correct selected", () => {
    const placeholderText = "Category";
    const selectValue = "Test2";
    const mockSearchHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <SelectInput
        name="category"
        value=""
        placeHolder={placeholderText}
        changeHandler={mockSearchHandler}
        label="Category"
      >
        <option value="Test">Test</option>
        <option value="Test2">Test2</option>
      </SelectInput>
    );
    const selectInput = getByPlaceholderText(
      placeholderText
    ) as HTMLSelectElement;
    fireEvent.change(selectInput, { target: { value: selectValue } });

    expect(selectInput.value).toEqual(selectValue);
  });

  it("Should the correct label ", () => {
    const placeholderText = "Category";
    const mockChangeHandler = jest.fn();
    const { getByText } = render(
      <SelectInput
        name="category"
        value=""
        placeHolder={placeholderText}
        changeHandler={mockChangeHandler}
        label="Category"
      >
        <option value="test">Test</option>
      </SelectInput>
    );
    expect(getByText("Category")).toBeInTheDocument();
  });
});
