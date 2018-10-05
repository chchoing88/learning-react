import React, { Component } from "react";
import PropTyeps from "prop-types";
import { v4 } from "uuid";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
    this.addColor = this.addColor.bind(this);
  }

  addColor(title, color) {
    this.setState(prevState => ({
      colors: [
        ...prevState.colors,
        {
          id: v4(),
          title,
          color,
          rating: 0
        }
      ]
    }));
  }

  render() {
    const { addColor } = this;
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors} />
      </div>
    );
  }
}

export default App;
