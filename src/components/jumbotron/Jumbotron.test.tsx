import { render } from "@testing-library/react";
import Jumbotron from "./Jumbotron";

describe("<Jumbotron />", () => {
  it("Should render without crashing", () => {
    const message = "";
    const { getByTestId } = render(<Jumbotron  message={message} />);

    const jumbotron = getByTestId("jumbotron-message");

    expect(jumbotron).toBeInTheDocument();
  });
  it("Should Jumbotron the correct message passed", () => {
    const message = "No templates found";
    const { getByTestId } = render(<Jumbotron  message={message} />);

    const jumbotron = getByTestId("jumbotron-message");

    expect(jumbotron.textContent).toBe(message);
  });
});
