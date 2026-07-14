import React from "react";
import { render } from "@testing-library/react";

import LandingPage from "./LandingPage";
import { LandingPageProps } from "./LandingPage.types";

describe("Test Component", () => {
  let props: LandingPageProps;

  beforeEach(() => {
    props = {
      foo: "bar",
    };
  });

  const renderComponent = () => render(<LandingPage {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("LandingPage");

    expect(component).toHaveTextContent("harvey was here");
  });
});
