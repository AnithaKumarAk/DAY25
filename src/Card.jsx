/** @format */

import React from "react";
import "./card.css";

function Card({
  status,
  setStatus,
  taskobj,
  index,
  deleteTask,
  setTaskName,
  setDescription,
  setEdit,
}) {
  
  // Function To Handle Delete //
  const handleDelete = () => {
    deleteTask(index);
  };

 
 
  // Function To Save The Task //
   const handlesave = (e) => {
    console.log(e.target.value);
    let a = structuredClone(JSON.parse(localStorage.getItem("tasklist")));
    console.log(a, index);
    a[index] = { ...a[index], status: e.target.value };
    console.log(a);
    localStorage.setItem("tasklist", JSON.stringify(a));
    window.location.reload();
    setStatus(e.target.value);
  };

  return (
    
    <div className="col">
      <div className="card mt-3 p-3 taskcard">
        <div className="card-text">Name:{taskobj.Name}</div>
        <div className="card-text">Description:{taskobj.Description}</div>
        <div className="m-2">
          <label>Status:</label>
          <select onChange={handlesave} value={taskobj.status}>
            <option className=" bg-success" name="completed" value="Completed">
              Completed
            </option>
            <option
              className=" bg-danger"
              name="Not-Completed"
              value="Not-Completed"
            >
              Not-Completed
            </option>
          </select>
        </div>

        <div className=" card-group pt-5 d-flex justify-content-end">
          <button
            className="btn btn-success"
            onClick={() => {
              setDescription(taskobj.Description);
              setTaskName(taskobj.Name);
              setEdit(index);
              setStatus(taskobj.status);
            }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;