"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([
    { text: "Finish assignment", completed: false },
    { text: "Study Next.js", completed: false },
    { text: "Setup Git repository", completed: true },
  ]);

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

  function completeTask(index: number) {
    setTasks(
      tasks.map((item, i) =>
        i === index
          ? { ...item, completed: !item.completed }
          : item
      )
    );
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

            <button>Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
}