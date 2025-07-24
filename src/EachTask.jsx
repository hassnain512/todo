import React from "react";
import { FaTrash } from "react-icons/fa";

function EachTask({ tasks, onDelete }) {
  return (
    <div className="container">
      {tasks.map((task) => (
        <div className="eachTask" key={task.id}>
          <div className="taskHeader">
            <h1>{task.text}</h1>
            <button onClick={() => onDelete(task.id)}>
              <FaTrash />
            </button>
          </div>
          <p>{task.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default EachTask;
