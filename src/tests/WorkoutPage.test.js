import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import WorkoutPage from "../components/WorkoutPage";

describe("WorkoutPage", () => {
  it("should render Timer when initialised", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <WorkoutPage />
      </BrowserRouter>
    );
    const exerciseTimer = getByTestId("exercise-timer");
    expect(exerciseTimer).toBeInTheDocument();
  });
});
