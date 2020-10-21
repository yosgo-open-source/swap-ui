
import React from "react";
import { render } from "@testing-library/react";

import SWAPSpace from "./SWAPSpace";
import { SWAPSpaceProps } from "./SWAPSpace.types";

describe("Test Component", () => {
  let props: SWAPSpaceProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SWAPSpace {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAPSpace");

    expect(component).toHaveTextContent("harvey was here");
  });
});
