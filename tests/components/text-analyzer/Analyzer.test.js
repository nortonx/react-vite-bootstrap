import { fireEvent, render, screen } from "@testing-library/react";

import Analyzer from "../../../src/components/text-analyzer/Analyzer";

describe("Analyzer", () => {
  beforeEach(() => {
    render(<Analyzer />);
  })
  it("Should render component and match snapshot", async () => {
    const analyzer = await screen.findByTestId("analyzer");
    expect(analyzer).toBeInTheDocument();
    expect(analyzer).toMatchSnapshot();
  });
})