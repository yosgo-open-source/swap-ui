import React from "react";
import { render } from "@testing-library/react";

import TextField from "./TextField";
import { TextFieldProps } from "./TextField.types";

describe("Test Component", () => {
  let props: TextFieldProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<TextField {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TextField");

    expect(component).toHaveTextContent("harvey was here");
  });
});
