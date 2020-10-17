// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Space from "./Space";
import { SpaceProps } from "./Space.types";

describe("Test Component", () => {
  let props: SpaceProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Space {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Space");

    expect(component).toHaveTextContent("harvey was here");
  });
});
