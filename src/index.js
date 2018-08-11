import React from "react";
import ReactDOM from "react-dom";
// import HOCKeypress from "./HocKeyPress";
import ComponentB from "./ComponentB";
import { MyProvider } from "./Provider";
import Keypress from "./keypress";

import "./styles.css";

class App extends React.Component {
  action1 = () => {
    console.log("action ! triggered");
  };
  render() {
    return (
      <MyProvider>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <Keypress
            evt={["shift", "s"]}
            action={this.action1}
            desc="Console action1"
          />
        </div>
        <ComponentB />
      </MyProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
