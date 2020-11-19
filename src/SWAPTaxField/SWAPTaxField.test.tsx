
import React from "react";
import { render } from "@testing-library/react";

import SWAPTaxField from "./SWAPTaxField";
import { SWAPTaxFieldProps } from "./SWAPTaxField.types";

describe("Test Component", () => {
  let props: SWAPTaxFieldProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SWAPTaxField {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAPTaxField");

    expect(component).toHaveTextContent("harvey was here");
  });
});
