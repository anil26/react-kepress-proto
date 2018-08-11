import React from "react";

const ShortCutContext = React.createContext([]);
class MyProvider extends React.Component {
  state = {
    shortCuts: [],
    eventMap: [],
    id: 0
  };
  addShortCuts = (value, action, callback) => {
    this.setState(prevState => {
      const { shortCuts, id, eventMap } = prevState;
      const CopyShortCuts = [...shortCuts, value];
      console.log("avalue of this", shortCuts, CopyShortCuts);
      callback(id + 1);
      return {
        shortCuts: CopyShortCuts,
        id: id + 1,
        eventMap: [
          ...eventMap,
          {
            id: id + 1,
            action: action
          }
        ]
      };
    });
  };
  removeShortCuts = id => {
    const { eventMap } = this.state;
    eventMap.forEach(event => {
      console.log("removing");
      if (event.id === id) {
        window.removeEventListener("keyup", event.action);
        window.removeEventListener("keydown", event.action);
      }
    });
  };
  render() {
    return (
      <ShortCutContext.Provider
        value={{
          ...this.state,
          addShortCuts: this.addShortCuts,
          removeShortCuts: this.removeShortCuts
        }}
      >
        {this.props.children}
      </ShortCutContext.Provider>
    );
  }
}

export { MyProvider, ShortCutContext };
