
import React from "react";
import { render } from "@testing-library/react";

import SWAPShare from "./SWAPShare";
import { SWAPShareProps } from "./SWAPShare.types";

describe("Test Component", () => {
  let props: SWAPShareProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SWAPShare {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAPShare");

    expect(component).toHaveTextContent("harvey was here");
  });
});
