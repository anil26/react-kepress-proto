import React from "react";
import Keypress from "./keypress";

class ComponentB extends React.Component {
  action2 = () => {
    console.log("Action 2");
  };
  render() {
    return (
      <div>
        Component B
        <Keypress
          evt={["shift", "a"]}
          action={this.action2}
          desc="Console action2"
        />
      </div>
    );
  }
}

export default ComponentB;
