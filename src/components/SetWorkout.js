import React from "react";
import Header from "./Header";

const HomeButton = props => {
  return <button onClick={props.goToHome}>Back</button>;
};

const GenerateButton = props => {
  return <button onClick={props.goToWorkout}>Generate</button>;
};

class SetWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      focus: "",
      toGenerate: false
    };
  }

  handleTimeClick = event => {
    this.setState({
      time: event.target.value
    });
  };

  handleFocusClick = event => {
    this.setState({
      focus: event.target.value
    });
  };

  toggleWorkoutPage = () => {
    this.setState = state => ({ toGenerate: state.toGenerate });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="workout-params" data-testid="set-workout-params">
          <h3>Set Workout</h3>
          <div className="setTime">
            <h5>Time</h5>
            <button value="15" onClick={this.handleTimeClick}>
              15min
            </button>
            <button value="25" onClick={this.handleTimeClick}>
              25min
            </button>
            <button value="45" onClick={this.handleTimeClick}>
              45min
            </button>
            <p>Time: {this.state.time}</p>
          </div>
          <div className="setFocus">
            <h5>Focus</h5>
            <button value="upper body" onClick={this.handleFocusClick}>
              upper body
            </button>
            <button value="lower body" onClick={this.handleFocusClick}>
              lower body
            </button>
            <button value="core" onClick={this.handleFocusClick}>
              core
            </button>
            <p>Focus: {this.state.focus}</p>
          </div>
          <hr></hr>
          <GenerateButton goToWorkout={this.props.triggerWorkoutState} />
          <hr></hr>
          <div>
            <HomeButton goToHome={this.props.triggerHomeState} />
          </div>
        </div>
      </div>
    );
  }
}

export default SetWorkout;
