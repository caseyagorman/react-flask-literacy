import React from "react";
import axios from "axios";
import Student from "./Student";
const apiUrl = "http://localhost:5000/api/students";

class ViewStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { students: null };
    axios.get(apiUrl).then(response => {
      this.setState({
        students: response.data
      });
    });
  }

  displayStudents(students) {
    if (!students) {
      return <p>Loading student...</p>;
    }
    return students.map(student => Student(student));
  }

  render() {
    return (
      <div>
        <h1> {this.displayStudents(this.state.students)}</h1>
      </div>
    );
  }
}

export default ViewStudents;
