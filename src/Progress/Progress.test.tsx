import React from "react";
import { render } from "@testing-library/react";

import Progress from "./Progress";
import { MyProgressProps } from "./Progress.types";

describe("Test Component", () => {
  let props: MyProgressProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<Progress {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Progress");

    expect(component).toHaveTextContent("harvey was here");
  });
});
