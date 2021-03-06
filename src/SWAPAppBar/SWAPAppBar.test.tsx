
import React from "react";
import { render } from "@testing-library/react";

import SWAPAppBar from "./SWAPAppBar";
import { SWAPAppBarProps } from "./SWAPAppBar.types";

describe("Test Component", () => {
  let props: SWAPAppBarProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SWAPAppBar {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAPAppBar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
