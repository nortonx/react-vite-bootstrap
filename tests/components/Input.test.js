import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Input from "../../src/components/Input";

describe("Input", () => {
  it("Should render and match snapshot", async () => {
    render(<Input />)
    const input = await screen.findByTestId("input");
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  })
})