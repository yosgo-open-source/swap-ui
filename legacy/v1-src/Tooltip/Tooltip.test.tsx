import React from "react";
import { render } from "@testing-library/react";

import Tooltip from "./Tooltip";
import { MyTooltipProps } from "./Tooltip.types";

describe("Test Component", () => {
  let props: MyTooltipProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Tooltip {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Tooltip");

    expect(component).toHaveTextContent("harvey was here");
  });
});
