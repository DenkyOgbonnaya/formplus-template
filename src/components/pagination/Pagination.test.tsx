import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("<Pagination />", () => {
  it("Should render without crashing", () => {
    const pageChangeHandler = jest.fn();
    const { getByTestId } = render(
      <Pagination
        totalPages={10}
        currentPage={1}
        pageChangeHandler={pageChangeHandler}
      />
    );

    const pagination = getByTestId("pagination");

    expect(pagination).toBeInTheDocument();
  });
  it("Should show the current page number", () => {
    const pageChangeHandler = jest.fn();
    const { getByText } = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        pageChangeHandler={pageChangeHandler}
      />
    );

    const currentPageNum = getByText("5");

    expect(currentPageNum).toBeInTheDocument();
  });
  it("Should show the total page numbers available", () => {
    const pageChangeHandler = jest.fn();
    const { getByText } = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        pageChangeHandler={pageChangeHandler}
      />
    );

    const totalPageNum = getByText("of 10");

    expect(totalPageNum).toBeInTheDocument();
  });
  it("Should show a button to move to the next page", () => {
    const pageChangeHandler = jest.fn();
    const { getByText } = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        pageChangeHandler={pageChangeHandler}
      />
    );

    const nextBtn = getByText("Next");

    expect(nextBtn).toBeInTheDocument();
  });
  it("Should show a button to move to the previous page", () => {
    const pageChangeHandler = jest.fn();
    const { getByText } = render(
      <Pagination
        totalPages={10}
        currentPage={5}
        pageChangeHandler={pageChangeHandler}
      />
    );

    const prevBtn = getByText("Previous");

    expect(prevBtn).toBeInTheDocument();
  });
  it("Should be able to click the next button", () => {
    const pageChangeHandler = jest.fn();
    const currentPage = 5;
    const { getByText } = render(
      <Pagination
        totalPages={10}
        currentPage={currentPage}
        pageChangeHandler={pageChangeHandler}
      />
    );

    const nextBtn = getByText("Next");
    fireEvent.click(nextBtn);

    expect(pageChangeHandler).toHaveBeenCalled();
  });
  it("Should be able to click the prev button", () => {
    const pageChangeHandler = jest.fn();
    const currentPage = 5;
    const { getByText } = render(
      <Pagination
        totalPages={10}
        currentPage={currentPage}
        pageChangeHandler={pageChangeHandler}
      />
    );

    const prevBtn = getByText("Previous");
    fireEvent.click(prevBtn);

    expect(pageChangeHandler).toHaveBeenCalled();
  });
  it("Should not be able to click the next button when on the last page", () => {
    const pageChangeHandler = jest.fn();
    const totalPages = 10;
    const { getByText } = render(
      <Pagination
        totalPages={10}
        currentPage={totalPages}
        pageChangeHandler={pageChangeHandler}
      />
    );

    const nextBtn = getByText("Next");
    fireEvent.click(nextBtn);

    expect(pageChangeHandler).not.toHaveBeenCalled();
  });
  it("Should not be able to click the prev button when on the first page", () => {
    const pageChangeHandler = jest.fn();
    const totalPages = 10;
    const { getByText } = render(
      <Pagination
        totalPages={10}
        currentPage={1}
        pageChangeHandler={pageChangeHandler}
      />
    );

    const prevBtn = getByText("Previous");
    fireEvent.click(prevBtn);

    expect(pageChangeHandler).not.toHaveBeenCalled();
  });
});
