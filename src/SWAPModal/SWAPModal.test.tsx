// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SWAPModal from "./SWAPModal";
import { SWAPModalProps } from "./SWAPModal.types";

describe("Test Component", () => {
  let props: SWAPModalProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SWAPModal {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SWAPModal");

    expect(component).toHaveTextContent("harvey was here");
  });
});
