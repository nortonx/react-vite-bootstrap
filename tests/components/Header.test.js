import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Header from "../../src/components/Header"

describe("Header", () => {
  it("should render the component and match snapshot", async () => {
    render(<Header />, {wrapper: BrowserRouter})
    const element = await screen.findByTestId("header");
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  });
});