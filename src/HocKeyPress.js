import React from "react";
import ShortCutContext from "./Provider";
import Keypress from "./keypress";

class HOCKeypress extends React.Component {
  state = {
    shortCuts: []
  };
  render() {
    return (
      <Keypress
        {...this.props}
        addShortCuts={this.addShortCuts}
        removeShortCuts={this.removeShortCuts}
      />
    );
  }
}

export default HOCKeypress;
