import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import Timer from "./Timer.js";

const WorkoutPage = () => {
  return (
    <div>
      <Header />
      <div data-testid="exercise-card">
        <div className="gif">
          <iframe
            src="https://giphy.com/embed/ZA68nmuNOXBecacY4Z"
            className="giphy-embed"
            allowFullScreen
            title="push-up-gif"
          ></iframe>
          <br></br>
          <span>
            <a href="https://giphy.com/gifs/8fit-workout-hiit-exercises-ZA68nmuNOXBecacY4Z">
              via GIPHY
            </a>
          </span>
          <h3>PUSH UPS</h3>
        </div>
      </div>
      <div data-testid="exercise-timer">
        <Timer />
      </div>
      <div data-testid="workout-timer">
        <Timer />
      </div>
      <div>
        <Link to="/">BACK</Link>
      </div>
    </div>
  );
};

export default WorkoutPage;
