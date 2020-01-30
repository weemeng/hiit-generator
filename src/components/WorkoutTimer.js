import React from "react";
import Timer from "./Timer";

class WorkoutTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total_min: 15,
      total_s: 0
    };
  }

  render() {
    return (
      <div>
        Total Time
        <Timer minutes={this.state.total_min} seconds={this.state.total_s} />
      </div>
    );
  }
}

export default WorkoutTimer;
