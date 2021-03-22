import React from "react";
import { render } from "@testing-library/react";

import TaxTextField from "./TaxTextField";
import { TaxTextFieldProps } from "./TaxTextField.types";

describe("Test Component", () => {
  let props: TaxTextFieldProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<TaxTextField {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TaxTextField");

    expect(component).toHaveTextContent("harvey was here");
  });
});
