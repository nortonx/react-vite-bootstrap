import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import TextAnalyzer from "../../src/routes/TextAnalyzer";

describe("TextAnalyzer route", () => {
  it("Should render the component and match snapshot", async () => {
    render(<TextAnalyzer />);
    const element = await screen.findByTestId("text-analyzer");
    expect(element).toBeInTheDocument();
    const textAnalyzer = renderer.create(<TextAnalyzer />);
    expect(textAnalyzer).toMatchSnapshot();
  })
})