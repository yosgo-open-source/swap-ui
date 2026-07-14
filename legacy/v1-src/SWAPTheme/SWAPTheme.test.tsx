
import React from "react";
import { render } from "@testing-library/react";

import SWAPTheme from "./SWAPTheme";
import { SWAPThemeProps } from "./SWAPTheme.types";

describe("Test Component", () => {
  let props: SWAPThemeProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SWAPTheme {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAPTheme");

    expect(component).toHaveTextContent("harvey was here");
  });
});
