import React from "react";
import Timer from "./Timer";

class WorkoutTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTime: 0,
      totalMin: this.props.totalMin,
      totalSec: this.props.totalSec
    };
  }

  render() {
    const { totalMin, totalSec } = this.state;
    return (
      <div>
        Total Time Remaining
        <Timer minutes={totalMin} seconds={totalSec} />
      </div>
    );
  }
}

export default WorkoutTimer;
