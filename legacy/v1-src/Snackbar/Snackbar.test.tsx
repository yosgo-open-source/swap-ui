import React from "react";
import { render } from "@testing-library/react";

import Snackbar from "./Snackbar";
import { ContainerProps } from "./Snackbar.types";

describe("Test Component", () => {
  let props: ContainerProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Snackbar {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Snackbar");

    expect(component).toHaveTextContent("harvey was here");
  });
});
