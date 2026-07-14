
import React from "react";
import { render } from "@testing-library/react";

import SWAPBanner from "./SWAPBanner";
import { SWAPBannerProps } from "./SWAPBanner.types";

describe("Test Component", () => {
  let props: SWAPBannerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SWAPBanner {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAPBanner");

    expect(component).toHaveTextContent("harvey was here");
  });
});
