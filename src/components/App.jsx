import React, { useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";

function App() {
  const { setTasks } = useContext(TaskContext);

  useEffect(() => {
    fetch('http://localhost:6001/tasks')
    .then(r=>r.json())
    .then(data=>setTasks(data))
    
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
    </div>
  );
}

export default App;
