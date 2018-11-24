import React, { Component } from "react";
import AddStudent from "./AddStudent";
import ViewStudents from "./ViewStudents";
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ViewStudents />
        </div>
        <div>
          <AddStudent />
        </div>
      </div>
    );
  }
}

export default App;
