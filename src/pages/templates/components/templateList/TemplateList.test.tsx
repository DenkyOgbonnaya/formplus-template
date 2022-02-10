import { render } from "@testing-library/react";
import { ITemplate } from "sharable/interface";
import TemplateList from "./TemplateList";

describe("<TemplateList />", () => {
  let templates: ITemplate[];
  beforeEach(() => {
    templates = [
      {
        name: "Test",
        description: "Short description",
        link: "",
        category: ["Health"],
        created: "",
      },
      {
        name: "Test",
        description: "Short description",
        link: "",
        category: ["Health"],
        created: "",
      },
    ];
  });
  it("Should show the correct number of templates", () => {
    const mockFn = jest.fn();
    const { getAllByText } = render(
      <TemplateList templates={templates} useHandler={mockFn} />
    );

    const templateNames = getAllByText(templates[0].name);

    expect(templateNames.length).toBe(2);
  });
});
