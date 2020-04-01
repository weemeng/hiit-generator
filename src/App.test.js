import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("<Home> should render", () => {
    const { getByLabelText } = render(<App />);
    const HomeComponent = getByLabelText("home");
    expect(HomeComponent).toBeInTheDocument();
  });
});
