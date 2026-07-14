import React from "react";
import { render } from "@testing-library/react";

import Paper from "./Paper";
import { MyPaperProps } from "./Paper.types";

describe("Test Component", () => {
  let props: MyPaperProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Paper {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Paper");

    expect(component).toHaveTextContent("harvey was here");
  });
});
