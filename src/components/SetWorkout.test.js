import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import SetWorkout from "./SetWorkout";

describe("SetWorkout", () => {
  it("should render Header when initialised", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SetWorkout />
      </BrowserRouter>
    );
    const headerElement = getByText(/HIIT HARD GEN/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("should render Workout Parameters when initialised", () => {
    const { getByTestId } = render(<SetWorkout />);
    const paramsElement = getByTestId("set-workout-params");
    expect(paramsElement).toBeInTheDocument();
  });
});
