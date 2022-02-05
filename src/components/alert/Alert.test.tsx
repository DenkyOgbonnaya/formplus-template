import { render } from "@testing-library/react";
import Alert from "./Alert";

describe("<Alert />", () => {
  it("Should render without crashing", () => {
    const message = "";
    const { getByTestId } = render(<Alert type="message" message={message} />);

    const alert = getByTestId("alert-message");

    expect(alert).toBeInTheDocument();
  });
  it("Should alert the correct message passed", () => {
    const message = "";
    const { getByTestId } = render(<Alert type="message" message={message} />);

    const alert = getByTestId("alert-message");

    expect(alert.textContent).toBe(message);
  });
});
