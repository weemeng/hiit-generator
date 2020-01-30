import React from "react";
import Header from "./Header.js";
import Timer from "./Timer.js";
import WorkoutTimer from "./WorkoutTimer.js";

const HomeButton = props => {
  return <button onClick={props.goToHome}>Back to Home</button>;
};

const SetWorkoutButton = props => {
  return <button onClick={props.goToSetWorkout}>Back to Set Workout</button>;
};

class WorkoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
            <Timer minutes="0" seconds="1" />
          </div>
          <div data-testid="workout-timer">
            <WorkoutTimer />
          </div>
          <div>
            <SetWorkoutButton
              goToSetWorkout={this.props.triggerSetWorkoutState}
            />
          </div>
          <div>
            <HomeButton goToHome={this.props.triggerHomeState} />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutPage;
