import { render, fireEvent } from "@testing-library/react";
import { Select as SelectInput, SelectOption } from "components";

describe("<SelectInput/>", () => {
  it("Should render the Select input component without crashing", () => {
    const placeholderText = "Category";
    const mockChangeHandler = jest.fn();
    const { getByTestId } = render(
      <SelectInput
        name="category"
        value=""
        placeHolder={placeholderText}
        changeHandler={mockChangeHandler}
        label="Category"
      >
        <SelectOption name="category" label="Health" value="Heath" />
      </SelectInput>
    );
    expect(getByTestId("select-header")).toBeInTheDocument();
  });

  it("Should render the select items on clicked", () => {
    const placeholderText = "Category";
    const mockSelectHandler = jest.fn();
    const { getByTestId, getByRole } = render(
      <SelectInput
        name="category"
        value=""
        placeHolder={placeholderText}
        changeHandler={mockSelectHandler}
        label="Category"
      >
        <SelectOption name="category" label="Health" value="Heath" />
      </SelectInput>
    );
    const selectInput = getByTestId("select-header") as HTMLDivElement;
    fireEvent.click(selectInput);
    expect(getByRole("list")).toBeInTheDocument();
  });
});
