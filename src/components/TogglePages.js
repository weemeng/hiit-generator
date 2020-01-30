import React from "react";
import Home from "./Home";
import SetWorkout from "./SetWorkout";
import WorkoutPage from "./WorkoutPage";

class TogglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageStatus: "default",
      time: 0,
      focus: ""
    };
  }

  triggerHomeState = () => {
    this.setState({
      pageStatus: "default"
    });
  };

  triggerSetWorkoutState = props => {
    this.setState({
      pageStatus: 1
    });
  };

  triggerWorkoutState = () => {
    this.setState({
      pageStatus: 2
    });
  };

  render() {
    switch (this.state.pageStatus) {
      case 1:
        return (
          <SetWorkout
            triggerHomeState={this.triggerHomeState}
            triggerWorkoutState={this.triggerWorkoutState}
          />
        );
      case 2:
        return (
          <WorkoutPage
            triggerHomeState={this.triggerHomeState}
            triggerSetWorkoutState={this.triggerSetWorkoutState}
            updateTime={this.state.time}
          />
        );
      default:
        return <Home triggerSetWorkoutState={this.triggerSetWorkoutState} />;
    }
  }
}

export default TogglePage;
