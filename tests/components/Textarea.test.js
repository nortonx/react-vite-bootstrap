import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import Textarea from "../../src/components/Textarea";

describe("Textarea", () => {
  
  it("Should render component and match snapshot", async () => {
    const onChangeText = jest.fn();
    render(<Textarea label="New Label" onChangeText={onChangeText} />);
    const textarea = await screen.findByTestId("textarea");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toMatchSnapshot();
  });

  it("Should fire event when text is changed", async () => {
    const onChangeText = jest.fn();
    render(<Textarea label="New Label" onChangeText={onChangeText} />);
    const textarea = await screen.findByTestId("textarea");
    fireEvent.change(textarea, { target: {value: "Lorem ipsum"}})
    expect(onChangeText).toHaveBeenCalledTimes(1)
  })
})