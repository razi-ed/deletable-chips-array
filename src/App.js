import React, { Component } from "react";
import ChipsArray from "./chips";

class App extends Component {
  state = {
    data: [{ key: 0, label: "var" }, { key: 1, label: "RESTful" }]
  };

  handleDelete = deleteThis => () => {
    const data = [...this.state.data].filter(ele => ele !== deleteThis);
    this.setState({ data });
  };

  render() {
    return (
      <ChipsArray
        data={this.state.data}
        onDelete={this.handleDelete}
        dataEmptyMsg="Select hosts"
      />
    );
  }
}

export default App;
