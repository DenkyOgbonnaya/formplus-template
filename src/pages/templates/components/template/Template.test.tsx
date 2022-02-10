import { render, fireEvent } from "@testing-library/react";
import { ITemplate } from "sharable/interface";
import Template from "./Template";

describe("<Template />", () => {
  let template: ITemplate;
  beforeEach(() => {
    template = {
      name: "Test",
      description: "Short description",
      link: "",
      category: ["Health"],
      created: "",
    };
  });
  it("Should show the correct template name", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Template template={template} useHandler={mockFn} />
    );

    const templateName = getByText(template.name);

    expect(templateName).toBeInTheDocument();
  });
  it("Should show the correct template description", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Template template={template} useHandler={mockFn} />
    );

    const templateDescription = getByText(`${template.description}`);

    expect(templateDescription).toBeInTheDocument();
  });
  it("Should show the button to use template", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Template template={template} useHandler={mockFn} />
    );

    const useButton = getByText("Use Template");

    expect(useButton).toBeInTheDocument();
  });

  it("Should be able to click the use template button", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Template template={template} useHandler={mockFn} />
    );

    const useButton = getByText("Use Template");
    fireEvent.click(useButton);

    expect(mockFn).toHaveBeenCalled();
  });
});
