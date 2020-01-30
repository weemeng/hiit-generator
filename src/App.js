import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import SetWorkout from "./components/SetWorkout";
import WorkoutPage from "./components/WorkoutPage";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/set-workout" component={SetWorkout} />
              <Route path="/workout" component={WorkoutPage} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
