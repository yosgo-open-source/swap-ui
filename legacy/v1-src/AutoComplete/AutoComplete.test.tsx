import React from "react";
import { render } from "@testing-library/react";

import AutoComplete from "./AutoComplete";
import { MyAutoCompleteProps } from "./AutoComplete.types";

describe("Test Component", () => {
  let props: MyAutoCompleteProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<AutoComplete {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("AutoComplete");

    expect(component).toHaveTextContent("harvey was here");
  });
});
