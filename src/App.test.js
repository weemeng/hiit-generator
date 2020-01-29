import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render Home when initialised", () => {
    const { getByTestId } = render(<App />);
    const homeComponent = getByTestId("home");
    expect(homeComponent).toBeInTheDocument();
  });
});
