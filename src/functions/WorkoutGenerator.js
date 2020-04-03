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
      time: 900, //this.props.time,
      duration: 30, //this.props.duration,
      exerciseNames: [],
      gifNames: [],
      currentIndex: 0,
      nextIndex: 1,
      startTime: this.props.startTime
    };
    this.workoutIntervalId = 0;
  }

  repeatExerciseTimer = () => {
    return this.state.time / EXERCISE_DURATION - 1;
  };

  generateExerciseArray = (numberOfExercises, exerciseData) => {
    var exercises = [];
    var gifNames = [];

    for (let i = 0; i < numberOfExercises; i++) {
      const targetId = Math.floor(exerciseData.length * Math.random());
      exercises.push(exerciseData[targetId].name);
      gifNames.push(exerciseData[targetId].gif);
      exerciseData.splice(targetId, 1);
    }

    this.setState({
      gifNames: gifNames
    });

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
        throw new Error("No Exercise Generated");
      }
    }
  };

  determineTimeDelta = (desiredTime) => {
    
  }

  updateExerciseInterval = () => {
    return setInterval(() => {
      let currIdx = this.state.nextIndex;
      let nextIdx = this.state.nextIndex + 1;
      if (currIdx === this.state.exerciseNames.length - 1) {
        nextIdx = 0;
      }
      this.setState({
        currentIndex: currIdx,
        nextIndex: nextIdx
      });
    }, 30000);
  };

  componentDidMount() {
    this.setState({
      exerciseNames: this.generateWorkout()
    });
    this.workoutIntervalId = this.updateExerciseInterval();
  }

  componentWillUnmount() {
    clearInterval(this.workoutIntervalId);
  }

  render() {
    return (
      <div>
        <div className="current-exercise-render">
          <div className="gif">
            <iframe
              title="exercise-gif"
              src={this.state.gifNames[this.state.currentIndex]}
            ></iframe>
            <br></br>
            <span>
              <a href="https://giphy.com/">via GIPHY</a>
            </span>
          </div>
          <h3>
            Current Exercise: <br></br>{" "}
            {this.state.exerciseNames
              ? this.state.exerciseNames[this.state.currentIndex]
              : "No Exercise"}
          </h3>
        </div>
        <div className="bottom-row">
          <div className="exercise-timer" aria-label="exercise-timer">
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
              {this.state.exerciseNames[this.state.nextIndex]}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutGenerator;
