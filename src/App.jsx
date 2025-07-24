import "./App.css";
import { useState } from "react";
import TaskTracker from "./TaskTracker";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "SLEEP", Remainder: false, desc: "I wanna sleep at 12pm" },
    { id: 2, text: "EAT", Remainder: false, desc: "I wanna eat meal at 08pm" },
    { id: 3, text: "CODE", Remainder: false, desc: "I wanna code at 09pm" },
  ]);
  function onDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  
  }
  return (
    <div>
      
      <TaskTracker tasks={tasks} onDelte={onDelete} addTask = {addTask} />

      
    </div>
  );
}

export default App;
