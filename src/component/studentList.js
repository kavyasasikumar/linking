import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

import { useDispatch } from "react-redux";

import React from "react";

function StudentList() {
  const selector = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Link to="/"><h1>Form</h1></Link>

        {selector.map((data, i) => (
          <div
            key={i + 1}
            className="studentList"
            onClick={() => {
              dispatch({ type: "delete", id: i });
            }}
          >
            <h1>name:{data.studentName}</h1>
            <p>email:{data.email}</p>
            <p> mark:{data.mark}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default StudentList;
