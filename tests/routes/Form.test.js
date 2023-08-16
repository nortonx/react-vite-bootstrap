import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import Form from "../../src/routes/Form";

describe("Form route", () => {
  it("Should render the component and update snapshot", async () => {
    render(<Form />);
    const element = await screen.findByTestId("form");
    expect(element).toBeInTheDocument();
    const form = renderer.create(<Form />);
    expect(form).toMatchSnapshot();
  });
})