import { render, screen } from "@testing-library/react";
import Button from "../../src/components/Button";

describe("Button", () => {
  it("should render and match snapshot", async () => {
    render(<Button />);
    const button = await screen.findByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });

  it("Should have text 'Main Button' when passed as prop", async () => {
    render(<Button text="Main Button" />);
    const button = await screen.findByText("Main Button");
    expect(button).toBeInTheDocument();
  });
});