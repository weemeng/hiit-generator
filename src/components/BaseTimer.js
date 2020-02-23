import React from "react";
const MILLISECONDS_IN_ONE_SECOND = 1000;
const ONE_MINUTE_IN_SECONDS = 60;

class BaseTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: this.props.minutes,
      seconds: this.props.seconds,
      duration: this.props.duration,
      startTime: this.props.startTime,
      isExerciseTimer: true,
      repeatedCount: this.props.repeatedCount
    };
  }
  componentDidMount() {
    let intervalTimer = this.state.isExerciseTimer
      ? this.setExerciseInterval()
      : this.setWorkoutInterval();
    clearInterval(intervalTimer);
  }

  setTimeToZero() {
    this.setState({
      minutes: 0,
      seconds: 0
    });
  }

  setExerciseInterval() {
    setInterval(() => {
      let currTime = Date.now();
      let startTime = this.state.startTime;
      let timeDuration = this.state.duration;
      let repeatCountdown = this.state.repeatedCount;
      let timeLeft =
        timeDuration - (currTime - startTime) / MILLISECONDS_IN_ONE_SECOND;

      this.setState({
        minutes: Math.floor(timeLeft / ONE_MINUTE_IN_SECONDS),
        seconds: Math.floor(timeLeft % ONE_MINUTE_IN_SECONDS)
      });

      if (timeLeft <= 1 && repeatCountdown > 0) {
        this.setState({
          seconds: this.props.seconds,
          minutes: this.props.minutes,
          startTime: Date.now(),
          repeatedCount: repeatCountdown-1
        });
      } else if (timeLeft <= 0 && repeatCountdown === 0) {
        this.setTimeToZero();
      }
    }, 1000);
  }
  setWorkoutInterval() {
    setInterval(() => {
      let currTime = Date.now();
      let startTime = this.state.startTime;
      let timeDuration = this.state.duration;
      let timeLeft =
        timeDuration - (currTime - startTime) / MILLISECONDS_IN_ONE_SECOND;

      this.setState({
        minutes: Math.floor(timeLeft / ONE_MINUTE_IN_SECONDS),
        seconds: Math.floor(timeLeft % ONE_MINUTE_IN_SECONDS)
      });

      if (timeLeft <= 0 && !this.state.isExerciseTimer) {
        this.setTimeToZero();
      }
    }, 1000);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        <h1>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      </div>
    );
  }
}
export default BaseTimer;
