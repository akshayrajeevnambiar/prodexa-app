import React from "react";
import TaskList from "@/components/TaskList";

// dummy list of tasks
const tasks = [
  { id: "1", title: "Task One", description: "This is the first task." },
  { id: "2", title: "Task Two", description: "This is the second task." },
  { id: "3", title: "Task Three", description: "This is the third task." },
];

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}
