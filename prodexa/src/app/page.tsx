"use client";
import React, { useState } from "react";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

interface Task {
  id: string;
  title: string;
  description: string;
}

export default function Home() {
  // dummy list of tasks
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Task One", description: "This is the first task." },
    { id: "2", title: "Task Two", description: "This is the second task." },
    { id: "3", title: "Task Three", description: "This is the third task." },
  ]);

  const addTasks = (title: string, description: string) => {
    const newTask = {
      id: (tasks.length + 1).toString(),
      title: title,
      description: description,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>
      <TaskList tasks={tasks} />
      <TaskForm onSubmit={addTasks} />
    </div>
  );
}
