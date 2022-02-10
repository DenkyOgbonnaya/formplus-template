import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("<Loader />", () => {
  it("Should render without crashing", () => {
    const message = "";
    const { getByTestId } = render(<Loader message={message} />);

    const loader = getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });
  it("Should show the correct message while page is initializing", () => {
    const message = "Loading Templates...";
    const { getByText } = render(<Loader message={message} />);

    const loader = getByText(message);

    expect(loader).toBeInTheDocument();
  });
});
