import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import ExerciseTimer from "./ExerciseTimer.js";
import WorkoutTimer from "./WorkoutTimer.js";
const SECONDS_IN_ONE_MINUTE = 60;
const EXERCISE_DURATION = 5;
const EXERCISE_MIN = 0;

class WorkoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExerciseTimerZero: false
    };
  }

  isTimerZero = (min, sec) => {
    if (min === 0 && sec === 0) {
      this.setState({ isExerciseTimerZero: true });
      return true;
    } else {
      this.setState({ isExerciseTimerZero: false });
      return false;
    }
  };

  render() {
    const queries = new URLSearchParams(this.props.location.search);
    const time = queries.get("time");
    //const focus = queries.get("focus");
    const timeInMin = time / SECONDS_IN_ONE_MINUTE;
    const timeInSec = (time / SECONDS_IN_ONE_MINUTE) % timeInMin;

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

        <div className="timers">
          <div data-testid="exercise-timer">
            <ExerciseTimer
              totalMin={EXERCISE_MIN}
              totalSec={EXERCISE_DURATION}
              resetTimer={this.isTimerZero}
            />
          </div>
          <div data-testid="workout-timer">
            <WorkoutTimer totalMin={timeInMin} totalSec={timeInSec} />
          </div>
          <div>
            <Link to="/set-workout">Go back</Link>
          </div>
          <div>
            <Link to="/home">Go to Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutPage;
