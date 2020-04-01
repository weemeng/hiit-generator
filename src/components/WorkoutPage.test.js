import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("WorkoutPage", () => {
  test("Timers and navigation buttons should render when initialised", () => {
    const { getByLabelText } = render(<App />);
    const hmuButton = getByLabelText("hmu-button");
    fireEvent.click(hmuButton);
    const timeButton = getByLabelText("15-min-button");
    fireEvent.click(timeButton);
    const focusButton = getByLabelText("upper-body-button");
    fireEvent.click(focusButton);
    const generateButton = getByLabelText("generate-button");
    fireEvent.click(generateButton);
    const workoutTimer = getByLabelText("workout-timer");
    const exerciseTimer = getByLabelText("exercise-timer");
    const resetButton = getByLabelText("reset-button");
    const homeButton = getByLabelText("home-button");
    expect(resetButton).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(workoutTimer).toBeInTheDocument();
    expect(exerciseTimer).toBeInTheDocument();
  });
});
