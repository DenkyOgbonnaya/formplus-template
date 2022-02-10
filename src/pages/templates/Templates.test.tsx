import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import Templates from "./Templates";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: [
        {
          name: "Test",
          description: "Short description",
          link: "",
          category: ["Health", "Education"],
          created: "",
        },
        {
          name: "Test2",
          description: "Short description",
          link: "",
          category: ["Health"],
          created: "",
        },
        {
          name: "Tes3",
          description: "Short description",
          link: "",
          category: ["Health"],
          created: "",
        },
      ],
    }),
  },
}));
describe("<Templates", () => {
  it("Should show a list of templates", async () => {
    const { findAllByText } = render(<Templates />);
    const elements = await findAllByText("Short description");
    expect(elements.length).toBe(3);
  });
  it("Should show a search input to search templates", () => {
    const { getByPlaceholderText } = render(<Templates />);

    expect(getByPlaceholderText("Search Templates")).toBeInTheDocument();
  });
  it("Should show the correct number of sort input to filter the templates ", () => {
    const { getAllByTestId } = render(<Templates />);

    expect(getAllByTestId("custom-select").length).toBe(3);
  });
  it("Should show the category of template currently displayed ", () => {
    const { getByText } = render(<Templates />);

    expect(getByText("All Templates")).toBeInTheDocument();
  });
  it("Should show the total number of templates for the active category ", async () => {
    const { findByText } = render(<Templates />);
    const element = await findByText("3 templates");
    expect(element).toBeInTheDocument();
  });
});
