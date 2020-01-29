import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SetWorkout from "./components/SetWorkout";
import WorkoutPage from "./components/WorkoutPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/set-workout" component={SetWorkout} />
            <Route path="/workout-page" component={WorkoutPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
