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
      isExerciseTimer: this.props.isExerciseTimer,
      repeatedCount: this.props.repeatedCount
    };
    this.intervalId = 0;
  }
  componentDidMount() {
    this.intervalId = this.state.isExerciseTimer
      ? this.setExerciseInterval()
      : this.setWorkoutInterval();
  }

  setTimeToZero() {
    this.setState({
      minutes: 0,
      seconds: 0
    });
    clearInterval(this.intervalId);
  }

  changeTimerState = (currTime, startTime, timeDuration) => {
    const timeLeft =
      timeDuration - (currTime - startTime) / MILLISECONDS_IN_ONE_SECOND;
    this.setState({
      ...this,
      minutes: Math.floor(timeLeft / ONE_MINUTE_IN_SECONDS),
      seconds: Math.floor(timeLeft % ONE_MINUTE_IN_SECONDS),
      timeLeft: Math.floor(timeLeft)
    });
    return true;
  };

  setExerciseInterval() {
    return setInterval(() => {
      let repeatCountdown = this.state.repeatedCount;
      this.changeTimerState(
        Date.now(),
        this.state.startTime,
        this.state.duration
      );

      if (this.state.timeLeft <= 0 && repeatCountdown > 0) {
        this.setState({
          seconds: this.props.seconds,
          minutes: this.props.minutes,
          startTime: Date.now(),
          repeatedCount: repeatCountdown - 1
        });
      } else if (this.state.timeLeft <= 0 && repeatCountdown === 0) {
        this.setTimeToZero();
      }
    }, 1000);
  }

  setWorkoutInterval() {
    return setInterval(() => {
      this.changeTimerState(
        Date.now(),
        this.state.startTime,
        this.state.duration
      );
      if (this.state.timeLeft < 0) {
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
