
import React from "react";
import { render } from "@testing-library/react";

import SWAPDialog from "./SWAPDialog";
import { SWAPDialogProps } from "./SWAPDialog.types";

describe("Test Component", () => {
  let props: SWAPDialogProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SWAPDialog {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAPDialog");

    expect(component).toHaveTextContent("harvey was here");
  });
});
