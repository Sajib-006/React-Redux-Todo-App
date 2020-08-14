import React, { Component } from "react";
import Worklist from "./Worklist";

class App extends Component {
  state = {
    worklist: [
      { id: 1, body: "Do yuor homework" },
      { id: 2, body: "Code now" },
      { id: 3, body: "Solve problems" },
    ],
  };
  deleteWork = (id) => {
    let worklist = this.state.worklist.filter((work) => {
      return work.id !== id;
    });
    this.setState({
      worklist: worklist,
    });
  };
  render() {
    return (
      <div className='App container'>
        <h1 className='center bold italic blue-text'>
          <i>Todo's</i>
        </h1>
        <Worklist worklist={this.state.worklist} deleteWork={this.deleteWork} />
        {this.state.worklist.body}
      </div>
    );
  }
}

export default App;
