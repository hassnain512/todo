import EachTask from "./EachTask";
import Input from "./Input";
import React from "react";
function TaskTracker({ tasks, onDelte, addTask }) {
  return (
    <div>
      <h1 className="header">Task Tracker</h1>
      <Input addTask={addTask} />
      <EachTask tasks={tasks} onDelete={onDelte} />
    </div>
  );
}

export default TaskTracker;
