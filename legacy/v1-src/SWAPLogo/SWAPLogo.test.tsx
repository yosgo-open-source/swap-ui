
import React from "react";
import { render } from "@testing-library/react";

import SWAPLogo from "./SWAPLogo";
import { SWAPLogoProps } from "./SWAPLogo.types";

describe("Test Component", () => {
  let props: SWAPLogoProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SWAPLogo {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAPLogo");

    expect(component).toHaveTextContent("harvey was here");
  });
});
