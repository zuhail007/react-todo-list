import React, { useState } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Mark Done
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="container">

      <h1>My To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((t) => (
          <li key={t.id} className={t.completed ? "done" : ""}>

            <span onClick={() => toggleTask(t.id)}>
              {t.text}
            </span>

            <button onClick={() => deleteTask(t.id)}>
              Delete
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;