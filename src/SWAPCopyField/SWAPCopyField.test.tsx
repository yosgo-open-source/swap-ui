
import React from "react";
import { render } from "@testing-library/react";

import SWAPCopyField from "./SWAPCopyField";
import { SWAPCopyFieldProps } from "./SWAPCopyField.types";

describe("Test Component", () => {
  let props: SWAPCopyFieldProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SWAPCopyField {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAPCopyField");

    expect(component).toHaveTextContent("harvey was here");
  });
});
