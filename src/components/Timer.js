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
    this.myInterval = setInterval(() => {
      const { minutes, seconds } = this.state;
      this.setState({ timerOn: true });
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (Number(seconds) === 0) {
        if (Number(minutes) === 0) {
          clearInterval(this.myInterval);
          this.setState({ timerOn: false });
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        {minutes === 0 && seconds === 0 ? (
          <h1>Workout Completed</h1>
        ) : (
          <h1>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </div>
    );
  }
}

export default Timer;
