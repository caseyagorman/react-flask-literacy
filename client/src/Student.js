import React from "react";

const Student = props => (
  <div key={props.student_id}>
    <p>
      {props.fname} {props.lname}
    </p>
  </div>
);

export default Student;
