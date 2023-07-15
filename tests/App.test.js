import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import App from "../src/App";

describe("App", () => {
  it("Renders App component", async () => {
    render(<App />)
    const homeElement = await screen.findByTestId("home");
    expect(homeElement).toBeInTheDocument();
  });

  it("Should render and match snapshot", () => {
    const element = renderer.create(<App />);
    expect(element).toMatchSnapshot();
  })
})