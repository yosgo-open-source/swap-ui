import React from "react";
import { render } from "@testing-library/react";

import CheckBox from "./CheckBox";
import { CheckBoxProps } from "./CheckBox.types";

describe("Test Component", () => {
  let props: CheckBoxProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<CheckBox {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CheckBox");

    expect(component).toHaveTextContent("harvey was here");
  });
});
