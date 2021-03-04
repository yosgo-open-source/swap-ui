import React from "react";
import { render } from "@testing-library/react";

import Chip from "./Chip";
import { ChipProps } from "./Chip.types";

describe("Test Component", () => {
  let props: ChipProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Chip {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Chip");

    expect(component).toHaveTextContent("harvey was here");
  });
});
