import { render, screen } from "@testing-library/react";

import Input from "../../src/components/Input";

describe("Input", () => {
  it("Should render and match snapshot", async () => {
    render(<Input />)
    const input = await screen.findByTestId("input");
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  it("Should have label 'E-mail' when the prop is passed", async () => {
    render(<Input label="E-mail" />)
    const input = await screen.findByText("E-mail");
    expect(input).toBeInTheDocument();
  });

  it("Should have placeholder 'Add your e-mail' when passed as prop", async () => {
    render(<Input type="text" placeholder="Add your e-mail" />);
    const input = await screen.findByPlaceholderText("Add your e-mail");
    expect(input).toBeInTheDocument();
  })
});