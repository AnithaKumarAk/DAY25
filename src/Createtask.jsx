/** @format */

import { useState } from "react";

function Createtask({
  status,
  save,
  taskName,
  setTaskName,
  description,
  setDescription,
}) {
  //function to get value and set values for Task name and Description //
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskname") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  // function to save task//
  const handlesave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    taskObj["status"] = status;
    save(taskObj);
  };

  return (
    <form className=" d-flex justify-content-between ">
      <div className="col-5 ">
        <input
          type="text"
          name="taskname"
          id="input"
          className="form-control  focus-ring focus-ring-success"
          onChange={handleChange}
          value={taskName}
          placeholder="Add task"
        />
      </div>
      <div className="col-5 ">
        <input
          name="description"
          id="text-area"
          className="form-control focus-ring focus-ring-success"
          onChange={handleChange}
          value={description}
          placeholder="Add Description"
        ></input>
      </div>

      <button
        id="button"
        type="button"
        className="btn btn-success "
        onClick={handlesave}
      >
        Add
      </button>
    </form>
  );
}

export default Createtask;