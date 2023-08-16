import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "../src/App";

describe("App", () => {
  it("Renders App component", async () => {
    render(<App />, {wrapper: BrowserRouter})
    const element = await screen.findByTestId("main-layout");
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });
})