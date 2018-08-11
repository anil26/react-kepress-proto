import React from "react";
import { Consumer } from "./Provider";

class withShortCut extends React.Component {
  render() {
    const { Component } = this.props;
    return (
      <Consumer>
        {value => {
          return <Component {...this.props} shortCuts={value} />;
        }}
      </Consumer>
    );
  }
}

export default withShortCut;
