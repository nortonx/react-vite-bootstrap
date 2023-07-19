import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Footer from "../../src/components/Footer"

describe("Footer", () => {
  it("should render the component and match snapshot", async () => {
    render(<Footer />, {wrapper: BrowserRouter})
    const element = await screen.findByTestId("footer");
    expect(element).toBeInTheDocument();
    expect(element).toMatchSnapshot();
  })
})