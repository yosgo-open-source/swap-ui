import React from "react";
import { render } from "@testing-library/react";

import DatePicker from "./DatePicker";
import { DatePickerProps } from "./DatePicker.types";

describe("Test Component", () => {
  let props: DatePickerProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<DatePicker {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("DatePicker");

    expect(component).toHaveTextContent("harvey was here");
  });
});
