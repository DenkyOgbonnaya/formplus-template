import { render } from "@testing-library/react";
import TemplateCounter from "./TemplateCounter";

describe("<TemplateCounter />", () => {
  it("Should show the correct template category", () => {
    const { getByText } = render(
      <TemplateCounter category="Education" total={100} />
    );

    const templateCategory = getByText("Education");

    expect(templateCategory).toBeInTheDocument();
  });
  it("Should show the correct total number of categories", () => {
    const { getByText } = render(
      <TemplateCounter category="Education" total={100} />
    );

    const templateTotal = getByText("100 templates");

    expect(templateTotal).toBeInTheDocument();
  });
});
