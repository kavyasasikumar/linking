import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { data,onChange } from "../action";
import "../App.css"

function GetData() {
  const getValue = [
    {
      label: "Name",
      type: "text",
      placeholder: "name",
      name: "studentName",
    },
    {
      label: "email",
      type: "email",
      placeholder: "Email",
      name: "email",
    },
    {
      label: "Mark",
      type: "text",
      placeholder: "Mark",
      name: "mark",
    },
  ];
  const dispatch = useDispatch();
  
  
  function onSubmit(e) {
    e.preventDefault();
    dispatch({ type: "submit", payload: data });
    console.log(data);
  }

  return (
    <form onSubmit={onSubmit} className="form">
      {getValue.map((val, i) => (
        <div key={i + 1}>
          <label>{val.label}</label>
          <input
            type={val.type}
            placeholder={val.placeholder}
            name={val.name}
            onChange={onChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
      <Link to="/student">Student List</Link>
    </form>
  );
}

export default GetData;
