import React, { Component } from "react";
import Student from "./components/Student";
// import StudentForm from "./components/StudentForm";
import "./App.css";
import axios from "axios";
const apiUrl = "http://localhost:5000/api/add-student";

class App extends Component {
  constructor(props) {
    super(props);
    const students = this.getStudentList();
    this.state = { students };

    this.addWord = this.addWord.bind(this);
  }

  addWord(event) {
    event.preventDefault();
    const word = this.wordInput.value;
    const words = this.state.students.slice();
    for (let i = 0; i < students.length; i++) {
      words[i].words.push(word);
    }
    const newState = Object.assign(this.state, { students });
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h2>Students</h2>
        <div>
          {this.state.students.map((student, i) => (
            <Student key={i} name={student.name} words={student.words} />
          ))}
        </div>

        <form onSubmit={this.addStudent}>
          Add New Student
          <input
            id="nameForm"
            type="text"
            ref={nameInput => (this.nameInput = nameInput)}
          />
          <input type="submit" />
        </form>

        <form onSubmit={this.addWordToStudents}>
          Add New Word to All Students
          <input type="text" ref={wordInput => (this.wordInput = wordInput)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
