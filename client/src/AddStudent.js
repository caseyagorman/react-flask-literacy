import React, { Component } from "react";
import axios from "axios";
class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(event) {
    event.preventDefault();
    let newStudent = {
      fname: this.fnameInput.value,
      lname: this.lnameInput.value,
      grade: this.gradeInput.value
    };

    newStudent = JSON.stringify(newStudent);
    console.log(newStudent);
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    axios
      .post("http://localhost:5000/api/add-student", newStudent, config)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h2>Add student</h2>
        <form onSubmit={this.addStudent}>
          Add New Student
          <br />
          <label>
            First Name:
            <input
              id="nameForm"
              type="text"
              ref={fnameInput => (this.fnameInput = fnameInput)}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input ref={lnameInput => (this.lnameInput = lnameInput)} />
          </label>
          <br />
          <label>
            Grade:
            <input ref={gradeInput => (this.gradeInput = gradeInput)} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddStudent;
