import React from "react";
import { render } from "@testing-library/react";

import IconButton from "./IconButton";
import { MyIconButtonProps } from "./IconButton.types";

describe("Test Component", () => {
  let props: MyIconButtonProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<IconButton {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("IconButton");

    expect(component).toHaveTextContent("harvey was here");
  });
});
