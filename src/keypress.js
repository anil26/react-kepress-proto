import React from "react";
import { ShortCutContext } from "./Provider";

class Keypress extends React.Component {
  state = {
    eventHandler: null,
    map: {},
    id: null
  };
  componentDidMount() {
    const { evt, action, addShortCuts, desc } = this.props;
    const shortCutId = addShortCuts(
      {
        evt,
        desc
      },
      action,
      id => {
        this.setState({
          id: shortCutId
        });
      }
    );
    Mousetrap.bind(evt.join("+"), action);
  }
  componentWillUnmount() {
    const { removeShortCuts, evt } = this.props;
    const { id } = this.state;
    removeShortCuts(id, evt);
    //clear events
    //Mousetrap.unbind(evt.join("+"));
  }
  render() {
    return "";
  }
}

function KeypressHoc(props) {
  return (
    <ShortCutContext.Consumer>
      {value => {
        return <Keypress {...value} {...props} />;
      }}
    </ShortCutContext.Consumer>
  );
}

export default KeypressHoc;
