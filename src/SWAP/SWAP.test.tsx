import React from "react";
import { render } from "@testing-library/react";

import SWAP from "./SWAP";
import { SWAPProps } from "./SWAP.types";

describe("Test Component", () => {
  let props: SWAPProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<SWAP {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAP");

    expect(component).toHaveTextContent("harvey was here");
  });
});
