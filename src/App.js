import React from "react";
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import TogglePages from "./components/TogglePages";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <TogglePages />
        </div>
      </div>
    );
  }
}

export default App;
