import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import Home from "../../src/routes/Home";

describe("Home route", () => {
  it("Should render the component and match snapshot", async () => {
    render(<Home />);
    const element = await screen.findByTestId("home");
    expect(element).toBeInTheDocument();
    const home = renderer.create(<Home />);
    expect(home).toMatchSnapshot();
  });
})