import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

function toggleComplete(taskToUpdate) {
    fetch(`http://localhost:6001/tasks/${taskToUpdate.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !taskToUpdate.completed,
      }),
    })
      .then((r) => r.json())
      .then((updatedTask) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        );
      });
  }

function addTask(newTask) {
    fetch("http://localhost:6001/tasks", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
    })
        .then((r) => r.json())
        .then((addedTask) => {
        setTasks((prevTasks) => [...prevTasks, addedTask]);
        });
}

    return (
        <TaskContext.Provider value ={{tasks, setTasks, addTask, toggleComplete}}>
            { children }
        </TaskContext.Provider>
    );
}
