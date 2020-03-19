import React from "react";
import {
  upperBodyExerciseData,
  lowerBodyExerciseData
} from "../constants/exerciseData";
import BaseTimer from "../components/BaseTimer";
const NUMBER_OF_SETS = 5;
const EXERCISE_DURATION = 30;

class WorkoutGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: this.props.focus,
      time: this.props.time,
      duration: this.props.duration,
      exerciseArray: [],
      currentIndex: 0,
      nextIndex: 1,
      startTime: this.props.startTime
    };
  }

  repeatExerciseTimer = () => {
    return this.state.time / EXERCISE_DURATION - 1;
  };

  generateExerciseArray = (numberOfExercises, exerciseData) => {
    var exercises = [];

    for (let i = 0; i < numberOfExercises; i++) {
      const targetId = Math.floor(exerciseData.length * Math.random());
      exercises.push(exerciseData[targetId].name);
      exerciseData.splice(targetId, 1);
    }
    console.log(exercises);
    return exercises;
  };

  generateWorkout = () => {
    const totalNumberOfExercises = this.state.time / this.state.duration;
    const numberOfExercises = totalNumberOfExercises / NUMBER_OF_SETS;
    switch (this.state.focus) {
      case "upper body": {
        return this.generateExerciseArray(
          numberOfExercises,
          upperBodyExerciseData
        );
      }
      case "lower body": {
        return this.generateExerciseArray(
          numberOfExercises,
          lowerBodyExerciseData
        );
      }
      default: {
        console.log("No Exercise Generated");
      }
    }
  };

  updateExerciseInterval = () => {
    setInterval(() => {
      let currIdx = this.state.currentIndex + 1;
      let nextIdx = this.state.nextIndex + 1;
      if (currIdx === this.state.exerciseArray.length) {
        currIdx = 0;
        nextIdx = currIdx + 1;
      }
      this.setState({
        currentIndex: currIdx,
        nextIndex: nextIdx
      });
      // this.props.nextExerciseCallback(
      //   this.state.exerciseArray[this.state.nextIndex]
      // );
      console.log(this.state.currentIndex);
      console.log(this.state.nextIndex);
    }, 30000);
  };

  componentDidMount() {
    this.setState({
      exerciseArray: this.generateWorkout()
    });
  }

  componentDidUpdate() {
    this.updateExerciseInterval();
    console.log("component did update");
  }

  render() {
    return (
      <div>
        <div className="current-exercise-render">
          <div className="gif">
            <iframe title="exercise-gif"></iframe>
            <br></br>
            <span>
              <a href="https://giphy.com/">via GIPHY</a>
            </span>
          </div>
          <h3>
            Current Exercise: <br></br>{" "}
            {this.state.exerciseArray[this.state.currentIndex]}
          </h3>
        </div>
        <div className="bottom-row">
          <div className="exercise-timer">
            <BaseTimer
              minutes={0}
              seconds={EXERCISE_DURATION}
              duration={EXERCISE_DURATION}
              startTime={this.state.startTime}
              isExerciseTimer={true}
              repeatedCount={this.repeatExerciseTimer()}
            />
          </div>
          <div className="next-exercise-render">
            <h5>
              Next Exercise: <br></br>{" "}
              {this.state.exerciseArray[this.state.nextIndex]}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutGenerator;
