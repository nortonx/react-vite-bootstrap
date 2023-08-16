import { render, screen } from "@testing-library/react";

import Counter from "../../../src/components/text-analyzer/Counter";

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("Should render component and match snapshot", async () => {
    const counter = await screen.findByTestId("counter");
    expect(counter).toBeInTheDocument();
    expect(counter).toMatchSnapshot();
  })
})