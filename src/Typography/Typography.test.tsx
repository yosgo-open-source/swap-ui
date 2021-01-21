import React from "react";
import { render } from "@testing-library/react";

import Typography from "./Typography";
import { TypographyProps } from "./Typography.types";

describe("Test Component", () => {
  let props: TypographyProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Typography {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Typography");

    expect(component).toHaveTextContent("harvey was here");
  });
});
