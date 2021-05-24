import React from "react";
import { render } from "@testing-library/react";

import Switch from "./Switch";
import { MySwitchProps } from "./Switch.types";

describe("Test Component", () => {
  let props: MySwitchProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Switch {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Switch");

    expect(component).toHaveTextContent("harvey was here");
  });
});
