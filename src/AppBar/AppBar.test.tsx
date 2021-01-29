import React from "react";
import { render } from "@testing-library/react";

import AppBar from "./AppBar";
import { AppBarProps } from "./AppBar.types";

describe("Test Component", () => {
  let props: AppBarProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<AppBar {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("AppBar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
