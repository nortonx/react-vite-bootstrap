import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import Home from "../../src/routes/Home";

describe("Home route", () => {
  it("Should render the component", async () => {
    render(<Home />);
    const element = await screen.findByTestId("home");
    expect(element).toBeInTheDocument();
  });

  it("Should render and match snapshot", () => {
    const home = renderer.create(<Home />);
    expect(home).toMatchSnapshot();
  });
})