"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([
    { text: "Finish assignment", completed: false },
    { text: "Study Next.js", completed: false },
    { text: "Setup Git repository", completed: true },
  ]);

  // Add Task
  function addTask() {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  }

  // Complete Task
  function completeTask(index: number) {
    setTasks(
      tasks.map((item, i) =>
        i === index
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  // Delete Task
  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <main>
      <h1>TODO APPLICATION</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div>
        {tasks.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => completeTask(index)}
            />

            <span>{item.text}</span>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}