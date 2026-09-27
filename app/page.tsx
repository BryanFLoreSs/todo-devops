"use client";

import { useState } from "react";

type Task = {
  text: string;
  completed: boolean;
};

export default function Home() {
  const [task, setTask] = useState<string>("");

  const [tasks, setTasks] = useState<Task[]>([
    { text: "Finish assignment", completed: false },
    { text: "Study Next.js", completed: false },
    { text: "Setup Git repository", completed: true },
  ]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task.trim(),
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

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <main className="container">
      <div className="todo-card">
        <h1>TODO APPLICATION</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button className="add-button" onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="task-list">
          {tasks.map((item, index) => (
            <div className="task-item" key={index}>
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => completeTask(index)}
                />

                <span className={item.completed ? "completed" : ""}>
                  {item.text}
                </span>
              </div>

              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          ))}

          {tasks.length === 0 && (
            <p className="empty-message">No tasks yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}