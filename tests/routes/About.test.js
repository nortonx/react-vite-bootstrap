import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import About from "../../src/routes/About";

describe("About route", () => {
  it("Should render the component and update snapshot", async () => {
    render(<About />);
    const element = await screen.findByTestId("about");
    expect(element).toBeInTheDocument();
    const about = renderer.create(<About />);
    expect(about).toMatchSnapshot();
  });
})