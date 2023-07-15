import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import About from "../../src/routes/About";

describe("About route", () => {
  it("Should render the component", async () => {
    render(<About />);
    const element = await screen.findByTestId("about");
    expect(element).toBeInTheDocument();
  });

  it("Should render and match snapshot", () => {
    const about = renderer.create(<About />);
    expect(about).toMatchSnapshot();
  });
})