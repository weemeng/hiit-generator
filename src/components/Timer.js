import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: this.props.minutes,
      seconds: this.props.seconds
    };
  }

  componentDidMount() {
    this.setIntervalTimer();
  }

  componentWillUnmount() {
    // clearInterval(this.myInterval);
  }

  setIntervalTimer() {
    this.intervalTimer = setInterval(() => {
      this.setState(previousState => {
        let seconds = (previousState.seconds -= 1);
        let minutes = previousState.minutes;
        if (previousState.seconds === -1 && previousState.minutes > 1) {
          seconds = 59;
          minutes = minutes - 1;
        }
        if (previousState.seconds === -1 && previousState.minutes === 1) {
          seconds = 59;
          minutes = 0;
        }
        if (previousState.seconds === -1 && previousState.minutes === 0) {
          seconds = this.props.seconds;
          minutes = this.props.minutes;
        }
        return { seconds, minutes };
      });
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

export default Timer;

// {minutes === 0 && seconds === 0 ? (
//   <h1>Workout Completed</h1>
// ) : (
//   <h1>
//     {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//   </h1>
