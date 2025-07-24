import React from "react";
import { useState } from "react";

function Input({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  function handleTextForm(e) {
    e.preventDefault();
    setTaskText(e.target.value);
  }

  function handleAddTask() {
    if (taskText.trim() === "") {
      alert("Please enter a task");
      return;
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        text: taskText,
        Remainder: false,
        desc: taskDesc,
      };
      // Assuming there's a function to add the task to the list
      // onAdd(newTask);
      setTaskText("");
      setTaskDesc("");
      addTask(newTask);
    }
  }

  function handleDescForm(e) {
    e.preventDefault();
    setTaskDesc(e.target.value);
  }
  return (
    <div className="inputContainer">
      <input
        type="text"
        className="input-form"
        value={taskText}
        onChange={handleTextForm}
        placeholder="Add Task"
      />
      <input
        type="text"
        className="input-form"
        value={taskDesc}
        onChange={handleDescForm}
        placeholder="Description"
      />
      <button className="btn" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default Input;
