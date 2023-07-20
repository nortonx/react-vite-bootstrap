import { render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";

import Button from "../../src/components/Button";

describe("Button", () => {
  it("should render and match snapshot", async () => {
    render(<Button />)
    const button = await screen.findByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });
});